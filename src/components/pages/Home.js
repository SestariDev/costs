import React, { useState, useEffect, useRef } from 'react';
import Container from '../nav/Container';
import img from '../../img/costs_logo.png';
import { themes } from '../../contas';
import NavBar from '../nav/NavBar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Home(props) {
    const [tempTime, setTempTime] = useState(60);
    const [time, setTime] = useState(60);
    const [show, setShow] = useState(false);
    const [participants, setParticipants] = useState([]);
    const [newParticipant, setNewParticipant] = useState("");

    useEffect(() => {
        const savedParticipants = JSON.parse(localStorage.getItem('participants')) || [];
        setParticipants(savedParticipants);
    }, []);

    useEffect(() => {
        localStorage.setItem('participants', JSON.stringify(participants));
    }, [participants]);

    const handleSave = () => {
        setTime(Number(tempTime));
    };

    const handleStart = () => {
        setShow(true);
    };

    const handleAddParticipant = () => {
        if (newParticipant.trim() !== "") {
            setParticipants([...participants, { name: newParticipant, score: 0 }]);
            setNewParticipant("");
        }
    };

    const handleRemoveParticipant = (indexToRemove) => {
        setParticipants(participants.filter((_, index) => index !== indexToRemove));
    };

    const handleResetScores = () => {
        setParticipants(participants.map(participant => ({ ...participant, score: 0 })));
    };

    return (
        <Container>
            <div className='flex items-center justify-center w-full gap-2 sX:justify-end'>
                <img src={img} alt='Costs' className='w-[70%] s2:w-[200px] sX:h-[5%] h-[30%]' />
            </div>
            
            <p>Tempo de jogo</p>
            <div className='flex items-center justify-between w-full gap-2'>
                <input 
                    className='p-4'
                    type='number' 
                    value={tempTime}
                    onChange={(e) => setTempTime(e.target.value)}
                />
                <button onClick={handleSave}>
                    Salvar
                </button>
            </div>
            <div className='flex items-center justify-between w-full gap-2'>
                <input 
                    className='p-4'
                    type='text' 
                    value={newParticipant}
                    onChange={(e) => setNewParticipant(e.target.value)}
                    placeholder="Nome do participante"
                />
                <button onClick={handleAddParticipant}>
                    Adicionar
                </button>
            </div>
            
            <ul>
                {participants.map((participant, index) => (
                    <li key={index} className='flex justify-between text-[18px] pl-2'>
                        {participant.name} -  {participant.score}
                        <div 
                        onClick={() => handleRemoveParticipant(index)} 
                        className='ml-2 font-extrabold text-red-500'>X</div>
                    </li>
                ))}
            </ul>

            <div className='flex justify-center w-full '>
                <button className='w-full ' onClick={handleStart} disabled={participants.length === 0}>
                    Iniciar Jogo
                </button>
            </div>
            {participants.length === 0 && <p className='text-red-500'>Adicione participantes para iniciar o jogo</p>}
            
            <button className='p-2 mt-2 font-extrabold text-white bg-yellow-500 rounded' onClick={handleResetScores}>Resetar Pontuações</button>

            {show && <Game time={time} participants={participants} handleClose={() => setShow(false)} />}
        </Container>
    );
}

export const Game = (props) => {
    const [index, setIndex] = useState(0);
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [timeLeft, setTimeLeft] = useState(props.time);
    const [timerRunning, setTimerRunning] = useState(false);
    const [participants, setParticipants] = useState(props.participants);
    const [drawer, setDrawer] = useState(null);
    const [showScore, setShowScore] = useState(false);
    const [usedThemes, setUsedThemes] = useState([]);
    const [allThemesUsed, setAllThemesUsed] = useState(false);
    const [allPicsAnswered, setAllPicsAnswered] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [showWord, setShowWord] = useState(true);

    const audioRef = useRef(new Audio('acabou.mp3'));

    useEffect(() => {
        selectRandomTheme();
    }, []);

    useEffect(() => {
        if (timerRunning && timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            audioRef.current.play();
            setTimerRunning(false);
            setShowScore(true);
        }
    }, [timerRunning, timeLeft]);

    useEffect(() => {
        if (index > 0) {
            setShowWord(true);
            const timer = setTimeout(() => {
                setShowWord(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [index]);

    const selectRandomTheme = () => {
        const themeKeys = Object.keys(themes).filter(key => !usedThemes.includes(key));
        if (themeKeys.length === 0) {
            setAllThemesUsed(true);
            return;
        }
        const randomThemeKey = themeKeys[Math.floor(Math.random() * themeKeys.length)];
        setSelectedTheme(themes[randomThemeKey]);
        setUsedThemes([...usedThemes, randomThemeKey]);
    };

    const handleNextPick = () => {
        if (index < selectedTheme.pics.length) {
            setIndex(index + 1);
        } else {
            setAllPicsAnswered(true);
            setShowScore(true);
            setTimerRunning(false);
        }

        if (!timerRunning) {
            setTimerRunning(true);
        }
    };

    const handleParticipantClick = (participantName) => {
        setParticipants(participants.map(participant =>
            participant.name === participantName ? { ...participant, score: participant.score + 1 } : participant
        ));
        setCorrectAnswers(prevCorrectAnswers => prevCorrectAnswers + 1);

        handleNextPick();
    };

    const handleSkip = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        handleNextPick();
    };

    const handleDrawerSelection = (participantName) => {
        setDrawer(participantName);
        setIndex(1);
        setCorrectAnswers(0);
        setTimerRunning(true);
    };

    const handleNewRound = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIndex(0);
        setTimeLeft(props.time);
        setTimerRunning(false);
        setShowScore(false);
        setAllPicsAnswered(false);
        setCorrectAnswers(0);
        selectRandomTheme();
    };

    const handleEndGame = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        props.handleClose();
    };

    useEffect(() => {
        if (correctAnswers === 4) {
            setParticipants(participants.map(participant =>
                participant.name === drawer ? { ...participant, score: participant.score + 1 } : participant
            ));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [correctAnswers]);

    return (
        <div className='absolute top-0 left-0 flex flex-col justify-start w-full h-full p-6 bg-gray-300'>
            <div className='flex justify-between w-full'>
                <img src={img} alt='Costs' className='s2:w-[200px] w-[100px]' />
                <p className='text-lg font-extrabold text-black cursor-pointer' onClick={props.handleClose}>X</p>
            </div>
            {allThemesUsed ? (
                <div className='flex flex-col items-center justify-center h-full text-center'>
                    <h1 className='mb-4 text-4xl text-black'>Ihh desculpe, não pensei em todos os temas</h1>
                </div>
            ) : showScore ? (
                <div className='flex flex-col items-center justify-center h-full text-center'>
                    <h1 className='mb-4 text-4xl text-black'>Pontuações</h1>
                    <ul className='mb-4 text-black'>
                        {participants.map((participant, index) => (
                            <li key={index}>{participant.name} - {participant.score}</li>
                        ))}
                    </ul>
                    <button className='p-2 mt-2 font-extrabold text-white bg-yellow-500 rounded' onClick={handleNewRound}>Nova Rodada</button>
                    <button className='p-2 mt-2 font-extrabold text-white bg-red-900 rounded' onClick={handleEndGame}>Finalizar Jogo</button>
                </div>
            ) : (
                index === 0 ? (
                    <div className='flex flex-col items-center justify-center h-full text-center'>
                        <div style={{ width: 100, height: 100, marginBottom: 20 }}>
                            <CircularProgressbar
                                value={(timeLeft / props.time) * 100}
                                text={`${timeLeft}s`}
                                styles={buildStyles({
                                    textColor: 'black',
                                    pathColor: 'green',
                                    trailColor: 'gray'
                                })}
                            />
                        </div>
                        <div className='w-full'>
                            <h1 className='mb-4 text-4xl text-black min-w-8'>{selectedTheme?.theme}</h1>
                            <div>
                                <p className='mb-2 text-black min-w-8'>Selecione o desenhista:</p>
                                <div className='flex flex-wrap justify-center gap-2'>
                                    {participants.map((participant, index) => (
                                        <button key={index} className='p-2 font-bold text-white bg-black rounded min-w-8' onClick={() => handleDrawerSelection(participant.name)}>
                                            {participant.name}
                                        </button>
                                    ))}
                                </div>
                                <button className='p-2 mt-4 text-black bg-yellow-500 rounded' onClick={selectRandomTheme}>Pular Categoria</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col items-center justify-center h-full text-center'>
                        <div style={{ width: 100, height: 100, marginBottom: 20 }}>
                            <CircularProgressbar
                                value={(timeLeft / props.time) * 100}
                                text={`${timeLeft}s`}
                                styles={buildStyles({
                                    textColor: 'black',
                                    pathColor: 'green',
                                    trailColor: 'gray'
                                })}
                            />
                        </div>
                        <div className='flex items-center gap-3 mb-4 text-4xl text-black'>
                            {showWord ? selectedTheme?.pics[index-1] : '-----'}
                            {showWord ? (
                                <FiEyeOff onClick={() => setShowWord(false)} className='cursor-pointer' />
                            ) : (
                                <FiEye onClick={() => setShowWord(true)} className='cursor-pointer' />
                            )}
                        </div>
                        <p className='mb-2 text-black min-w-8'>Quem acertou?:</p>
                        <div className='flex flex-wrap justify-center gap-2 mb-4'>
                            {participants.filter(participant => participant.name !== drawer).map((participant, index) => (
                                <button key={index} className='p-2 text-white bg-black rounded' onClick={() => handleParticipantClick(participant.name)}>
                                    {participant.name}
                                </button>
                            ))}
                        </div>
                        <button className='p-2 text-black bg-yellow-500 rounded' onClick={handleSkip}>Pular Desenho</button>
                    </div>
                )
            )}
        </div>
    );
};

export default Home;

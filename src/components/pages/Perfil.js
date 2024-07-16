import React, { useState, useEffect } from 'react';
import Container from '../nav/Container';
import img from '../../img/perfil.png';
import { perfis } from './Perfis';
import { FiX } from 'react-icons/fi';

const themes = perfis;

function Perfil(props) {
    const [showGame, setShowGame] = useState(false);
    const [participants, setParticipants] = useState([]);
    const [newParticipant, setNewParticipant] = useState("");

    useEffect(() => {
        const savedParticipants = JSON.parse(localStorage.getItem('participants')) || [];
        setParticipants(savedParticipants);
    }, []);

    useEffect(() => {
        localStorage.setItem('participants', JSON.stringify(participants));
    }, [participants]);

    const handleStart = () => {
        setShowGame(true);
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

    const handleEndGame = () => {
        setShowGame(false);
    };

    return (
        <Container>
            <div className='flex items-center justify-center w-full gap-2 sX:justify-end'>
                <img src={img} alt='Costs' className='w-[30%] s2:w-[200px] sX:h-[5%] h-[30%]' />
            </div>
            
            <div className='flex items-center justify-between w-full gap-2'>
                <input 
                    className='w-full p-4'
                    type='text' 
                    value={newParticipant}
                    onChange={(e) => setNewParticipant(e.target.value)}
                    placeholder="Nome do participante"
                />
                <button className='px-4 py-4 text-white bg-black rounded-md hover:bg-gray-700 focus:outline-none' onClick={handleAddParticipant}>
                    Adicionar
                </button>
            </div>
            
            <ul>
                {participants.map((participant, index) => (
                    <li key={index} className='flex justify-between text-[18px] pl-2'>
                        {participant.name} - {participant.score}
                        <div 
                            onClick={() => handleRemoveParticipant(index)} 
                            className='ml-2 font-extrabold text-red-500'>X</div>
                    </li>
                ))}
            </ul>

            <div className='flex justify-center w-full '>
                <button className={`w-full p-2 ${participants.length === 0 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-yellow-500 text-white hover:bg-yellow-600'}`} onClick={handleStart} disabled={participants.length === 0}>
                    Iniciar Jogo
                </button>
            </div>
            {participants.length === 0 && <p className='text-red-500'>Adicione participantes para iniciar o jogo</p>}
            
            {showGame ? <Game participants={participants} setParticipants={setParticipants} handleEndGame={handleEndGame} /> : null}
        </Container>
    );
}

const Game = ({ participants, setParticipants, handleEndGame }) => {
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [shuffledParticipants, setShuffledParticipants] = useState([]);
    const [revealedHints, setRevealedHints] = useState([]);
    const [showScores, setShowScores] = useState(false);
    const [winnerMessage, setWinnerMessage] = useState("");

    useEffect(() => {
        setShuffledParticipants([...participants].sort(() => Math.random() - 0.5));
        selectRandomTheme();
    }, []);

    const selectRandomTheme = () => {
        const randomTheme = themes[Math.floor(Math.random() * themes.length)];
        setSelectedTheme(randomTheme);
    };

    const handleHintClick = (index) => {
        setRevealedHints([...revealedHints, index]);
    };

    const handleParticipantClick = (participantName) => {
        const pointsEarned = 20 - revealedHints.length;
        const updatedParticipants = participants.map(participant =>
            participant.name === participantName
                ? { ...participant, score: participant.score + pointsEarned }
                : participant
        );
        setParticipants(updatedParticipants);
        setWinnerMessage(`${participantName} ganhou ${pointsEarned} pontos!`);
        setShowScores(true);
        setRevealedHints([])
    };

    const handleNewRound = () => {
        setRevealedHints([]);
        selectRandomTheme();
        setShowScores(false);
        setWinnerMessage("");
    };

    const handleResetGame = () => {
        if (window.confirm('Tem certeza que deseja reiniciar o jogo?')) {
            setParticipants(participants.map(participant => ({ ...participant, score: 0 })));
            handleNewRound();
        }
    };

    return (
        <div className='fixed inset-0 flex flex-col items-center justify-start p-6 overflow-y-auto bg-gray-300'>
            <div className='flex items-center justify-between w-full'>
                <button
                className='px-4 py-2 mt-5 text-white bg-green-900 rounded-md hover:bg-gray-700 focus:outline-none'
                onClick={() => setShowScores(true)}>
                    Ver pontuações
                </button>
                <button className='text-lg font-extrabold text-black bg-transparent cursor-pointer' onClick={handleEndGame}>x</button>
            </div>
            <div className='flex flex-col items-center mt-4'>
                <h1 className='text-4xl font-extrabold text-black'>{selectedTheme?.theme}</h1>
                <h2 className='text-2xl font-extrabold text-black'>{selectedTheme?.name}</h2>
                {revealedHints.map(index => (
                    <p key={index} className='mt-2 text-lg text-black'>{selectedTheme.questions[index]}</p>
                ))}
            </div>

            <div className='flex flex-wrap justify-center w-full mt-4'>
                {selectedTheme?.questions.map((_, index) => (
                    <button
                        key={index}
                        className='p-2 m-1 font-extrabold text-white bg-blue-500 rounded'
                        onClick={() => handleHintClick(index)}
                        disabled={revealedHints.includes(index)}
                        style={{
                         background: revealedHints.includes(index) &&  'red' 
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            <div className='flex flex-wrap justify-center w-full mt-4'>
                {shuffledParticipants.map(participant => (
                    <button
                        key={participant.name}
                        className='p-2 m-1 font-extrabold text-white bg-green-500 rounded'
                        onClick={() => handleParticipantClick(participant.name)}
                    >
                        {participant.name}
                    </button>
                ))}
                
            </div>

            <button
             onClick={handleNewRound}
                className='px-4 py-2 mt-5 text-white bg-yellow-700 rounded-md hover:bg-gray-700 focus:outline-none'>
                    Pular tema
            </button>

            {showScores && (
                <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-white '>
                     <div onClick={() => setShowScores(false)} className='absolute cursor-pointer top-0 right-0 text-black text-[32px] font-bold p-4'><FiX/></div>
                    <h3 className='mb-2 text-2xl font-bold'>Pontuações</h3>
                    <p className='text-lg text-black'>{winnerMessage}</p>
                    <ul className='pl-4 list-disc'>
                        {participants.map((participant, index) => (
                            <li key={index} className='text-lg'>
                                {participant.name}: {participant.score}
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-center mt-4'>
                        <button className='p-2 mr-2 font-extrabold text-white bg-green-500 rounded' onClick={handleResetGame}>
                            Reiniciar Jogo
                        </button>
                        <button className='p-2 ml-2 font-extrabold text-white bg-blue-500 rounded' onClick={handleNewRound}>
                            Próxima Palavra
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Perfil;

import React, { useState, useEffect } from 'react';
import Container from '../nav/Container';
import styles from './WheelOfFortuneGame.module.css'; // Arquivo CSS para estilos personalizados
import { rodaThemes } from './WhellThemes';
import { FiX } from 'react-icons/fi';

const initialThemes = rodaThemes;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

// Lista de cores fixas para os participantes
const participantColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-indigo-500",
    "bg-pink-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-cyan-500",
];


function WheelOfFortuneGame() {
    const [participants, setParticipants] = useState([]);
    const [newParticipant, setNewParticipant] = useState("");
    const [currentParticipantIndex, setCurrentParticipantIndex] = useState(0);
    const [scores, setScores] = useState({});
    const [theme, setTheme] = useState(null);
    const [words, setWords] = useState([]);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [spinning, setSpinning] = useState(false);
    const [wheelResult, setWheelResult] = useState(null);
    const [message, setMessage] = useState("");
    const [guess, setGuess] = useState(["", "", ""]);
    const [gameStarted, setGameStarted] = useState(false);
    const [availableThemes, setAvailableThemes] = useState([...initialThemes]);
    const [zoom, setZoom] = useState(false);
    
    useEffect(() => {
        if (theme) {
            const filteredWords = theme.words.map(word => {
                if (word.trim().length === 0) {
                    return ""; 
                } else {
                    return word.split('').map(char => char === ' ' ? ' ' : '_').join('');
                }
            });
            setWords(filteredWords);
        }
    }, [theme]);

    const countHiddenLetters = () => {
        let hiddenCount = 0;
        words.forEach(word => {
            hiddenCount += word.split('').filter(char => char === '_').length;
        });
        return hiddenCount;
    };
    

    const handleAddParticipant = () => {
        if (newParticipant.trim() !== "") {
            setParticipants([...participants, newParticipant]);
            setScores({ ...scores, [newParticipant]: 0 });
            setNewParticipant("");
        }
    };

    const handleStartGame = () => {
        if (participants.length > 0 && availableThemes.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableThemes.length);
            const selectedTheme = availableThemes[randomIndex];
            setTheme(selectedTheme);
            setGameStarted(true);
            setAvailableThemes(availableThemes.filter(theme => theme !== selectedTheme));
        }
    };

    const outcomes = [
        "1000", "650", "400", "650", "300", "Perde a Vez", "550", "900", "450", "100", "750", "Perde a Vez", "950", "200", "350", "700", "250", "Perde a Vez", "600", "850", "500", "50", "800", "Perde Tudo", "Perde a Vez"
    ];

    const handleSpin = () => {
        setSpinning(true);
        const newPrizeNumber = Math.floor(Math.random() * outcomes.length);
        const result = outcomes[newPrizeNumber];

        setTimeout(() => {
            setSpinning(false);
            setWheelResult(result);
            handleOutcome(result);
        }, 1000); // 1 segundo para simular a rotação da roleta
    };

    const handleOutcome = (result) => {
        const participant = participants[currentParticipantIndex];
        if (result === "Perde Tudo") {
            setScores({ ...scores, [participant]: 0 });
            alert(`${participant} - Perdeu Tudo`);
            nextParticipant();
        } else if (result === "Perde a Vez") {
            alert(`Rodada de ${participant} - Passou a Vez`);
            nextParticipant();
        } else {
            setMessage(`Rodada de ${participant} - Valendo R$ ${result}`);
        }
    };

    const handleGuess = (letter) => {
        const participant = participants[currentParticipantIndex];
        let updatedWords = [...words];
        let scoreIncrease = 0;
        if (theme && !isNaN(parseInt(wheelResult))) {
            theme.words.forEach((word, wordIndex) => {
                let newWord = "";
                for (let i = 0; i < word.length; i++) {
                    if (word[i].toUpperCase() === letter.toUpperCase()) {
                        newWord += letter.toUpperCase();
                        scoreIncrease += parseInt(wheelResult); // Multiplicador de 
                    } else {
                        newWord += updatedWords[wordIndex][i];
                    }
                }
                updatedWords[wordIndex] = newWord;
            });
            setWords(updatedWords);
            setScores({ ...scores, [participant]: scores[participant] + scoreIncrease });
            setGuessedLetters([...guessedLetters, letter.toUpperCase()]);
            if (updatedWords.every(word => !word.includes('_'))) {
                handleCorrectGuess();
            } else {
                nextParticipant();
            }
        }
    };

    const handleCorrectGuess = () => {
        const participant = participants[currentParticipantIndex];
        const scoreIncrease = theme.words.reduce((total, word) => total + (word.length * parseInt(wheelResult)), 0); // Multiplicador de 
        setScores({ ...scores, [participant]: scores[participant] + scoreIncrease });
        setMessage(`Rodada de ${participant} - Correto! Você ganhou R$ ${scoreIncrease.toFixed(2)}`);
        setTheme(null); // Reseta o tema para passar para a próxima rotação
        setTimeout(nextTheme, 3000); // Troca de tema após 3 segundos
    };

    const nextTheme = () => {
        if (availableThemes.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableThemes.length);
            const selectedTheme = availableThemes[randomIndex];
            setTheme(selectedTheme);
            setAvailableThemes(availableThemes.filter(theme => theme !== selectedTheme));
            setWords([]);
            setMessage("");
            setGuessedLetters([]);
        } else {
            alert("Todos os temas foram jogados. Reinicie o jogo para jogar novamente.");
        }
    };

    const handleGuessWords = () => {
        const participant = participants[currentParticipantIndex];
        const formattedGuess = guess.map(word => word.toUpperCase()).join('');
        const correctAnswer = theme ? theme.words.join('').toUpperCase() : '';

        console.log(formattedGuess);
        console.log(correctAnswer)

        if (formattedGuess === correctAnswer && !isNaN(parseInt(wheelResult))) {
            let totalLettersHidden = 0;
            theme.words.forEach((word, wordIndex) => {
                totalLettersHidden += word.split('').filter((char, index) => words[wordIndex][index] === '_').length;
            });

            const scoreIncrease = totalLettersHidden * parseInt(wheelResult); // Multiplicador
            setScores({ ...scores, [participant]: scores[participant] + scoreIncrease });
            alert(`Rodada de ${participant} - Correto! Você ganhou R$ ${scoreIncrease.toFixed(2)}`);
            setTheme(null); // Reseta o tema para passar para a próxima rotação
            setTimeout(nextTheme, 1000); // Troca de tema após 1 segundo
            setWheelResult(null);
            setGuess(["", "", ""]);
        } else if (countHiddenLetters() <= 3 && formattedGuess !== correctAnswer) {
            alert(`Rodada de ${participant} - Errado! proximo participante.`);
            nextParticipant();
        } else {
            alert(`Rodada de ${participant} - Errado! Você perdeu todos os seus pontos. ${countHiddenLetters()}` );
            setScores({ ...scores, [participant]: 0 });
            nextParticipant();
        }
    };

    const nextParticipant = () => {
        setCurrentParticipantIndex((currentParticipantIndex + 1) % participants.length);
        setWheelResult(null);
        setMessage("");
        setGuess(["", "", ""]);
    };

    const handleRemoveParticipant = (index) => {
        const updatedParticipants = [...participants];
        updatedParticipants.splice(index, 1);
        setParticipants(updatedParticipants);
    };

    const getRandomColor = (index) => {
        return participantColors[index % participantColors.length];
    };

    return (
        <Container>
            {!gameStarted ? (
                <div className='flex flex-col game'>
                    <h1 className='mb-4 text-4xl font-bold text-center'>Roda Roda Jequiti</h1>
                    <div className='flex gap-3 mb-4'>
                        
                        <input
                            type='text'
                            value={newParticipant}
                            onChange={(e) => setNewParticipant(e.target.value)}
                            placeholder='Nome do participante'
                            className='w-full px-4 py-4 border border-gray-300 border-solid rounded-md py- focus:outline-none'
                        />
                        <button onClick={handleAddParticipant} className='px-4 py-1 text-white bg-black rounded-md hover:bg-gray-700 focus:outline-none'>
                            Adicionar
                        </button>
                    </div>
                    {participants.length > 0 && (
                        <div className='mb-4'>
                            {participants.map((participant, index) => (
                                <div key={index} className={`flex justify-between items-center p-3 mb-1 font-bold text-white rounded-md ${getRandomColor(index)}`}>
                                    <div>
                                        {participant.charAt(0).toUpperCase() + participant.slice(1)}
                                    </div>
                                    <div>
                                        R$ {scores[participant].toFixed(2)}
                                    </div>
                                    <div onClick={() => handleRemoveParticipant(index)} className='font-bold text-white focus:outline-none '>
                                        &#10005;
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <button onClick={handleStartGame} disabled={participants.length === 0 || availableThemes.length === 0} className='px-4 py-2 mb-2 text-white bg-black rounded-md hover:bg-gray-700 focus:outline-none'>
                        Iniciar Jogo
                    </button>
                    <button
                        onClick={() => {
                            const resetScores = Object.keys(scores).reduce((acc, participant) => {
                            acc[participant] = 0;
                            return acc;
                            }, {});
                            setScores(resetScores);
                        }}
                        className='px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none'
                        >
                        Resetar Pontuações
                        </button>

                    {participants.length === 0 && (
                        <p className='mt-2 text-red-500'>Adicione participantes para iniciar o jogo</p>
                    )}
                </div>
            ) : (
                <div className='game'>
                    <div className='flex justify-between mb-6'>
                        <div onClick={() => setGameStarted(false)}>
                            Voltar
                        </div>
                        <div onClick={() => nextTheme()} className='font-bold'>
                            Pular tema
                        </div>
                    </div>
                    <h1 className='mb-4 text-4xl font-bold text-center'>Roda Roda Jequiti</h1>
                    {participants.length > 0 && (
                        <div className='flex flex-row flex-wrap gap-4'>
                            <p className='w-full mb-2 font-bold text-center text-[22px]'>Vez de: {participants[currentParticipantIndex]}</p>
                            {participants.map((participant, index) => (
                                <div key={index} className={`w-[30%] flex flex-col items-center justify-center p-3 mb-1 font-bold text-white rounded-md ${getRandomColor(index)}`}>
                                    <div>
                                        {participant.charAt(0).toUpperCase() + participant.slice(1)}
                                    </div>
                                    <div>
                                        {scores[participant].toFixed(0)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {zoom &&
                    <Table words={words} handleClose={() => setZoom(false)} theme={theme.theme} />
                    }

                    {theme && (
                        <>  
                            <p className='w-full mt-4 font-bold text-center '> {theme.theme.toUpperCase()}</p>
                            <div className='p-1 bg-blue-800 text-[30px] ' onClick={() => setZoom(true)}>
                                <div className='p-2 border-solid border-[5px] border-white'>
                                    <div className='p-3 border-solid border-[2px] border-white flex flex-col gap-2'>
                                    {words.map((word, index) => (
                                        <div key={index} className='flex justify-center gap-2'>
                                            {word.split('').map((char, i) => (
                                                <span key={i} className='flex items-center justify-center p-2 '
                                                    style={{
                                                        background: char === ' ' ? 'rgb(30, 64, 175)' : 'white',
                                                        color: char === ' ' ? 'rgb(30, 64, 175)' : 'black',
                                                        
                                                    }}
                                                >
                                                    {char === ' ' ? '-' : char}
                                                </span>
                                            ))}
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                            <p className='mt-4'>{message}</p>
                            {!wheelResult &&
                            <div className='flex justify-center w-full'>
                                <button onClick={handleSpin} disabled={spinning} className='px-4 py-2 mt-4 text-white bg-green-800 rounded-md hover:bg-blue-600 focus:outline-none '>
                                    {spinning ? "Rodando..." : "Girar a Roda"}
                                </button>
                            </div>
                            }
                        </>
                    )}
                    {wheelResult && (
                        <>
                            {countHiddenLetters() > 3 && (
                                <div className='flex flex-wrap justify-center gap-2 mt-4'>
                                    {letters.map((letter, index) => (
                                        <button
                                        key={index}
                                        onClick={() => handleGuess(letter)}
                                        disabled={guessedLetters.includes(letter)}
                                        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                                        style={
                                            {background: guessedLetters.includes(letter) && 'red'}
                                        }
                                    >
                                        {letter}
                                    </button>
                                    ))}
                                </div>
                            )}

                            <div className='flex flex-wrap gap-2 mt-4'>
                                <input
                                    type='text'
                                    value={guess[0]}
                                    onChange={(e) => setGuess([e.target.value.toUpperCase(), guess[1], guess[2]])}
                                    placeholder='Primeiro palpite'
                                    className='px-4 py-2 border border-gray-300 border-solid rounded-md focus:outline-none mobile:w-full'
                                />
                                <input
                                    type='text'
                                    value={guess[1]}
                                    onChange={(e) => setGuess([guess[0], e.target.value.toUpperCase(), guess[2]])}
                                    placeholder='Segundo palpite'
                                    className='px-4 py-2 border border-gray-300 border-solid rounded-md focus:outline-none mobile:w-full'
                                />
                                <input
                                    type='text'
                                    value={guess[2]}
                                    onChange={(e) => setGuess([guess[0], guess[1], e.target.value.toUpperCase()])}
                                    placeholder='Terceiro palpite'
                                    className='px-4 py-2 border border-gray-300 border-solid rounded-md focus:outline-none mobile:w-full'
                                />
                                <button onClick={handleGuessWords} className='w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none'>
                                    Enviar Palpite
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </Container>
    );
}

export default WheelOfFortuneGame;


export const Table = ({words, handleClose, theme}) => {
    return(
    <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full bg-gray-200'>
                            <div onClick={handleClose} className='absolute top-0 mobile:bottom-0 right-0 text-black text-[32px] font-bold p-4'><FiX/></div>
                            
                            <div className='mobile:rotate-90 p-1 bg-blue-800 text-[30px] min-w-[50vh]'>
                                <div className='p-2 border-solid border-[5px] border-white'>
                                    <div className='p-3 border-solid border-[2px] border-white flex flex-col gap-2'>
                                    <p className='w-full mt-4 font-bold text-center text-white '> {theme.toUpperCase()}</p>
                                    {words.map((word, index) => (
                                        <div key={index} className='flex justify-center gap-2'>
                                            {word.split('').map((char, i) => (
                                                <span key={i} className='flex items-center justify-center p-2 '
                                                    style={{
                                                        background: char === ' ' ? 'rgb(30, 64, 175)' : 'white',
                                                        color: char === ' ' ? 'rgb(30, 64, 175)' : 'black',
                                                        
                                                    }}
                                                >
                                                    {char === ' ' ? '-' : char}
                                                </span>
                                            ))}
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                           
    </div>
    )
}
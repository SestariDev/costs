import React, { useState, useEffect } from 'react';
import Container from '../nav/Container';
import NavBar from '../nav/NavBar';
import { Wheel } from 'react-custom-roulette';
import styles from './WheelOfFortuneGame.module.css'; // Arquivo CSS para estilos personalizados

const themes = [
    {
        theme: "Animais",
        words: ["GATO", "CACHORRO", "LEAO"]
    },
    {
        theme: "Frutas",
        words: ["MACA", "LARANJA", "BANANA"]
    },
    // Adicione mais temas conforme necessário
];

const outcomes = [
    { option: "100" }, { option: "200" }, { option: "300" },
    { option: "400" }, { option: "500" }, { option: "600" },
    { option: "700" }, { option: "800" }, { option: "1000" },
    { option: "Perde Tudo" }, { option: "Perde a Vez" }
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
    const [wheelVisible, setWheelVisible] = useState(false);
    const [wheelResult, setWheelResult] = useState(null);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [message, setMessage] = useState("");
    const [guess, setGuess] = useState(["", "", ""]);

    useEffect(() => {
        if (theme) {
            setWords(theme.words.map(word => "_".repeat(word.length)));
        }
    }, [theme]);

    const handleAddParticipant = () => {
        if (newParticipant.trim() !== "") {
            setParticipants([...participants, newParticipant]);
            setScores({ ...scores, [newParticipant]: 0 });
            setNewParticipant("");
        }
    };

    const handleStartGame = () => {
        if (participants.length > 0) {
            setTheme(themes[Math.floor(Math.random() * themes.length)]);
        }
    };

    const handleSpin = () => {
        setWheelVisible(true);
        setSpinning(true);
        const newPrizeNumber = Math.floor(Math.random() * outcomes.length);
        setPrizeNumber(newPrizeNumber);
        setTimeout(() => {
            setSpinning(false);
            setWheelResult(outcomes[newPrizeNumber].option);
            handleOutcome(outcomes[newPrizeNumber].option);
            setWheelVisible(false);
        }, 4000); // 4 segundos para a roleta girar
    };

    const handleOutcome = (result) => {
        const participant = participants[currentParticipantIndex];
        if (result === "Perde Tudo") {
            setScores({ ...scores, [participant]: 0 });
            nextParticipant();
        } else if (result === "Perde a Vez") {
            nextParticipant();
        } else {
            setMessage(`Você ganhou ${result} pontos. Adivinhe uma letra ou resolva as palavras!`);
        }
    };

    const handleGuess = (letter) => {
        const participant = participants[currentParticipantIndex];
        let updatedWords = [...words];
        let scoreIncrease = 0;
        theme.words.forEach((word, wordIndex) => {
            let newWord = "";
            for (let i = 0; i < word.length; i++) {
                if (word[i].toUpperCase() === letter.toUpperCase()) {
                    newWord += letter.toUpperCase();
                    scoreIncrease += parseInt(wheelResult);
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
    };

    const handleCorrectGuess = () => {
        const participant = participants[currentParticipantIndex];
        const scoreIncrease = theme.words.reduce((total, word) => total + (word.length * parseInt(wheelResult)), 0);
        setScores({ ...scores, [participant]: scores[participant] + scoreIncrease });
        setMessage(`Correto! Você ganhou ${scoreIncrease} pontos.`);
        setTheme(null); // Reseta o tema para passar para a próxima rotação
    };

    const handleGuessWords = () => {
        const participant = participants[currentParticipantIndex];
        const remainingLetters = words.join('').split('').filter(letter => letter === '_').length;
        const formattedGuess = guess.map(word => word.toUpperCase()).join('');
        const correctAnswer = theme.words.join('');
        
        if (formattedGuess === correctAnswer) {
            const scoreIncrease = remainingLetters * parseInt(wheelResult);
            setScores({ ...scores, [participant]: scores[participant] + scoreIncrease });
            setMessage(`Correto! Você ganhou ${scoreIncrease} pontos.`);
            setTheme(null); // Reseta o tema para passar para a próxima rotação
        } else if (remainingLetters > 3) {
            setScores({ ...scores, [participant]: 0 });
            setMessage(`Errado! Você perdeu todos os seus pontos.`);
            nextParticipant();
        } else {
            setMessage(`Errado! Você não perde pontos, pois há menos de 3 letras restantes.`);
            nextParticipant();
        }
    };

    const nextParticipant = () => {
        setCurrentParticipantIndex((currentParticipantIndex + 1) % participants.length);
        setWheelResult(null);
        setMessage("");
        setGuess(["", "", ""]);
    };

    return (
        <Container>
            <NavBar />
            <div className='game'>
                <h1 className='text-4xl font-bold text-center mb-4'>Roda Roda Jequiti</h1>
                {participants.length > 0 && (
                    <div>
                        <p className='mb-2'>Próximo Participante: {participants[currentParticipantIndex]}</p>
                        {participants.map((participant, index) => (
                            <div key={index} className='mb-1'>{participant}: {scores[participant]} pontos</div>
                        ))}
                    </div>
                )}
                {theme ? (
                    <>
                        <p className='mt-4'>Tema Atual: {theme.theme}</p>
                        <div className='mt-4'>
                            {words.map((word, index) => (
                                <div key={index} className='flex gap-2 justify-center'>
                                    {word.split('').map((char, i) => (
                                        <span key={i} className='border border-solid flex justify-center items-center p-2 border-black'>{char === ' ' ? '\u00A0' : char}</span>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <p className='mt-4'>{message}</p>
                        {wheelResult ? (
                            <>
                                <p className='mt-4'>Resultado da Roda: {wheelResult}</p>
                                {wheelResult !== "Perde Tudo" && wheelResult !== "Perde a Vez" && (
                                    <>
                                        <div className='mt-4 flex gap-2'>
                                            {outcomes.map((outcome, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleGuess(outcome.option)}
                                                    disabled={guessedLetters.includes(outcome.option) || !outcome.option.match(/^\d+$/)}
                                                    className={`px-4 py-2 ${!outcome.option.match(/^\d+$/) ? 'bg-red-500' : 'bg-blue-500'} text-white rounded-md hover:bg-blue-600 focus:outline-none`}
                                                >
                                                    {outcome.option}
                                                </button>
                                            ))}
                                        </div>
                                        <div className='mt-4 flex gap-2'>
                                            <input
                                                type='text'
                                                value={guess[0]}
                                                onChange={(e) => setGuess([e.target.value.toUpperCase(), guess[1], guess[2]])}
                                                placeholder='Primeiro palpite'
                                                className='px-4 py-2 border border-solid border-gray-300 rounded-md focus:outline-none'
                                            />
                                            <input
                                                type='text'
                                                value={guess[1]}
                                                onChange={(e) => setGuess([guess[0], e.target.value.toUpperCase(), guess[2]])}
                                                placeholder='Segundo palpite'
                                                className='px-4 py-2 border border-solid border-gray-300 rounded-md focus:outline-none'
                                            />
                                            <input
                                                type='text'
                                                value={guess[2]}
                                                onChange={(e) => setGuess([guess[0], guess[1], e.target.value.toUpperCase()])}
                                                placeholder='Terceiro palpite'
                                                className='px-4 py-2 border border-solid border-gray-300 rounded-md focus:outline-none'
                                            />
                                            <button onClick={handleGuessWords} className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none'>
                                                Enviar Palpite
                                            </button>
                                        </div>
                                    </>
                                )}
                            </>
                        ) : (
                            <button onClick={handleSpin} disabled={spinning} className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none'>
                                {spinning ? "Rodando..." : "Girar a Roda"}
                            </button>
                        )}
                    </>
                ) : (
                    <>
                        <input
                            type='text'
                            value={newParticipant}
                            onChange={(e) => setNewParticipant(e.target.value)}
                            placeholder='Digite o nome do participante'
                            className='px-4 py-2 border border-solid border-gray-300 rounded-md focus:outline-none'
                        />
                        <button onClick={handleAddParticipant} className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none'>
                            Adicionar Participante
                        </button>
                        <button onClick={handleStartGame} disabled={participants.length === 0} className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none'>
                            Iniciar Jogo
                        </button>
                        <button onClick={() => setScores({})} className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none'>
                            Resetar Pontuações
                        </button>
                    </>
                )}
                {wheelVisible && (
                    <div className={styles['wheel-overlay']}>
                        <Wheel
                            mustStartSpinning={spinning}
                            prizeNumber={prizeNumber}
                            data={outcomes}
                            backgroundColors={['#3e3e3e', '#df3428']}
                            textColors={['#ffffff']}
                            onStopSpinning={() => setSpinning(false)}
                        />
                    </div>
                )}
            </div>
        </Container>
    );
}

export default WheelOfFortuneGame;

import React, { useState } from 'react';
import { dieta } from './Dieta';
import './styles.css'; 
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { dietaNay } from './DietaNay';

function MealSelector() {
  const [selectedMealIndex, setSelectedMealIndex] = useState(0);
  const [selectedItems, setSelectedItems] = useState({});
  const [totalCalories, setTotalCalories] = useState(0);
  const [meals, setMeals] = useState([]);
  const [userSelected, setUserSelected] = useState(null); // Controla o usuário selecionado

  // Array de cores para as categorias
  const categoryColors = {
    'Salada': 'bg-green-600',       // Verde escuro para saladas
    'Legumes': 'bg-orange-600',     // Laranja para legumes
    'Proteína': 'bg-blue-700',      // Azul escuro para proteínas
    'Carboidrato': 'bg-yellow-700', // Amarelo escuro para carboidratos
    'Fruta': 'bg-red-500',          // Vermelho para frutas
    'Opções': 'bg-purple-500',      // Roxo para opções
    'Queijos': 'bg-yellow-600',     // Amarelo escuro para queijos
    'Grão': 'bg-[#4E3A1C]'
  };

  const handleSelect = (mealName, categoryName, option) => {
    const newSelections = {
      ...selectedItems,
      [mealName]: {
        ...selectedItems[mealName],
        [categoryName]: option
      }
    };
    setSelectedItems(newSelections);

    // Calcular total de calorias
    const newTotalCalories = Object.values(newSelections).reduce((total, meal) => {
      return total + Object.values(meal).reduce((mealTotal, option) => {
        return mealTotal + option.calorias;
      }, 0);
    }, 0);

    setTotalCalories(newTotalCalories);
  };

  const handlePrevMeal = () => {
    setSelectedMealIndex((prevIndex) =>
      prevIndex === 0 ? meals.length - 1 : prevIndex - 1
    );
  };

  const handleNextMeal = () => {
    setSelectedMealIndex((prevIndex) =>
      prevIndex === meals.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleUserSelection = (user) => {
    if (user === 'Gui') {
      setMeals(dieta.refeicoes); // Se "Gui" for selecionado
    } else {
      setMeals(dietaNay.refeicoes); // Se "Nay" for selecionado
    }
    setUserSelected(user); // Define o usuário selecionado
    setSelectedMealIndex(0); // Reinicia o índice da refeição
    setSelectedItems({}); // Limpa os itens selecionados
    setTotalCalories(0); // Reinicia as calorias
  };


  const selectedMeal = meals[selectedMealIndex] || {};

  // Se nenhum usuário estiver selecionado, exibe os botões de seleção
  if (!userSelected) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-100 ">
        <div className="flex gap-4">
          <button 
            className="p-4 text-2xl text-white bg-blue-500 rounded-lg"
            onClick={() => handleUserSelection('Gui')}
          >
            Gui
          </button>
          <button 
            className="p-4 text-2xl text-white bg-green-500 rounded-lg"
            onClick={() => handleUserSelection('Nay')}
          >
            Nay
          </button>
        </div>
      </div>
    );
  }

 
  return (
    <div className="h-screen meal-selector-container">
      <div className='flex items-center justify-between pb-4 '>
        <FiArrowLeft size={25} className='cursor-pointer' onClick={() => {
          setUserSelected(null);
        }}/>
        <p className="flex items-center title">Dietinx</p>
        <p className='font-bold text-transparent'>{totalCalories} kcal</p>
      </div>
      <p className='fixed px-4 font-bold bg-white top-4 right-4'>{totalCalories} kcal</p>
      {meals.length > 0 && (
        <div className="meal-selection">
          <div className="meal-details">
            <div className='flex items-center justify-between'>
              <button className="arrow-button" onClick={handlePrevMeal}>
                &lt;
              </button>
              <h2 className="meal-name">{selectedMeal.nome} - {selectedMeal.horario}</h2>
              <button className="arrow-button" onClick={handleNextMeal}>
                &gt;
              </button>
            </div>
            {selectedMeal.categorias && selectedMeal.categorias.map((category, index) => (
              <div key={category.nome} className="shadow-lg category-section">
                <h3 className={`font-bold text-white rounded-lg category-title ${categoryColors[category.nome] || 'bg-gray-500'}`}>
                  {category.nome}
                </h3>
                {category.opcoes.map((option) => {
                  const isSelected = selectedItems[selectedMeal.nome]?.[category.nome]?.nome === option.nome;
                  return (
                    <button
                      key={option.nome}
                      className={`flex flex-col option-button ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSelect(selectedMeal.nome, category.nome, option)}
                    >
                      <p className='font-bold'>{option.nome}</p>
                      <p className='text-xs'>{option.porcao} ({option.peso} g) ({option.calorias} kcal)</p>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MealSelector;

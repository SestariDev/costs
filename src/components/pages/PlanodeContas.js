import React, { useState, useEffect } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
// import { contas } from '../../contas';

// const calculateSum = (subcontas, editedValues) => {
//   if (!subcontas || subcontas.length === 0) {
//     return 0;
//   }

//   return subcontas.reduce((sum, sub) => {
//     const subSum = sub.subcontas ? calculateSum(sub.subcontas, editedValues) : (editedValues[sub.codigo] !== undefined ? editedValues[sub.codigo] : sub.valor);
//     return sum + subSum;
//   }, 0);
// };

// const updateValues = (contas, editedValues) => {
//   contas.forEach(conta => {
//     if (conta.subcontas) {
//       conta.valor = calculateSum(conta.subcontas, editedValues);
//       updateValues(conta.subcontas, editedValues);
//     }
//   });
// };

// const RecursiveSubconta = ({ subcontas, editedValues, setEditedValues }) => {
//   const [visibleSubcontas, setVisibleSubcontas] = useState({});
//   const [inputValues, setInputValues] = useState({});

//   const toggleVisibility = (codigo) => {
//     setVisibleSubcontas((prevState) => ({
//       ...prevState,
//       [codigo]: !prevState[codigo],
//     }));
//   };

//   const handleValueChange = (codigo, value) => {
//     setInputValues((prevValues) => ({
//       ...prevValues,
//       [codigo]: value,
//     }));
//   };

//   const handleBlur = (codigo) => {
//     setEditedValues((prevValues) => ({
//       ...prevValues,
//       [codigo]: parseFloat(inputValues[codigo]) || 0,
//     }));
//   };

//   if (!subcontas) return null;

//   return (
//     <div>
//       {subcontas.map((sub) => (
//         <div key={sub.codigo} className='flex flex-col'>
//           <div className='flex items-center justify-between text-xl'>
//             <div className='flex items-center gap-3'>
//               <span className={` ${sub.categoria !== 'A' ? 'font-bold' : ''}`}>{sub.categoria}</span>
//               {sub.categoria !== 'A' ? (
//                 <button
//                   className={`rounded-md flex justify-center p-1 items-center text-center ${!visibleSubcontas[sub.codigo] ? 'bg-green-400' : 'bg-red-500'}`}
//                   onClick={() => toggleVisibility(sub.codigo)}
//                 >
//                   {visibleSubcontas[sub.codigo] ? <FiMinus size={12} /> : <FiPlus size={12} />}
//                 </button>
//               ) : (
//                 <button
//                   className={`rounded-md flex justify-center p-1 items-center text-center bg-transparent`}
//                   disabled
//                 >
//                   {visibleSubcontas[sub.codigo] ? <FiMinus size={12} color='transparent' /> : <FiPlus size={12} color='transparent' />}
//                 </button>
//               )}
//               <span className='ml-[45px]'> {sub.codigo}</span>
//             </div>
//             <span className={`w-[40%] text-start ml-[45px] ${sub.categoria !== 'A' ? 'font-bold' : ''}`}>{sub.nome}</span>
//             <span className={`w-[15%] flex items-center text-start ${sub.categoria !== 'A' ? 'font-bold' : ''}`}>
//               R$ {sub.categoria === 'A' ? (
//                 <input
//                   type='number'
//                   value={inputValues[sub.codigo] !== undefined ? inputValues[sub.codigo] : (editedValues[sub.codigo] !== undefined ? editedValues[sub.codigo] : sub.valor)}
//                   onChange={(e) => handleValueChange(sub.codigo, e.target.value)}
//                   onBlur={() => handleBlur(sub.codigo)}
//                   className='ml-[5px] focus:blur-none w-[80px] border-b-[1px] border-gray-500 rounded-none border-solid bg-transparent h-[18px]'
//                 />
//               ) : sub.valor}
//             </span>
//           </div>
//           {visibleSubcontas[sub.codigo] && sub.subcontas && (
//             <RecursiveSubconta subcontas={sub.subcontas} editedValues={editedValues} setEditedValues={setEditedValues} />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

const PlanoDeContas = () => {
  // const [data, setData] = useState([]);
  // const [editedValues, setEditedValues] = useState({});

  // useEffect(() => {
  //   setData(contas);
  //   updateValues(contas, editedValues);
  // }, [editedValues]);

  // return (
  //   <div>
  //     {data.map((c, index) => (
  //       c.codigo.split('.').length === 1 && (
  //         <div key={c.id} className='flex flex-col'>
  //           <div className='flex items-center justify-between text-xl'>
  //             <div className='flex items-center gap-3'>
  //               <span className='font-bold'>S</span>
  //               <button
  //                 className={`flex items-center justify-center p-1 text-center  ${!c.visible ? 'bg-green-400' : 'bg-red-500'} rounded-md`}
  //                 onClick={() => setData((prevData) => prevData.map(conta => conta.codigo === c.codigo ? { ...conta, visible: !conta.visible } : conta))}
  //               >
  //                 {c.visible ? <FiMinus size={12} /> : <FiPlus size={12} />}
  //               </button>
  //               <span className='font-bold ml-[40px]'> {c.codigo}</span>
  //             </div>
  //             <div className='w-[40%] text-start'>
  //               <span className='font-bold'>{c.nome}</span>
  //             </div>
  //             <div className='w-[15%] text-start'>
  //               <span className='font-bold'>
  //                 R$ {c.valor}
  //               </span>
  //             </div>
  //           </div>
  //           {c.visible && <RecursiveSubconta subcontas={c.subcontas} editedValues={editedValues} setEditedValues={setEditedValues} />}
  //         </div>
  //       )
  //     ))}
  //   </div>
  // );
};

export default PlanoDeContas;

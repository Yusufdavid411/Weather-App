// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const CityAutocomplete = ({onSave, handleClick, name}) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     const fetchCities = async () => {
//       try {
//         if (searchTerm.trim() !== '') {
//           const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=b9545d3f58ab2ab0a1257627674ef24d`);
//           const data = await response.json();

//           // Extract city names from the API response
//           const cityNames = data.map(city => city.name);
//           setSuggestions(cityNames);
//         } else {
//           setSuggestions([]);
//         }
//       } catch (error) {
//         console.error('Error fetching cities:', error);
//       }
//     };

//     fetchCities();
//   }, [searchTerm]);

//   const handleSelect = (value) => {
//     // Handle the selected city (you can set it in your state or perform any other action)
//     console.log('Selected city:', value);

//     // Clear the suggestions and input
//     setSuggestions([]);
//     setSearchTerm('');
//   };

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//    <>
//       <div className='search'>
//         <input
//           type="text"
//           value={searchTerm}
//           onClick={onSave}
//           onChange={handleChange}
//           placeholder="Type a city"
//         />

//         <button onClick={handleClick}>
//           <FontAwesomeIcon icon="search" size="4x" className="icon"  />
//         </button>
//       </div>

//       <div >
//         <div>
//           {suggestions.map((city, index) => (
//             <p key={index} onClick={() => handleSelect(city)} >
//               {city}
//             </p>
//           ))}
//         </div>
//       </div>

//     </>
//   );
// };

// export default CityAutocomplete;

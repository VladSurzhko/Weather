

// import React, { useState } from 'react';
// import scss from './searchBar.module.css';
// import { useTranslation } from 'react-i18next';

// const SearchBar = ({ onSearch }) => {
//   const { t } = useTranslation();
//   const [query, setQuery] = useState('');

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleSearch = () => {
//     if (query.trim() !== '') {
//       onSearch(query);
//     }
//   };

//   return (
//     <div className={scss.box}>
//       <input
//         className={scss.input}
//         type="text"
//         placeholder={t('searchBarPlaceholder')}
//         value={query}
//         onChange={handleInputChange}
//       />
//       <button className={scss.btn} onClick={handleSearch}>
//         {t('searchBarButton')}
//       </button>
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState, useEffect } from 'react';
import scss from './searchBar.module.css';
import { useTranslation } from 'react-i18next';

const SearchBar = ({ onSearch }) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${query}&type=like&sort=population&cnt=5&appid=820290b87322a7c3595da95c899c3746`);
        const data = await response.json();

        if (data.list) {
          const citySuggestions = data.list.map((city) => city.name);
          setSuggestions(citySuggestions);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error('Error fetching city suggestions', error);
      }
    };

    if (query.trim() !== '') {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
      setSuggestions([]); 
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]); 
  };

  return (
    <div className={scss.box}>
      <input
        className={scss.input}
        type="text"
        placeholder={t('searchBarPlaceholder')}
        value={query}
        onChange={handleInputChange}
      />
      <button className={scss.btn} onClick={handleSearch}>
        {t('searchBarButton')}
      </button>
      {suggestions.length > 0 && (
        <ul className={scss.suggestionList}>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
    
  );
};

export default SearchBar;
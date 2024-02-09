// import React, { useEffect, useState } from 'react';
// import SearchBar from '../searchBar/searchbar';

// const GeolocationSearch = ({ onGeolocationSearch }) => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           onGeolocationSearch(latitude, longitude);
//           setLoading(false);
//         },
//         (error) => {
//           setError('Geolocation error. Please use the search bar.');
//           setLoading(false);
//         }
//       );
//     } else {
//       setError('Geolocation is not supported by your browser. Please use the search bar.');
//       setLoading(false);
//     }
//   }, [onGeolocationSearch]);

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {!loading && !error}
//       <SearchBar onSearch={(city) => onGeolocationSearch(null, null, city)} />
//     </div>
//   );
// };

// export default GeolocationSearch;
import React from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

const App = () => (
  <div>
    <SearchBar />
    <WeatherList />
  </div>
);

export default App;

// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <SearchBar />
//       </div>
//     );
//   }
// }

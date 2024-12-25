// import React, { useState, useEffect } from "react";
// import NamesList from "./NamesList";
// import Table from "./Table";

// const scrollBarStyles = {
//   /* To hide the scrollbar for Chrome, Safari and Opera */
//   '&::-webkit-scrollbar': {
//     display: 'none'
//   },
//   /* To hide the scrollbar for IE, Edge and Firefox */
//   '-ms-overflow-style': 'none',
//   'scrollbar-width': 'none'
// };

// const App = () => {
//   const [names, setNames] = useState([]);

//   useEffect(() => {
//     const randomNames = Array.from(
//       { length: 100 },
//       () => Math.random().toString(36).substring(2, 15)
//     );
//     setNames(randomNames);
//   }, []);

//   return (
//     <div style={{ display: "flex" }}>
//       <div style={{ width: "50%", height: "100vh", overflow: "auto", ...scrollBarStyles }}>
//         {Array.from({ length: 25 }).map((_, index) => (
//           <Table key={index} />
//         ))}
//       </div>
//       <NamesList names={names} />
//     </div>
//   );
// };

// export default App;

//src/App.js

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import FlowerProduct from './components/FlowerProduct'

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/flower-product" component={FlowerProduct}/>
        </Switch>
      </Router>
  );
}

export default App;
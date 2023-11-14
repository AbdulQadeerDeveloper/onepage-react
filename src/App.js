
import React from 'react';
import Navbar from './Navbar/Navbar';

import Footer from './Footer/Footer';
import { fetchData } from './Components/MianHome/actions' // Import fetchData function
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Components/MianHome/reducers';
import HomeContainer from "./Components/MianHome/HomeContainer";
import data from './Components/MianHome/data.json';
import About from './Components/MianAbout/About';
import Portfolio from './Components/MianPortfolio/Portfolio';
import Skill from './Components/MianSkills/Skill';
import Contact from './Components/MianContact/Contact';

const store = createStore(reducer);

store.dispatch(fetchData(data)); // Dispatch the action with fetchData function

function App() {
  return (
    
    <div className="App">
      <Provider store={store}>
        <HomeContainer />
        <Navbar />
        <About/>
        <Portfolio/>
        <Skill/>
        <Contact/>
        <Footer />
      </Provider>
      
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  document.title = 'Octavio Politron';
  const [choices] = useState(['About', 'Portfolio', 'Contact', 'Resume']);
  const [currentChoice, setCurrentChoice] = useState(choices[0]);

  return (
    <div>
      <Header
        setCurrentChoice={setCurrentChoice}
      ></Header>
      <main>
        {
          (currentChoice === 'About') ? (
            <>
              <About></About>
            </>
          ) : (
            (currentChoice === 'Portfolio') ? (
              <>
                <Portfolio></Portfolio>
              </>
            ) : (
              (currentChoice === 'Contact') ? (
                <>
                  <Contact></Contact>
                </>
              ) : (
                (currentChoice === 'Resume') ? (
                  <>
                    <Resume></Resume>
                  </>
                ) : (
                  <></>
                )
              )
            )
          )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

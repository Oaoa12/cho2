import React, { useState } from "react";
import { Provider } from "react-redux";
import { HomePage } from "./pages/home-page/home-page";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { store } from "./redux";
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('about');

  const renderContent = () => {
    if (currentView === 'about') {
      return (
        <div id="about-image" className="background-image">
          <div id="about-text" className="about-text">
            <h1>О нас</h1>
            <p>
              Добро пожаловать в Raxat — ваш надежный партнер в мире спортивных товаров! Мы — команда энтузиастов, объединенных общей страстью к спорту и активному образу жизни. Наша миссия — предоставить вам высококачественные товары, которые помогут достичь ваших спортивных целей и сделать каждую тренировку максимально комфортной и эффективной.
            </p>
          </div>
        </div>
      );
    } else if (currentView === 'products') {
      return <HomePage />;
    }
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Header onNavigate={setCurrentView} />
        <main className="content">
          {renderContent()}
        </main>
        <Footer onNavigate={setCurrentView} /> 
      </div>
    </Provider>
  );
}

export default App;
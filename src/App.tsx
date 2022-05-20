import React, {FC} from 'react';
import style from "./App.module.css"
import Header from "./Components/Header/Header";
import LandingPage from "./Components/LandingPage/LandingPage";


const App:FC = () => {
  return (
      <div className={style.App}>
          <Header/>
          <LandingPage/>
      </div>
  )
}

export default App;

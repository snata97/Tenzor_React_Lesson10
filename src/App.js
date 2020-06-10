import React from 'react';
import './App.css';
import './css/style.css';
import {Header} from './Components/Header';
import {Dataset} from './Components/Dataset';

let apiURL = "http://localhost:5000/";

function App() {
  return (
    <div>
      <Header title = "Tensor School" description="Это страница школы Тензор в Уфе. Тут вы можете познакомиться с нашими учениками и учителями."/>
      <div className = "persons">
              <div className = "persons__items">
                  <p className = "titleSection">Ученики</p>
                  <Dataset host={apiURL} object="student" method="readAll"/>
                  <p className = "titleSection">Преподаватели</p>
                  <Dataset host={apiURL} object="teacher" method="readAll"/>
              </div>
      </div>
    </div>
  );
}

export default App;

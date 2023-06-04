import React, {Component} from "react"
import './App.css';

//Componenets 
import Nav from "./coponents/navbar/nav"
import CardsProdu from "./coponents/card/card"

class App extends Component  {
  render (){
  return (
    <div className="App">
      
        <Nav/>
        <div className="productos">
        <CardsProdu 
        name="Sueter gris" 
        precio="$200"
        img="https://www.pngplay.com/wp-content/uploads/2/Sweater-Transparent-File.png"/>
      </div>
    </div>

  );
} 
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/header'
import Footer from './component/footer/footer'
import Body from './component/body/body'
import Tile from './component/body/tile'
import {useState} from 'react'

function App() {
  /**
   * variables
   */
  //list of tiles to select
    let play = {
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
      '7': '',
      '8': '',
      '9': '',
  }
  //list of tiles where we paste the previews selected tile
    let insert = {
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
      '7': '',
      '8': '',
      '9': '',
  }
  //number of move of tiles
  let [move, setMove] = useState(9)
  /**
   * functions
   */
  //function to reset the application state
  const handleReset = ()=>{
    setMove(move = 9)
  }

  return (
    <div className="App">
      <Header reset={handleReset}/>
      <Body play={play} insert={insert} move={move}/>
      <Footer/>
    </div>
  );
}

export default App;

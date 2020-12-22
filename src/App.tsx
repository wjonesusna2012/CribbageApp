import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayResults, { EntryType } from './displayResults';

const testData: Array<EntryType> = [
  {
    cards: [{rank: 5, suite: 'H'}, {rank: 11, suite: 'S'}],
    points: 15,
  },
  {
    cards: [{rank: 2, suite: 'D'}, {rank: 11, suite: 'S'}],
    points: 14,
  }
];
const App: React.FC = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  }
  return (
    <div className="App">
      <body>
        <form onSubmit={handleSubmit} className="InputForm">
          <div className="CardSelector">
            <label htmlFor="card1rank">Rank 1:</label>
            <select name="card1rank" id="c1r">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">J</option>
              <option value="12">Q</option>
              <option value="13">K</option>
            </select>
            <label htmlFor="card1suite">Suite 1:</label>
            <select name="card1suite" id="c1s">
              <option value="H">Hearts</option>
              <option value="S">Spades</option>
              <option value="C">Clubs</option>
              <option value="D">Diamonds</option>
            </select>
          </div>
          <div className="CardSelector">
            <label htmlFor="card2rank">Rank 2:</label>
            <select name="card2rank" id="c2r">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">J</option>
              <option value="12">Q</option>
              <option value="13">K</option>
            </select>
            <label htmlFor="card2suite">Suite 2:</label>
            <select name="card2suite" id="c2s">
              <option value="H">Hearts</option>
              <option value="S">Spades</option>
              <option value="C">Clubs</option>
              <option value="D">Diamonds</option>
            </select>
          </div>
          <div className="CardSelector">
            <label htmlFor="card3rank">Rank 3:</label>
            <select name="card3rank" id="c3r">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">J</option>
              <option value="12">Q</option>
              <option value="13">K</option>
            </select>
            <label htmlFor="card3suite">Suite 3:</label>
            <select name="card3suite" id="c3s">
              <option value="H">Hearts</option>
              <option value="S">Spades</option>
              <option value="C">Clubs</option>
              <option value="D">Diamonds</option>
            </select>
          </div>
          <div className="CardSelector">
            <label htmlFor="card4rank">Rank 4:</label>
            <select name="card4rank" id="c4r">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">J</option>
              <option value="12">Q</option>
              <option value="13">K</option>
            </select>
            <label htmlFor="card4suite">Suite 4:</label>
            <select name="card4suite" id="c4s">
              <option value="H">Hearts</option>
              <option value="S">Spades</option>
              <option value="C">Clubs</option>
              <option value="D">Diamonds</option>
            </select>
          </div>
          <div className="CardSelector">
            <label htmlFor="card5rank">Rank 5:</label>
            <select name="card5rank" id="c5r">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">J</option>
              <option value="12">Q</option>
              <option value="13">K</option>
            </select>
            <label htmlFor="card5suite">Suite 5:</label>
            <select name="card5suite" id="c5s">
              <option value="H">Hearts</option>
              <option value="S">Spades</option>
              <option value="C">Clubs</option>
              <option value="D">Diamonds</option>
            </select>
          </div>
          <div className="CardSelector">
            <label htmlFor="card6rank">Rank 6:</label>
            <select name="card6rank" id="c6r">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">J</option>
              <option value="12">Q</option>
              <option value="13">K</option>
            </select>
            <label htmlFor="card6suite">Suite 6:</label>
            <select name="card6suite" id="c6s">
              <option value="H">Hearts</option>
              <option value="S">Spades</option>
              <option value="C">Clubs</option>
              <option value="D">Diamonds</option>
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
        <DisplayResults entries={testData}/>
      </body>
    </div>
  );
}

export default App;

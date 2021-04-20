import './App.css';
import Counter from './components/Counter';
import Quote from './components/Quote';
import Switch from './components/Switch';
import Weather from './components/Weather';
import QuoteList from './components/QuoteList';

function App() {
  const weatherData = [
    { time: "Today", highF: 60, lowF: 50, conditions: "Mostly Cloudy" },
    { time: "Tomorrow", highF: 65, lowF: 53, conditions: "Partly Sunny" },
    { time: "Tuesday", highF: 66, lowF: 51, conditions: "Partly Sunny" }
  ]
  return (
    <div className="App">
      <h1>This is React</h1>
     

      {/* {
        weatherData.map(data => (
          <Weather key={data.time} time={data.time} conditions={data.conditions} tempF={data.highF}/>
        ))
      } */}
      {/* <Weather time="Today"  conditions="Overcast" tempF={45}/> */}
      <Counter />
      <Counter />
      <Counter />
      <Switch />
      <QuoteList />
      <QuoteList />
      <QuoteList />
      <Quote />
      {/* <Quote text="Why fit in when you were born to stand out?" author="Dr. Seuss" date="Today"/> */}
     </div>
  );
}

export default App;

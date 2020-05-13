import React, { useState } from "react";
import ReactDOM from "react-dom";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.all === 0) {
    return <p>No results to show</p>;
  }
  return (
    <div>
      <br />
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positives" value={props.positives + "%"} />
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  const all = good + neutral + bad;
  const average = (good - bad) / (good + neutral + bad);
  const positives = (good / (bad + good + neutral)) * 100;

  return (
    <div>
      <h1>Unicafe feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <br />
      <h1>Results</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positives={positives}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

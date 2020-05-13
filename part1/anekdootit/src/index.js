import React, { useState } from "react";
import ReactDOM from "react-dom";

const MostVotes = ({ votes, anecdotes }) => {
  const maxVotes = Math.max(...votes);
  const mostVotes = votes.indexOf(maxVotes);

  return (
    <p>
      <strong>Most votes: </strong> <br />
      {anecdotes[mostVotes]} <br />
      {votes[mostVotes]} votes
    </p>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const randomAnecdote = () => () => {
    const max = anecdotes.length;
    setSelected(Math.floor(Math.random() * Math.floor(max)));
  };

  const addVote = (selected) => () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <br />
      <Button text="Next" onClick={randomAnecdote()}></Button>
      <Button text="Vote" onClick={addVote(selected)}></Button>
      <MostVotes anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));

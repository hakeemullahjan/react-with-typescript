import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const App = () => {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "hakeemullah",
      age: 24,
      url: "https://create-react-app.dev/img/logo.svg",
      note: "this is note",
    },
  ]);

  return (
    <div className="App">
      <h1>Let's build somethin' cool!</h1>
      <List people={people} />

      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;

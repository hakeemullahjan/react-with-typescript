import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    });
    
  };

  console.log(input);

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image URL"
        className="AddToList-input"
        onChange={handleChange}
        name="img"
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        name="note"
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;

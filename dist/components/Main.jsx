import React, { useState } from "react";
import Upload from "./Upload";
import Counter from "./Counter";
import Buttons from "./Buttons";

export default function Main() {
  const [counters, setCounters] = useState([1]);

  const handleAddNextStep = () => {
    setCounters((prevCounters) => [...prevCounters, prevCounters.length + 1]);
  };

  return (
    <>
      {counters.map((counter) => (
        <div key={counter} className="item-container flex">
          <Counter counter={counter} />
          <Upload />
        </div>
      ))}
      <Buttons handleAddNextStep={handleAddNextStep} />
    </>
  );
}

// Dependencies
import React, { useState } from "react";
import { atom, useAtom } from "jotai";
import { Card } from "./components/Card";
// Styles
import "./tailwind.output.css";

const counter = atom(0);
const peopleListAtom = atom([
  { name: "John Smith", title: "Consultant" },
  { name: "John Hernandez", title: "Developer" },
  { name: "Emily Hernandez", title: "Specialist" },
  { name: "Morgan Miller", title: "Specialist" },
  { name: "Jordan Hernandez", title: "Analyst" },
  { name: "Alex Martinez", title: "Manager" },
  { name: "Jane Johnson", title: "Administrator" },
  { name: "Jane Miller", title: "Specialist" },
  { name: "Chris Garcia", title: "Manager" },
  { name: "John Davis", title: "Engineer" },
  { name: "Morgan Jones", title: "Director" },
  { name: "Morgan Jones", title: "Consultant" },
  { name: "Morgan Hernandez", title: "Engineer" },
  { name: "Chris Jones", title: "Engineer" },
  { name: "Jordan Johnson", title: "Analyst" },
  { name: "Robin Brown", title: "Designer" },
  { name: "Robin Smith", title: "Analyst" },
  { name: "Morgan Johnson", title: "Engineer" },
  { name: "Emily Garcia", title: "Developer" },
  { name: "Robin Williams", title: "Coordinator" },
]);

// const removePersonByName = (filterName) => (get) =>
//   get(peopleList).filter(({ name }) => filterName !== name);
// .filter(({ name }) => name !== )
const App = () => {
  const [test, setTest] = useAtom(counter);
  const [peopleList, setPeopleList] = useAtom(peopleListAtom);
  const [name, setName] = useState("");
  const handleChange = (e) => setName(e.target.value);
  // removePersonByName(name);
  // console.log(peopleList);
  return (
    <div className="min-h-screen bg-gray-500">
      <h2 className="text-center text-4xl font-bold text-blue-900">
        TailwindCSS + React
      </h2>
      <input onChange={handleChange} />
      <div className="flex items-center gap-2">
        <button
          onClick={() => setTest((prev) => prev + 1)}
          className="bg-red-500 p-2 rounded"
        >
          Inc
        </button>
        <p>{test}</p>
        <button
          onClick={() => setTest((prev) => prev - 1)}
          className="bg-red-500 p-2 rounded"
        >
          Dec
        </button>
        {peopleList.map(({ title, name }) => (
          <Card title={title} name={name} />
        ))}
      </div>
    </div>
  );
};

export default App;

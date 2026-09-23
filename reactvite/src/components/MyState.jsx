import { useState } from 'react';

function Student() {
  const [name, setName] = useState("Dummy Name");
  const [college, setCollege] = useState("Dummy College");

  function updateName() {
    setName("Rajat Sharma");
  };
  function updateCollege() {
    setCollege("Delhi University");
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>College: {college}</h2>

      <button onClick={updateName}>
        Change Name
      </button>

      <button onClick={updateCollege}>
        Change College
      </button>
    </div>
  );
}



export default Student;
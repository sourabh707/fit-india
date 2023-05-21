import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import './index.css';

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}


function ExerciseCard({ exercise }) {
  const truncatedInstructions = truncateText(exercise.instructions, 120)
  return (
    <div key={exercise.name} className="card mb-3">
      <div className="card-body">
        <h3 className="card-title">{exercise.name}</h3>
        <p className="card-text">Type: {exercise.type}</p>
        <p className="card-text">Muscle: {exercise.muscle}</p>
        <p className="card-text">Equipment: {exercise.equipment}</p>
        <p className="card-text">Difficulty: {exercise.difficulty}</p>
        <p className="card-text">Instructions: {truncatedInstructions}</p>
      </div>
    </div>
  );
}

function Exercise() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      const url = `https://api.api-ninjas.com/v1/exercises?muscle=${inputValue}`;
      const headers = {
        'X-Api-Key': 'crhvbQXiAxGOczByUzQlGJwfXR5wjMufBdMvjCq7'
      };

      const response = await axios.get(url, { headers });
      setData(response.data);
      console.log(response.data, 'success');
    } catch (error) {
      console.log(error, 'error');
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return `Error: ${error.message}`;

  return (
    <div className="Exercise-Container content">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1 text-start" className="form-label mb-3">
          <h1>Body part Name</h1>
        </label>
        <input type="text" className="form-control" placeholder="Enter body part name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress} />
      </div>
      <div className="exercise-card-container">
          {data.map((exercise) => (
            <ExerciseCard key={exercise.name} exercise={exercise} />
          ))}
      </div>
    </div>
  );
}

export default Exercise;

import React from 'react';
import axios from 'axios';

import './index.css';

function NutritionCard({ nutrition }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h3 className="card-title">{nutrition.name.toUpperCase()}</h3>
        <p className="card-text">Calories: {nutrition.calories}</p>
        <p className="card-text">Carbohydrates: {nutrition.carbohydrates_total_g}</p>
        <p className="card-text">Protein: {nutrition.protein_g}</p>
        <p className="card-text">Fat: {nutrition.fat_total_g}</p>
        <p className="card-text">Sugar: {nutrition.sugar_g}</p>
      </div>
    </div>
  );
}

function Nutrition() {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [isSearchPerformed, setIsSearchPerformed] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const url = `https://api.api-ninjas.com/v1/nutrition?query=${inputValue}`;
      const headers = {
        'X-Api-Key': 'crhvbQXiAxGOczByUzQlGJwfXR5wjMufBdMvjCq7',
      };

      const response = await axios.get(url, { headers });
      setData(response.data);
      setIsSearchPerformed(true);
      console.log(response.data, 'success');
    } catch (error) {
      console.log(error, 'error');
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    fetchData();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  if (error) return `Error: ${error.message}`;

  return (
    <div className="Nutrition-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1 text-start" className="form-label mb-3">
            <h1>Food Item Name</h1>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter food item name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn btn-primary mt-3" type="submit">
            Search
          </button>
        </div>
      </form>
      {isLoading && <div className="loader">Loading...</div>}
      {isSearchPerformed && data.length === 0 && <p>No data found. Please try another word.</p>}
      {data.length > 0 && (
        <div className="nutrition-card-container">
          {data.map((nutrition) => (
            <NutritionCard key={nutrition.name} nutrition={nutrition} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Nutrition;

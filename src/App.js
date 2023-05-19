import './App.css';
import Home from './Pages/Home';
import NutritionLayout from './Pages/Nutrition';
import ExerciseLayout from './Pages/Exercise'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import  ExperienceLayout from './Pages/Experience';

function App() {
  document.title = 'FIT INDIA'
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="nutrition" element={<NutritionLayout />} />
          <Route path="exercise" element={<ExerciseLayout />} />
          <Route path="experience" element={<ExperienceLayout />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
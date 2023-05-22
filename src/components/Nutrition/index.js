import React from 'react'
import axios from 'axios';
import './index.css'
function Nutrition ()  {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition', {
          headers: {
            'X-RapidAPI-Key': 'bf9a0a9b84msh0ccfc969a853169p15e576jsndf7b88f888e0',
            'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
          }
        },{
          params: {
            query: '1lb brisket with fries'
          },
        });
        // setData(response.data);
      } catch (error) {
        console.log(error, 'hsdfhsd');
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default Nutrition
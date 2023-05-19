import "./index.css";
import { Link } from 'react-router-dom';
function Explore() {
  return (
    <div className="Explore">
      <h1 className="Explore_heading">EXPLORE</h1>

      <div className="Explore_Container">
        <div className="Explore_box">
          <Card text="NUTRITION"  link ="/nutrition"/>
        </div>
        <div className="Explore_box">
          <Card text="EXPERIENCE" link ="/exercise"/>
        </div>
        <div className="Explore_box">
          <Card text="EXERCISES" link ="/experience"/>
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div class="Explore_box">
      <Link to = {props.link} className="Explore_Link">
        <div class="Explore_box1">
          <h2 class="Explore_text">{props.text}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Explore;
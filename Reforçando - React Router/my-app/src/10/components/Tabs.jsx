import { Link } from "react-router-dom";
import "./Tabs.css";

const Tabs = () => {
  return (
    <div className="section">
      <ul>
        <li>
          <Link to="/tab1">Tab 1</Link>
        </li>
        <li>
          <Link to="/tab2">Tab 2</Link>
        </li>
        <li>
          <Link to="/tab3">Tab 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;

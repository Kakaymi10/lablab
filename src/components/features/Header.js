import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';

import { Router, Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Header.css";
import "./Home.css";
import Home from "./Home";
import Card from "./Card";
import "./../../App.css"
import { Event } from "./Event";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Router>
    <div className="Navbar">
      <div className="Head">
      <span className="nav-logo">ALUplanner</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        
        <Link to="/" className="a">Home</Link>
        <Link to="/Event" className="a">Events</Link>
        <Link to="/Campustoday" className="a">Campus today</Link>
        <Link to="/Acaddeadline" className="a">Acad Deadlines</Link>
        <Link to="/Acadsessions" className="a">Acad Sessions</Link>
  
      </div>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
      </div>
      <Home />
      <div className='cards_main'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
   


   
    </div>
      <Switch>
        <Route path="/Event">
          <Event />
        </Route>
      </Switch>
    </Router>
    

    


  );
};

export default Header;
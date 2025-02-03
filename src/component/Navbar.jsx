import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contactus">Contact Us</NavLink>
      <NavLink to="experience">Experience</NavLink>
      <NavLink to="resume">Resume</NavLink>
      <NavLink to="services">Services</NavLink>
    </div>
  );
};

export default Navbar;

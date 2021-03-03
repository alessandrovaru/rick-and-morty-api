import "./styles/Layout.css";

import logo from "../img/randm.png";
const Layout = () => {
  return (
    <div className="navbar">
      <img className="logo img-fluid" src={logo} alt="Logo" />
    </div>
  );
};

export default Layout;

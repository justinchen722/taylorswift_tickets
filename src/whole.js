import './whole.css';
import Navbar from './Components/Navbar/navbar.js';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Pages/Home';
import Store from './Pages/Store';

function Taylor() {
  let Components
  switch (window.location.pathname) {
    case "/home":
      Components = Home
      break
    case "/":
      Components = Home
      break
    case "/merch":
      Components = Store
      break
  }
  return (
    <div>
      <Navbar></Navbar> 
      <Components></Components>
    </div>
  );
}

export default Taylor;

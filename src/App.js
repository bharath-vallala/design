import logo from './logo.svg';
import './App.css';
import SideNav from "./components/sideNav/sidenav"
import User from "./components/userdiv/user"
import Main from "./components/maindiv/maindiv"
import Last from "./components/lastdiv/Lastdiv"
function App() {
  return (
    <div className="container">
      <SideNav></SideNav>
      <User></User>
      <Main></Main>
      <Last></Last>
    </div>
  );
}

export default App;

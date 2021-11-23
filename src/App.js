import './App.css';
import { Route, Switch} from "react-router-dom";
import Menu from './menu/Menu';
import Mainpage from './page/Mainpage';
import Footer from './footer/Footer';
import DetailInfo from './page/DetailInfo';


function App() {
  return (
    <div className="App"  >
      <div className='main_header'  >
          <Menu  />
            <Switch>
              <Route path="/" exact   component={Mainpage} />
              <Route path="/detail/:id"   component={DetailInfo}  />
            </Switch>

          <Footer/>
      </div>
    </div>
  );
} 

export default App;

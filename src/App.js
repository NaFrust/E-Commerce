import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/' component={HomePage}/>

      </Switch>
    </div>
  );
}

export default App;

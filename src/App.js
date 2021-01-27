import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListItemComponent from './components/ListItemComponent';
import ViewItemComponent from './components/ViewItemComponent';
import TakeItemComponent from './components/TakeItemComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListItemComponent}></Route>
            <Route path="/items" exact component={ListItemComponent}></Route>
            <Route path="/view-item/:id" exact component={ViewItemComponent}></Route>
            <Route path="/take-item/:id" exact component={TakeItemComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListItemComponent from './components/ListItemComponent';
import ViewItemComponent from './components/ViewItemComponent';
import TakeItemComponent from './components/TakeItemComponent';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';

function App() {
  return (
    <div>
      <div className="container-fluid">
        <NavBar />
      </div>
      <Landing />
    </div>

  );
}

export default App;

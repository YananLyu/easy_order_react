import './App.css';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useParams,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import OfferPage from './pages/OfferPage';
import InboundPage from './pages/InboundPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <div>
      <Router>
        <div className="container-fluid">
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/"> <HomePage /> </Route>
              <Route exact path="/home"> <HomePage /> </Route>
              <Route exact path="/offer"> <OfferPage /> </Route>
              <Route exact path="/inbound"> <InboundPage /> </Route>
              <Route exact path="/payment" component={PaymentPage} />
              {/* <Route exact path="/items"> <ListItemComponent /> </Route> */}
              {/* <Route exact path="/offer" key="_all"> <OfferComponent /> </Route> */}
              {/* <Route exact path="/offer/:id" key="_active"> <OfferComponent /> </Route>
              <Route exact path="/offer/active"> <OfferComponent /> </Route>
              <Route exact path="/view-item/:id"><ViewItemComponent /></Route>
              <Route exact path="/items/_active"><ListItemComponent /></Route> */}
            </Switch>
          </div>
        </div>
        <Landing />
      </Router>
    </div>

  );
}

export default App;

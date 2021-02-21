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
import ViewItemPage from './pages/OfferSubPages/ViewItemPage';
import TakeItemPage from './pages/OfferSubPages/TakeItemPage';
import ConfirmPage from './pages/InboundSubPages/ConfirmPage';

function App() {
  return (
    <div>
      <Router>
        <div className="container-fluid">
          <NavBar />
          <div>
            <Switch>
              {/* home */}
              <Route exact path="/"> <HomePage /> </Route>
              <Route exact path="/home"> <HomePage /> </Route>

              {/* offer */}
              <Route exact path="/offer/view-item/:id"><ViewItemPage /></Route>
              <Route exact path="/offer/take-item/:id"><TakeItemPage /></Route>
              <Route path="/offer/:id"> <OfferPage /> </Route>

              {/* inbound */}
              <Route exact path="/inbound/confirm-item/:id"> <ConfirmPage /> </Route>
              <Route path="/inbound/:id"> <InboundPage /> </Route>

              {/* payment */}
              {/* <Route exact path="/payment/unpaid" component={PaymentPage} />
              <Route exact path="/payment/request" component={PaymentPage} />
              <Route exact path="/payment/pending" component={PaymentPage} />
              <Route exact path="/payment/history" component={PaymentPage} /> */}
              <Route path="/payment/:id" component={PaymentPage} />



              {/* <Route exact path="/items"> <ListItemComponent /> </Route> */}
              {/* <Route exact path="/offer" key="_all"> <OfferComponent /> </Route> */}
              {/* <Route exact path="/offer/:id" key="_active"> <OfferComponent /> </Route>
              <Route exact path="/offer/active"> <OfferComponent /> </Route>
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

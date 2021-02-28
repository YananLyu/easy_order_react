// import './App.css';
// import NavBar from './components/layout/NavBar';
// import Landing from './components/layout/Landing';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // useParams,
// } from "react-router-dom";
// import HomePage from './pages/HomePage';
// import OfferPage from './pages/OfferPage';
// import InboundPage from './pages/InboundPage';
// import PaymentPage from './pages/PaymentPage';
// import ViewItemPage from './pages/OfferSubPages/ViewItemPage';
// import TakeItemPage from './pages/OfferSubPages/TakeItemPage';
// import ConfirmPage from './pages/InboundSubPages/ConfirmPage';

// function App() {
//   return (
//     <div>
//       <Router>
//         <div className="container-fluid">
//           <NavBar />
//           <div>
//             <Switch>
//               {/* home */}
//               <Route exact path="/"> <HomePage /> </Route>
//               <Route exact path="/home"> <HomePage /> </Route>

//               {/* offer */}
//               <Route exact path="/offer/view-item/:id"><ViewItemPage /></Route>
//               <Route exact path="/offer/take-item/:id"><TakeItemPage /></Route>
//               <Route path="/offer/:id"> <OfferPage /> </Route>

//               {/* inbound */}
//               <Route exact path="/inbound/confirm-item/:id"> <ConfirmPage /> </Route>
//               <Route path="/inbound/:id"> <InboundPage /> </Route>

//               {/* payment */}
//               {/* <Route exact path="/payment/unpaid" component={PaymentPage} />
//               <Route exact path="/payment/request" component={PaymentPage} />
//               <Route exact path="/payment/pending" component={PaymentPage} />
//               <Route exact path="/payment/history" component={PaymentPage} /> */}
//               <Route path="/payment/:id" component={PaymentPage} />



//               {/* <Route exact path="/items"> <ListItemComponent /> </Route> */}
//               {/* <Route exact path="/offer" key="_all"> <OfferComponent /> </Route> */}
//               {/* <Route exact path="/offer/:id" key="_active"> <OfferComponent /> </Route>
//               <Route exact path="/offer/active"> <OfferComponent /> </Route>
//               <Route exact path="/items/_active"><ListItemComponent /></Route> */}

//             </Switch>
//           </div>
//         </div>
//         <Landing />
//       </Router>
//     </div>

//   );
// }

// export default App;


/**
 * Add Navbar and define Routes
Now we add a navigation bar in App component. This is the root container for our application.
The navbar dynamically changes by login status and current User’s roles.

Home: always
Login & Sign Up: if user hasn’t signed in yet
User: AuthService.getCurrentUser() returns a value
Board Moderator: roles includes ROLE_MODERATOR
Board Admin: roles includes ROLE_ADMIN
 */
import React, { useState, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./pages/login/login.component";
import Register from "./pages/login/register.component";
import Profile from "./pages/login/profile.component";
import Home from "./pages/BoardAndHome/home.component"
import BoardUser from "./pages/BoardAndHome/board-user.component";
import BoardModerator from "./pages/BoardAndHome/board-moderator.component";
import BoardAdmin from "./pages/BoardAndHome/board-admin.component";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

import store from './store';
const AppWrapper = () => {
  // const store = store();

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                </Link>
                </li>
              </div>
            )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AppWrapper;
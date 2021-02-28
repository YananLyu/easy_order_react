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


import Login from "./pages/login/login.component";
import Register from "./pages/login/register.component";
import Profile from "./pages/login/profile.component";
import Home from "./pages/BoardAndHome/home.component"
import BoardUser from "./pages/BoardAndHome/board-user.component";
import BoardModerator from "./pages/BoardAndHome/board-moderator.component";
import BoardAdmin from "./pages/BoardAndHome/board-admin.component";
import Header from './components/layout/Header';

function App() {
  return (
    <div>
      <Router>
        {/* <div className="container-fluid"> */}
        <div>
          <Header />
          <div>
            <Switch>

              {/* <Route exact path={["/", "/home"]} component={Home} /> */}
              <Route exact path={["/welcomehome"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} />

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
// import React, { useState, useEffect } from "react";
// import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// import AuthService from "./services/auth.service";

// import Login from "./pages/login/login.component";
// import Register from "./pages/login/register.component";
// import Profile from "./pages/login/profile.component";
// import Home from "./pages/BoardAndHome/home.component"
// import BoardUser from "./pages/BoardAndHome/board-user.component";
// import BoardModerator from "./pages/BoardAndHome/board-moderator.component";
// import BoardAdmin from "./pages/BoardAndHome/board-admin.component";

// const App = () => {
//   const [showModeratorBoard, setShowModeratorBoard] = useState(false);
//   const [showAdminBoard, setShowAdminBoard] = useState(false);
//   const [currentUser, setCurrentUser] = useState(undefined);

//   useEffect(() => {
//     const user = AuthService.getCurrentUser();

//     if (user) {
//       setCurrentUser(user);
//       setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
//       setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
//     }
//   }, []);

//   const logOut = () => {
//     AuthService.logout();
//   };

//   return (

//     <div>
//       <BrowserRouter>
//         <nav className="navbar navbar-expand navbar-dark bg-dark">
//           <Link to={"/"} className="navbar-brand">
//             bezKoder
//         </Link>
//           <div className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to={"/home"} className="nav-link">
//                 Home
//             </Link>
//             </li>

//             {showModeratorBoard && (
//               <li className="nav-item">
//                 <Link to={"/mod"} className="nav-link">
//                   Moderator Board
//               </Link>
//               </li>
//             )}

//             {showAdminBoard && (
//               <li className="nav-item">
//                 <Link to={"/admin"} className="nav-link">
//                   Admin Board
//               </Link>
//               </li>
//             )}

//             {currentUser && (
//               <li className="nav-item">
//                 <Link to={"/user"} className="nav-link">
//                   User
//               </Link>
//               </li>
//             )}
//           </div>

//           {currentUser ? (
//             <div className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to={"/profile"} className="nav-link">
//                   {currentUser.username}
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <a href="/login" className="nav-link" onClick={logOut}>
//                   LogOut
//               </a>
//               </li>
//             </div>
//           ) : (
//               <div className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link to={"/login"} className="nav-link">
//                     Login
//               </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link to={"/register"} className="nav-link">
//                     Sign Up
//               </Link>
//                 </li>
//               </div>
//             )}
//         </nav>

//         <div className="container mt-3">
//           <Switch>
//             <Route exact path={["/", "/home"]} component={Home} />
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/register" component={Register} />
//             <Route exact path="/profile" component={Profile} />
//             <Route path="/user" component={BoardUser} />
//             <Route path="/mod" component={BoardModerator} />
//             <Route path="/admin" component={BoardAdmin} />
//           </Switch>
//         </div>
//       </BrowserRouter>

//     </div>
//   );
// };

// export default App;
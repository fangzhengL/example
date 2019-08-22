import React, { Component } from "./react";
import ReactDOM from "./react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

// function AuthExample() {
//   return (
//     <Router>
//       <div>
//         <AuthButton />
//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/protected">Protected Page</Link>
//           </li>
//         </ul>
//         <Route path="/public" component={Public} />
//         <Route path="/login" component={Login} />
//         <PrivateRoute path="/protected" component={Protected} />
//       </div>
//     </Router>
//   );
// }

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// const AuthButton = withRouter(
//   ({ history }) =>
//     fakeAuth.isAuthenticated ? (
//       <p>
//         Welcome!{" "}
//         <button
//           onClick={() => {
//             fakeAuth.signout(() => history.push("/"));
//           }}
//         >
//           Sign out
//         </button>
//       </p>
//     ) : (
//       <p>You are not logged in.</p>
//     )
// );

// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         fakeAuth.isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// function Public() {
//   return <h3>Public</h3>;
// }

// function Protected() {
//   return <h3>Protected</h3>;
// }

// class Login extends Component {
//   state = { redirectToReferrer: false };

//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState({ redirectToReferrer: true });
//     });
//   };

//   render() {
//     let { from } = this.props.location.state || { from: { pathname: "/" } };
//     let { redirectToReferrer } = this.state;
//     if (redirectToReferrer) return <Redirect to={from} />;
//     return (
//       <div>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     );
//   }
// }

const ThemeContext = React.createContext({
  background: 'red',
  color: 'white'
});

const connect = (props,dispatch) => {
   
}

class ReduxProvider extends Component {
  componentDidMount() {
  }
  render() {
    return <ThemeContext.Provider value={this.props.store}>
    {this.props.children}
  </ThemeContext.Provider>
  }
}



class ChildrenOne extends Component {
  static contextType = ThemeContext;
  render() {
    return <div>13123</div>
  }
}

class AuthExample extends Component {
  render() {
  //   return <ThemeContext.Provider value={{a: '123123'}}>
  //     <ChildrenOne/>
  //   </ThemeContext.Provider>
  // }
    return <div>123</div>
  }
}

ReactDOM.render(<AuthExample />, document.getElementById("index"));
import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

export default class App extends Component {
  //   constructor(props) {}
  //   static defaultProps = {
  //   routes: [
  //     { path: "/", name: "Home", Component: Home },
  //     { path: "/about", name: "About", Component: About },
  //     { path: "/contact", name: "Contact", Component: Contact }
  //   ]
  //   };
  //   fadeOut() {
  //     if (routes[path] == "/") {
  //       fade = "Home-title";
  //       console.log(routes.path);
  //     } else {
  //       console.log(routes.path);
  //     }
  //   }
  fadeOut() {
    let fade;
    return (fade = "Home-title");
  }
  render() {
    // let routes = [...this.props.routes];
    let routes = [
      { path: "/", name: "Home", Component: Home },
      { path: "/about", name: "About", Component: About },
      { path: "/contact", name: "Contact", Component: Contact }
    ];

    // let routes = [...this.props.routes];

    //   if (routes.path == "/") {
    //     fade = "Home-title";
    //     console.log("true" + routes.path);
    //   } else {
    //     fade = "Home-title";
    //     console.log("false" + routes.path);
    //   }

    return (
      <Router>
        <>
          <Navbar bg="light">
            <Nav className="mx-auto">
              {routes.map(route => (
                <Nav.Link
                  key={route.path}
                  as={NavLink}
                  to={route.path}
                  activeClassName="active"
                  exact
                >
                  {route.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar>
          <Container className="container">
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={10000}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Component fade={this.fadeOut()} name="Sergio" />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </Container>
        </>
      </Router>
    );
  }
}

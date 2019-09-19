// import React from "react";
// import ReactDOM from "react-dom";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   NavLink
// } from "react-router-dom";
// import { CSSTransition } from "react-transition-group";
// import { Container, Navbar, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import "./Home.css";

// const routes = [
//   { path: "/", name: "Home", Component: Home },
//   { path: "/about", name: "About", Component: About },
//   { path: "/contact", name: "Contact", Component: Contact }
// ];

// const Example = () => {
//   return (
//     <Router>
//       <>
//         <Navbar bg="light">
//           <Nav className="mx-auto">
//             {routes.map(route => (
//               <Nav.Link
//                 key={route.path}
//                 as={NavLink}
//                 to={route.path}
//                 activeClassName="active"
//                 exact
//               >
//                 {route.name}
//               </Nav.Link>
//             ))}
//           </Nav>
//         </Navbar>
//         <Container className="container">
//           {routes.map(({ path, Component }) => (
//             <Route key={path} exact path={path}>
//               {({ match }) => (
//                 <CSSTransition
//                   in={match != null}
//                   timeout={10000}
//                   classNames="page"
//                   unmountOnExit
//                 >
//                   <div className="page">
//                     <Component />
//                   </div>
//                 </CSSTransition>
//               )}
//             </Route>
//           ))}
//         </Container>
//       </>
//     </Router>
//   );
// };

// export default Example;

// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<Example />, rootElement);

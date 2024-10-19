// Filename - App.js
 
import "./App.css";
// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
 
// import Home component
import Home from "./pages/Home";
// import About component
import About from "./pages/About";
// import Contact component
import Contact from "./pages/Contact";

import Article01 from './pages/article01'; // Import your article page

import ScrollToTop from './components/ScrollToTop';
 
function App() {
    return (
        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <ScrollToTop />
                <Routes>
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
 
                    {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
                    <Route
                        path="/about"
                        element={<About />}
                    />
 
                    {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
 
                    {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />

                    <Route path="/article01" element={<Article01 />} /> {/* Your new article route */}
                </Routes>
            </Router>
        </>
    );
}
 
export default App;
import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Homeworks";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path={["/", "/about"]}>
                        <About />
                    </Route>
                    <Route exact path={["/Homeworks"]}>
                        <Homeworks />

                    </Route>



                </Switch>
            </div>
        </Router>

    );
}

export default App;

import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from "./pages/Main/Main";
import Course from "./pages/Course/Course";
import Preloader from "./components/Preloader/Preloader";

const App = () => {
    return (
        <div>
            <Router>
                <Suspense fallback={<Preloader/>}>
                    <Switch>
                        <Route exact path="/"><Main/></Route>
                        <Route exact path="/course/:name?"><Course/></Route>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    )
}

export default App;

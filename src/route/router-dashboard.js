import React from 'react' ;
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AuthenticatedRoute from '../route/AuthenticatedRoute'
import Dashboard from '../component/dashboard/dashboard';

function DashboardRouter() {
    return (
        <div>
            <Router>
                <Switch>
                    <AuthenticatedRoute path="/dashboard" exact component={Dashboard} />
                </Switch>
            </Router>
        </div>

    );
}

export default DashboardRouter;

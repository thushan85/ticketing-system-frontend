import { BrowserRouter, Route, Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Register from "../components/Register";
import PassengerDashboard from "../components/PassengerDashboard";
import JourneyList from "../components/JourneyList";
import Topup from "../components/Topup";
//Topup

function AppRouter() {
    return (
        <Switch>
            <Route path="/register" component={Register} />
            <Route exact path='/login' component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/my-dashboard" component={PassengerDashboard} />
            <Route path="/journey-list" component={JourneyList} />
            <Route path="/Topup" component={Topup} />

            {/* <PublicRoute restricted={true} component={Login} path="/" exact />
                <PrivateRoute component={Home} path="/home" exact /> */}
        </Switch>
    );
}

export default AppRouter;

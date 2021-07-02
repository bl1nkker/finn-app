import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css'

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import PrivateRoute from "./components/PrivateRoute";

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Importers from "./pages/Importers";
import Coworkers from "./pages/Coworkers";
import Scans from "./pages/Scans";
import Revenue from "./pages/Revenue";
import Budget from "./pages/Budget";
import Registry from "./pages/Registry";
import Salary from "./pages/Salary";
import Settings from "./pages/Settings";
import Signals from "./pages/Signals";

import DateFnsUtils from '@date-io/date-fns'; // choose your lib

import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2F80ED",
    },
    secondary: {
      main: "#3F40F0"
    },
    background: {
      main: "#F3F4F8"
    },
    success: {
      main: "#219653"
    },
    error: {
      main: "#EB5757"
    }
  },
});

function App() {
  return (
    <div style={{ background: theme.palette.background.main, minHeight: "100vh", zIndex: -100, position: "absolute", minWidth: "100vw" }}>
      <Router>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <PrivateRoute path="/home" component={Dashboard} />
              <PrivateRoute path="/scans" component={Scans} />
              <PrivateRoute path="/imports" component={Importers} />
              <PrivateRoute path="/revenue" component={Revenue} />
              <PrivateRoute path="/coworkers" component={Coworkers} />
              <PrivateRoute path="/budget" component={Budget} />
              <PrivateRoute path="/registry" component={Registry} />
              <PrivateRoute path="/salary" component={Salary} />
              <PrivateRoute path="/settings" component={Settings} />
              <Route path="/signals">
                <Nav />
                <Signals />
              </Route>
            </Switch>
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      </Router >
    </div >
  );
}

export default App;

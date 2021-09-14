import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css'

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Nav from "./components/Nav";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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
import "./pages/pagesStyles/main.css";

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
              <Route path="/home" component={Dashboard} />
              <Route path="/scans" component={Scans} />
              <Route path="/imports" component={Importers} />
              <Route path="/revenue" component={Revenue} />
              <Route path="/coworkers" component={Coworkers} />
              <Route path="/budget" component={Budget} />
              <Route path="/registry" component={Registry} />
              <Route path="/salary" component={Salary} />
              <Route path="/settings" component={Settings} />
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

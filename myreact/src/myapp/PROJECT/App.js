// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PatientList from './components/PatientList';
import ReportList from './components/ReportList';
import ReportForm from './components/ReportForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PatientList} />
        <Route path="/patients/:id/reports" exact component={ReportList} />
        <Route path="/reports/:id" exact component={ReportForm} />
      </Switch>
    </Router>
  );
}

export default App;

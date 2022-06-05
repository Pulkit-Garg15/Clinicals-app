import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import CollectClinicals from './components/CollectClinicals';
import AddPatient from './components/AddPatient';
import AnalyseData from './components/AnalyseData';
import ChartGenerator from './components/ChartGenerator';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/patientDetails/:patientId" component={CollectClinicals}/>
          <Route exact path="/addPatient" component={AddPatient}/>
          <Route exact path="/analyse/:patientId" component={AnalyseData}/>
          <Route exact path="/chart/:componentName/:patientId" component={ChartGenerator}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Customers } from './components/Pages/Customers/Customers';
import { Dashboard } from './components/Pages/Dashboard/Dashboard';
import { Help } from './components/Pages/Help/Help';
import { Home } from './components/Pages/Home/Home';
import { Messages } from './components/Pages/Messages/Messages';
import { NoMatch } from './components/Pages/NoMatch/NoMatch';
import { Password } from './components/Pages/Password/Password';
import { DashboardSettings } from './components/Pages/DashboardSettings/DashboardSettings';
import { Signout } from './components/Pages/Signout/Signout';
import Navigation from './components/Navigation/Navigation';

import './App.scss';

const App: React.FC = () => {

  return (
    <Router>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/help' element={<Help />} />
          <Route path='/settings' element={<DashboardSettings />} />
          <Route path='/password' element={<Password />} />
          <Route path='/signout' element={<Signout />} />
          <Route path='/' element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import dashboardStore from './store/dashboardStore';
import { observer } from "mobx-react";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Customers } from './components/Pages/Customers/Customers';
import { Dashboard } from './components/Pages/Dashboard/Dashboard';
import { ToDoList } from './components/Pages/ToDoList/ToDoList';
import { Home } from './components/Pages/Home/Home';
import { Messages } from './components/Pages/Messages/Messages';
import { NoMatch } from './components/Pages/NoMatch/NoMatch';
import { Password } from './components/Pages/Password/Password';
import { DashboardSettings } from './components/Pages/DashboardSettings/DashboardSettings';
import { Signout } from './components/Pages/Signout/Signout';
import Navigation from './components/Navigation/Navigation';
import { TopBar } from './components/TopBar/TopBar';


import classNames from 'classnames';
import './App.scss';

const App: React.FC = observer(() => {

  const { navigationActive, changeNavigationStatus } = dashboardStore;

  const [active, setActive] = useState(navigationActive);

  useEffect(() => { setActive(navigationActive) }, [navigationActive]);


  const handlerClick = () => {
    setActive(!active);
    changeNavigationStatus(!active)
  }

  const activeClassPage = classNames({
    'page page__active': active,
    'page': !active,
  });


  return (
    <Router>
      <div className="container">
        <Navigation />
        <div className={activeClassPage}>
          <TopBar active={active} handlerClick={handlerClick} />
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/toDoList' element={<ToDoList />} />
            <Route path='/settings' element={<DashboardSettings />} />
            <Route path='/password' element={<Password />} />
            <Route path='/signout' element={<Signout />} />
            <Route path='/' element={<Home />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
});

export default App;
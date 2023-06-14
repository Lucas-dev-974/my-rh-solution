/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, Routes } from "@solidjs/router";

import './index.css';
import Dashboard from './views/dashboard/Dashboard';
import Navbar from './layout/Navbar';
import NoPage from './views/404'
import EmployeeSheet from './views/EmployeeSheet'

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() =><>
  
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" component={Dashboard} />
      <Route path="/employee/:id" component={EmployeeSheet} />
      <Route path={"/*"} component={NoPage} />
    </Routes>
    
  </Router>
  </> 
, root);

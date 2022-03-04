import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import PageNotFound from './component/PageNotFound'
import CrudForm from './component/CrudForm';
import User from './component/User';
import CrudList from './component/CrudList';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/userlist' element={<User />}/>
        <Route exact path='/crudform'  element={<CrudForm />}/>
        <Route exact path='/crudlist' element={<CrudList />}/>
        <Route exact path='/crudform/:id' element={<CrudForm />}/>
        <Route path='*' exact={true} element={<PageNotFound />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from 'react'
import Form from "../../components/Form/Form"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from '../Layout';
import Test from '../../components/Test';

const AppRoutes = () => {
    return (
      <Router>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<Form/>}/>
                  <Route path='/test' element={<Test/>}/>


              </Route>
          </Routes>
      </Router>
    )
  }
  
  export default AppRoutes
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateMedia } from './components/pages/media/createMedia';
import Body from './components/pages/body';
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/pages/dashboard"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AdminRecurses } from './components/pages/adminRecurses';
import { Page404 } from './components/pages/page404';
import { EditMedia } from './components/pages/media/editMedia';
import { Container } from 'react-bootstrap';


function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <Header />
          <Container className='mt-3'>
            <Routes>
              <Route path='/' element={<Body />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/dashboard/createMedia' element={<CreateMedia />} />
              <Route path='/dashboard/adminRecurses' element={<AdminRecurses />} />
              <Route path='/dashboard/editar/:id' element={<EditMedia />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

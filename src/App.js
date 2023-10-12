import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateMedia } from './components/media/createMedia';
import Body from './components/body';
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/dashboard"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


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
          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='edit' element={<CreateMedia />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';

const App = () => {
  const { toggleTheme } = useContext(ThemeContext)
  const images = [
    '/frieren.jpeg',
    '/frieren2.jpeg',
    'https://i.pinimg.com/736x/b4/8e/49/b48e4922956c4df3535c579732ea29e3.jpg',
    'https://i.pinimg.com/736x/86/85/27/868527ec99e011a75554480f73094022.jpg',
    'https://i.pinimg.com/1200x/6d/1e/a7/6d1ea727b3fe518f851581d843405f3d.jpg',
    'https://i.pinimg.com/1200x/d2/8c/99/d28c99a9fcee56816e50b3871bbd5643.jpg',
    'https://i.pinimg.com/1200x/42/b9/8b/42b98b0e8dcd83f096195e89766360fa.jpg',
  ];

  return (
    <div className={`flex flex-col ${toggleTheme ? 'bg-white' : 'bg-black'}`}>
        <Layout>
          <Routes>
            <Route path='/' element={<Home images={images} />} />
            <Route path='/create' element={<Create images={images} />} />
          </Routes>
        </Layout>
    </div>
  );
};

export default App;

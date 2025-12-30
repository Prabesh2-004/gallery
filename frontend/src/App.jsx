import React, { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';

const App = () => {
  const { toggleTheme } = useContext(ThemeContext);
    const [search, setSearch] = useState('')
  const [images,setImages] = useState([
    { image: '/frieren.jpeg', title: 'Frieren' },
    { image: '/frieren2.jpeg', title: 'Frieren'},
    { image: 'https://i.pinimg.com/736x/b4/8e/49/b48e4922956c4df3535c579732ea29e3.jpg' , title: 'Your Name'},
    { image: 'https://i.pinimg.com/736x/86/85/27/868527ec99e011a75554480f73094022.jpg' , title: 'Goku'},
    { image: 'https://i.pinimg.com/1200x/6d/1e/a7/6d1ea727b3fe518f851581d843405f3d.jpg', title: 'Akatsuki'},
    { image: 'https://i.pinimg.com/1200x/d2/8c/99/d28c99a9fcee56816e50b3871bbd5643.jpg', title: 'F1'},
    { image: 'https://i.pinimg.com/1200x/42/b9/8b/42b98b0e8dcd83f096195e89766360fa.jpg', title: 'Optimus Prime'},
  ]);
  const filtering = images.filter(image => image.title.toLowerCase().includes(search))
  return (
    <div className={`flex flex-col ${toggleTheme ? 'bg-white' : 'bg-black'}`}>
      <Layout setSearch={setSearch}>
        <Routes>
          <Route path='/' element={<Home images={filtering} />} />
          <Route path='/create' element={<Create images={images} setImages={setImages} />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;

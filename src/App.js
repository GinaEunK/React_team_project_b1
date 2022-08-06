import React from 'react';
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import InputPage from './pages/inputpage/InputPage';
import PostList from './pages/postlist/PostList';
import Detail from './pages/detailpage/Detail';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/poting' element={<InputPage />} />
          <Route path='/postlist' element={<PostList />} />
          <Route path='/detaillist' element={<Detail />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

import React, { useState } from 'react';
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import About from '../pages/About/About';
import Courses from '../pages/Courses/Courses';
import styles from './App.module.css';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import CourseIdPage from '../pages/CourseIdPage/CourseIdPage';

function App() {


  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Navbar />
          <div className={styles.divider}>
            <Routes>
              <Route path="/" element={<About />} />
              <Route exact path="/courses" element={<Courses />} />
              <Route exact path="/courses/:id" element={<CourseIdPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        <Footer/>  
      </BrowserRouter>
    </div>
  )
}

export default App

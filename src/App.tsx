import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
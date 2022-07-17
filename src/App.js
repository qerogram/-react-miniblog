import { useState, useEffect, createElement, Children } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import MainPage from './component/page/MainPage';

const App = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} > </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
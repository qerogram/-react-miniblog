import { useState, useEffect, createElement, Children } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const App = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Route props 
                    => path = 여기는 URI 가 들어옴.
                    => element = 함수 명이 들어옴, 근데그냥 함수명이 아니라 {<함수명 />}
                */}
                {/* <Route path="/" element={<Blocks />} > </Route> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App;
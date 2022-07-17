import { useState, useEffect, createElement, Children } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import styled from 'styled-components';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

const App = (props) => {
    return (
        <BrowserRouter>
            <MainTitleText>qero 테스트</MainTitleText>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="post-write" element={<PostWritePage />} />
                <Route path="post/:postId" element={<PostViewPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
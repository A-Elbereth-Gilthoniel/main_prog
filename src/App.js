import React, {useState}  from "react";
//import classCounter from "./ClassCounter";
import Counter from "./Counter";
import "./styles/App.css"
import Post from "./PostItem";
import NewsList from "./components/NewsList";
import Select from "./components/Select";
import NewsPage from "./newsPages/news_page";
import PostPage from "./newsPages/post_pages";
import { Routes, Navigate } from "react-router-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/posts/" element={<NewsPage/>}/>
                <Route exact path="/posts/:id" element={<PostPage/>}/>
                <Route component={<NewsPage/>}/>
                {/* <Navigate to="/posts/" element={<NewsPage/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App;

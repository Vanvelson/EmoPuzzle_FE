import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/Login"; 
import FirstLevel from "./components/FirstLevel";
import ThirdLevel from "./components/ThirdLevel";
import LostCap from "./components/module_1_first/LostCap";
import Bella from './components/module_1_first/bella';
import Third1 from "./components/module_1_first/third_1";
import Fourth1 from "./components/module_1_first/fourth_1";
import Fifth1 from "./components/module_1_first/fifth_1";
import Second1 from "./components/module_1_second/second_1";
import Second2 from "./components/module_1_second/second_2";
import Second3 from "./components/module_1_second/second_3";
import Second4 from "./components/module_1_second/second_4";
import Second5 from "./components/module_1_second/second_5";
import Third_p_1 from "./components/module_1_third/third_p_1";
import Third_p_2 from "./components/module_1_third/third_p_2";
import Third_p_3 from "./components/module_1_third/third_p_3";
import Third_p_4 from "./components/module_1_third/third_p_4";
import Third_p_5 from "./components/module_1_third/third_p_5";
import Fourth_p_1 from "./components/module_1_fourth/fourth_p_1";
import Fourth_p_2 from "./components/module_1_fourth/fourth_p_2";
import Fourth_p_3 from "./components/module_1_fourth/fourth_p_3";
import Fourth_p_4 from "./components/module_1_fourth/fourth_p_4";
import Fourth_p_5 from "./components/module_1_fourth/fourth_p_5";
import Scene from "./components/scene";
import Scene_1 from "./components/scene_1";
import Scene_2 from "./components/scene_2";
import "./App.css"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/firstlevel" element={<FirstLevel />} />
        <Route path="/Thirdlevel" element={<ThirdLevel />} />
        <Route path="/lostcap" element={<LostCap />} />
        <Route path="/bella" element={<Bella />} />
        <Route path="/third_1" element={<Third1 />} />
        <Route path="/fourth_1" element={<Fourth1 />} />
        <Route path="/fifth_1" element={<Fifth1 />} />
        <Route path="/second_1" element={<Second1 />} />
        <Route path="/second_2" element={<Second2 />} />
        <Route path="/second_3" element={<Second3 />} />
        <Route path="/second_4" element={<Second4 />} />
        <Route path="/second_5" element={<Second5 />} />
        <Route path="/third_p_1" element={<Third_p_1 />} />
        <Route path="/third_p_2" element={<Third_p_2 />} />
        <Route path="/third_p_3" element={<Third_p_3 />} />
        <Route path="/third_p_4" element={<Third_p_4 />} />
        <Route path="/third_p_5" element={<Third_p_5 />} />
        <Route path="/fourth_p_1" element={<Fourth_p_1 />} />
        <Route path="/fourth_p_2" element={<Fourth_p_2 />} />
        <Route path="/fourth_p_3" element={<Fourth_p_3 />} />
        <Route path="/fourth_p_4" element={<Fourth_p_4 />} />
        <Route path="/fourth_p_5" element={<Fourth_p_5 />} />
        <Route path="/scene" element={<Scene />} />
        <Route path="/scene_1" element={<Scene_1 />} />
        <Route path="/scene_2" element={<Scene_2 />} />
      </Routes>
    </Router>
  );
};

export default App;
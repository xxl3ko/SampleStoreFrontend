import './App.css';
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Welcome} from "./pages/Welcome/Welcome";
import {Packs} from "./pages/Packs/Packs";
import {Pack} from "./pages/Pack/Pack";
import {Layout} from "./layouts/Layout";
import {Auth} from "./pages/Auth/Auth";
import {SignUpForm} from "./components/SignUpForm/SignUpForm";
import {LoginForm} from "./components/LoginForm/LoginForm";
import React from "react";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Welcome/>}/>
                    <Route path='packs' element={<Packs/>}/>
                    <Route path='packs/:packId' element={<Pack/>}/>
                    <Route path='plugins' element={<p>PLUGINS</p>}/>
                    <Route path='auth/*' element={<Auth/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App;

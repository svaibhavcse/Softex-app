import "./App.css";
import Softex from "./Softex";
import Google from "./Google";
import Windows from "./Windows";
import Android from "./Android";
import Adobe from "./Adobe";
import Gameswindows from "./Gameswindows";
import Cricket22 from "./Cricket22";
import About from "./About";
import Mortalkombat11 from "./Mortalkombat11";
import Apple from "./Apple";
import { Pagenotfound } from "./Pagenotfound";
import { HashRouter, Routes, Route } from "react-router-dom";
import Wwe2k18 from "./wwe2k18";
import { Authentication } from "./Authentication";
import { Signup } from "./Signup";
import {Login} from "./Login";
import {Profile} from "./Profile";
function App() {
  return (
    <div>
      <HashRouter>
        <Authentication>
          <Routes>
            <Route path="/" element={<Softex />} />
            <Route path="/apple" element={<Apple />} />
            <Route path="/google" element={<Google />} />
            <Route path="/windows" element={<Windows />} />
            <Route path="/android" element={<Android />} />
            <Route path="/adobe" element={<Adobe />} />
            <Route path="/gameswindows" element={<Gameswindows />} />
            <Route path="/cricket22" element={<Cricket22 />} />
            <Route path="/about" element={<About />} />
            <Route path="/mk11" element={<Mortalkombat11 />} />
            <Route path="/wwe2k18" element={<Wwe2k18 />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<Pagenotfound />} />
          </Routes>
        </Authentication>
      </HashRouter>
    </div>
  );
}
export default App;
// <Route path="/android" element={<Android />} />
//     <Route path="/Windows" element={<Windows />} />
//    <Route path="/Ios" element={<Ios />} />

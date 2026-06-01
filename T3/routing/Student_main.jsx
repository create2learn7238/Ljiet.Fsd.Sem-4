import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Student_home from "./Student_home"
import Student_project from "./Student_project"
import Student_nopage from "./Student_nopage"
import Img1 from "../assets/img1.png"
import Img2 from "../assets/img2.png"
import Img3 from "../assets/img3.png"

function Student_main() {
    const s = [
        { name: "Sem1", desc: "Java,Computer", image: Img1 }, 
        { name: "Sem2", desc: "Java,DSA,DBMS", image: Img2 }, 
        { name: "Sem3", desc: "Pytohn,FSD", image: Img3 }
    ];

    return (
        <>
            <Router>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/projects"}>Projects</Link></li>
                </ul>
                <Routes>
                    {/* FIXED: Changed object braces to JSX components */}
                    <Route path="/" element={<Student_home />} />
                    <Route path="/projects" element={<Student_project data={s} />} />
                    <Route path="*" element={<Student_nopage />} />
                </Routes>
            </Router>
        </>
    );
} 

export default Student_main;

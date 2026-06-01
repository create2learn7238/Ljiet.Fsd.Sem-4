import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Nopage from "./nppage"

function My() {
    const style = {}
    return (
        <>
            <div>
                <Router>
                    <div style={{
                        display: "flex",
                        justifyContent: "end",
                        backgroundColor: "red",
                        borderRadius: "15px",
                        border: "2px solid transparent",
                        transition: "border-color 0.5s",
                    }}>
                        <Link to={"/"}> Home </Link>
                        <Link to={"/about"}>About </Link>
                        <Link to={"/contact"}>Contact</Link>
                    </div>


                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Nopage />} />
                    </Routes>
                </Router>
            </div>
        </>
    )
} export default My

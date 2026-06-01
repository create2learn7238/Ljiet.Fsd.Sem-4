import wallet from '/wallet.svg'
import heroImg from './assets/hero.png'
import './my.css'


function Myapp() {
    var n = "LJU"
    return (

        <>
            <header>
                <div><img src={wallet} height={50} width={50} alt="not found" />
                </div>
                <div>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Map</a>
                </div>

            </header>


            <h1>Hello B2 Student</h1>

            <img src={heroImg} alt="" height={100} width={100} />
            <h3 style={{ color: 'blue', fontSize: '35px', fontStyle: "italic" }}>Welcome to {n} </h3>
            <h2 id='ec'>external CSS</h2>

            <footer>
                <p>CopyRight @2026 Creted by React</p>
            </footer>

            {/* hii */}
        </>

    )
}
export default Myapp
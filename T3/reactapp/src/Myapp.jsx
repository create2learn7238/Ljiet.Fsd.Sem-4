import wallet from '/wallet.svg'
import heroImg from './assets/hero.png'
function Myapp() {
    var n = "LJU"
    return (
        <>
            <h1>Hello B2 Student</h1>
            <img src={wallet} height={100} width={100} alt="not found" />
            <img src={heroImg} alt="" height={100} width={100} />
            <h3 style={{ color: 'blue', fontSize: '35px', fontStyle: "italic" }}>Welcome to {n} </h3>

        </>

    )
}
export default Myapp
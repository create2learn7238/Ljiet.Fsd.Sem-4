import Productcard from "./productcard"
import i1 from "./assets/img1.png"
import i2 from "./assets/img2.png"
import i3 from "./assets/img3.png"

function Productlist() {
    var product = [{ name: "Product 1", price: 35000, rate: 4.2, image: i1 },
    { name: "Product 2", price: 25000, rate: 3.5, image: i2 },
    { name: "Product 3", price: 11000, rate: 5, image: i3 }
    ]

    return (<>
        <Productcard data={product} />
    </>

    )
} export default Productlist
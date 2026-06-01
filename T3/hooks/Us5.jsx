import { useState } from "react";
import img1 from '../assets/hero.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img1.png'
import img5 from '../assets/react.svg'
import img6 from '../assets/vite.svg'
function Us5() {
    var images = [img1, img2, img3, img4, img5, img6]
    const [image, setimage] = useState(images[0]);


    function handelimage() {
        var i = Math.floor(Math.random() * images.length)
        console.log(i)
        setimage(images[i]);
    }

    return (<div>
        <img src={image} alt="Image" width='300px' height='300px'></img>
        <button onClick={handelimage}>Change Image</button>
    </div>)

} export default Us5
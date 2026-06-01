import { useState } from "react";
import img1 from '../assets/hero.png'
import img2 from '../assets/img2.png'
function Us4() {
    const [image, setimage] = useState(img1);

    function handelimage() {
        if (image === img1) {
            setimage(img2);
        }
        else {
            setimage(img1)
        }
    }

    return (<div>
        <img src={image} alt="Image" width='300px' height='300px'></img>
        <button onClick={handelimage}>Change Image</button>
    </div>)

} export default Us4
import { useState } from "react"
function Form1() {
    const [formdata, setformdata] = useState({})
    function handelsubmit(e) {
        e.preventDefault();
        if (!formdata.un || !formdata.pass || !formdata.eid || !formdata.cpass || !formdata.contact) {
            alert('Please fill required data')
        }
        else if (formdata.pass.length <= 8) {
            alert('Length of password must be >8')
        }
        else if (!/^\{10}$/.test(formdata.contact)) {
            alert("Contact Must be of 10 Digits")
        }
        else {
            alert(`Thank you welcome ${formdata.un}`)
        }
    }

    function handelChange(e) {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value })


    }
    return (
        <><form onSubmit={handelsubmit}>
            <label >Username :</label>
            <input type="text" name='un' onChange={handelChange} ></input><br></br>
            Email :<input type="email" name='eid' onChange={handelChange} ></input><br></br>
            Contact :<input type="tel" name="contact" onChange={handelChange} ></input> <br></br>
            Password :<input type="password" name='pass' onChange={handelChange} ></input><br></br>
            Confirm Password :<input type="password" name='cpass' onChange={handelChange} ></input><br></br>
            Massege :<textarea name="msg" onChange={handelChange}></textarea><br></br>
            <label>Gender</label>
            Male :<input type="radio" name="gender" value="male" onChange={handelChange} />
            Female :<input type="radio" name="gender" value="female" onChange={handelChange} /><br></br>

            <select name="city" onChange={handelChange}>
                <option value="">Select</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Rajkot">Rajkot</option>
            </select>
            <br></br>
            <input type="submit" />

        </form></>)
} export default Form1
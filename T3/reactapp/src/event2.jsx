import React from 'react';

function Event2() {
    const handelsubmit = (e) => {
        e.preventDefault();
        var u = document.getElementById("un").value;
        alert(`Hello ${u}`);
    }

    const handelChange = (e) => {
        document.getElementById("test").innerHTML = e.target.value;
        console.log(e.target.value);
    }

    const handelclick = (e) => {
        document.getElementById("test2").innerHTML = "You Click Twice";
    }

    // Full Page CSS Styling
    const pageStyle = {
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",        // Fits full page height
        width: "100vw",           // Fits full page width
        display: "flex",
        justifyContent: "center", // Centers card horizontally
        alignItems: "center",     // Centers card vertically
        margin: "0",
        padding: "0",
        boxSizing: "border-box"
    };

    const containerStyle = {
        backgroundColor: "#ffffff",
        maxWidth: "420px",
        width: "90%",             // Responsive on mobile screens
        padding: "35px",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        textAlign: "center"
    };

    const inputStyle = {
        width: "100%",
        padding: "12px",
        margin: "10px 0 20px 0",
        boxSizing: "border-box",
        borderRadius: "8px",
        border: "1px solid #ced4da",
        fontSize: "16px",
        outline: "none",
        transition: "border-color 0.2s"
    };

    const submitStyle = {
        width: "100%",
        backgroundColor: "#007bff",
        color: "white",
        padding: "12px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "600",
        transition: "background-color 0.2s"
    };

    const buttonStyle = {
        padding: "10px 20px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        margin: "15px 0",
        fontSize: "14px",
        fontWeight: "500"
    };

    const textOutputStyle = {
        minHeight: "1.5em",
        color: "#495057",
        fontSize: "20px",
        margin: "10px 0",
        wordBreak: "break-word"
    };

    return (
        <div style={pageStyle}>
            <div style={containerStyle}>
                <h1 style={{ fontSize: '26px', color: '#212529', marginBottom: '25px' }}>Handel Event Example</h1>

                <form action="" onSubmit={handelsubmit}>
                    <input type="text" id="un" onChange={handelChange} style={inputStyle} placeholder="Enter name here..." />
                    <input type="submit" value="Submit" style={submitStyle} />
                </form>

                {/* Fixed Error: Changed outer h2 wrapper to a div element */}
                <div style={{ marginTop: '25px', borderTop: '1px solid #dee2e6', paddingTop: '15px' }}>
                    <h2 id="test" style={textOutputStyle}></h2>
                    <button onDoubleClick={() => handelclick("ABC")} style={buttonStyle}>Click</button>
                    <h2 id="test2" style={{ ...textOutputStyle, color: '#dc3545', fontWeight: 'bold' }}></h2>
                </div>
            </div>
        </div>
    )
}  export default Event2;

function Event1() {
    const handelclick = (n) => {
        alert(`welcome ${n} `)

    }
    return (
        <>
            <button onClick={() => handelclick("ABC")}>Click here</button>
        </>
    )

}

export default Event1;

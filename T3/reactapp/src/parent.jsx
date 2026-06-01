import Child from "./child"
function parent() {
    var obj = { name: "virat ", clg: "LJIET" }
    var a = "ABC"
    return (<>
        <Child name="pqr" age="21" />
        <Child name={a} age={25} />
        <User data={obj} />
    </>

    )
} export default parent;


function User(pro) {
    return (
        <>
            <h1 style={{ color: "blue", textTransform: "uppercase", textDecoration: "underline" }} >Welcome {pro.data.name} to {pro.data.clg}</h1>
        </>
    )
}


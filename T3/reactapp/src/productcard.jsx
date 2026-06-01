function Productcard(props) {
    return (
        <>
            <table border={10}>
                <tr>
                    <td>Name</td>
                    <td>Image</td>
                    <td>Price</td>
                    <td>rating</td>
                </tr>
                {
                    props.data.filter((p) => p.rate > 4).map((p) => (<tr>
                        <td>{p.name}</td>
                        <td><img src={p.image} /></td>
                        <td>{p.price + 1000}</td>
                        <td>{p.rate}</td>
                    </tr>))
                }

            </table>
        </>
    )
}

export default Productcard

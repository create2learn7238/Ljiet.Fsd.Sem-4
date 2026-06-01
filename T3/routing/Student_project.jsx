function Student_project(props) {
    return (
        <>
            <h1>Projects</h1>
            <table border={"2px solid red"}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Images</td>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((p, index) => (     

                        <tr key={index}>
                            <td>{p.name}</td>
                            <td>{p.desc}</td>
                            <td><img src={p.image} alt={p.name} style={{ width: "200px" }} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Student_project;

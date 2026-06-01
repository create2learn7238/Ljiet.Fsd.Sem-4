import { useState } from "react";
function Us6() {
    const [task, settask] = useState()
    const [todolist, settodolist] = useState([])

    function addtask() {
        settodolist([...todolist, { id: Date.now(), name: task }])
        settask('')
    }
    function deletetask(id) {
        settodolist(todolist.filter((t) => t.id !== id))
    }

    return (<div>
        <input type="text" value={task} onChange={(e) => settask(e.target.value)}></input>
        <button onClick={addtask}>Add Task</button>
        {
            todolist.map((t) => (
                <div key={t.id}>
                    <h3>{t.name}</h3>
                    <button onClick={() => deletetask(t.id)}>Delete</button>
                </div>
            ))
        }
    </div>)
} export default Us6

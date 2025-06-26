
import Input from './input'
import Card from './Card'
import { useEffect, useState } from 'react'

const Task = () => {
    
    const [taskList, settaskList] = useState([]);
    const handleNewTask = async (newTask) => {
        const body = { task_id: newTask.id, task_name: newTask.text };
        await fetch("http://localhost:8010", {
            method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify(body)
        });
        await handleGetTasks();
        // settaskList((prev) => [...prev, newTask]);
    }

    const handleDelete = async (id) => {
        await fetch("http://localhost:8010/" + id, {
            method: "DELETE",

        })
        await handleGetTasks();
        // settaskList((prev) => prev.filter((task) => task.id !== id));
    };

    const handleGetTasks = async () => {
        const response = await fetch("http://localhost:8010");
        const data = await response.json();
        settaskList(data.map((item) => ({ id: item.task_id, text: item.task_name })));
        console.log(data);
    }
    useEffect(() => {
        handleGetTasks();
    }, []);
    return (
        <>


            <div id="tasks">
                <Input onAddTask={handleNewTask} />

                {taskList.map((task, id) => {
                    return (
                        <Card key={id} props={task} onDelete={handleDelete} />
                    )
                }
                )
                }




            </div>

        </>
    )
}

export default Task;
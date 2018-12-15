import React from "react";
import TaskLoad from './TaskLoad'
import tasks from '../../taskLoadGraph'

function ShowTasks() {
    return (
        <div>
            <h1>Task load graph</h1>

            <TaskLoad tasks = {tasks}/>
        </div>
    )
}

export default ShowTasks
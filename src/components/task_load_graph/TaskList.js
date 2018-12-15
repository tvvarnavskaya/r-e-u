import React from 'react'
import Task from './Task'

export default function TaskList({tasks}) {
    const taskElements = tasks.map(task =>
        <li key={task.tskAlias}><Task task = {task}/></li>
    )
    return (
        <ul>
            {taskElements}
        </ul>
    )
}
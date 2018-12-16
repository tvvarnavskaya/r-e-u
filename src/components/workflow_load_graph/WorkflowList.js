import React from 'react'
import Workflow from './Workflow'

export default function WorkflowList({workflows}) {
    const workflowElements = workflows.map(workflow =>
        <li key={workflow.wfNmeUnq}><Workflow workflow = {workflow}/></li>
    )
    return (
        <ul>
            {workflowElements}
        </ul>
    )
}
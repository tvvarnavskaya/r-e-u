// import TaskList from './TaskList'
import tasks from '../../taskLoadGraph'
import React from "react"
import 'storm-react-diagrams/dist/style.min.css'
import * as SRD from "storm-react-diagrams"
import '../../diagram.css'
import levelColors from '../../levelColors'

function TaskLoad() {

    var engine = new SRD.DiagramEngine();
    engine.installDefaultFactories();
    var model = new SRD.DiagramModel();
    var posX = 50;
    var posY = 0;
    tasks.forEach((tsk) => {
        var colors = levelColors.map(lvl => {
            if (lvl.level === tsk.level) return lvl.color;
            else return "zzz"
        });
        colors.sort();
        var levelColor =colors[0];
        console.log("color="+levelColor);
        var node = new SRD.DefaultNodeModel("Node 1", levelColor);
        posX = 50 * tsk.level;
        posY += 50;
        node.setPosition(posX, posY);
        node.addInPort(tsk.cleanTskNme);
        model.addNode(node)
    });
    engine.setDiagramModel(model);
    return (
        <div>
            <h1>Task load graph</h1>
            <div>
                <SRD.DiagramWidget diagramEngine={engine} />
            </div>
            {/*<TaskList tasks = {tasks}/>*/}
        </div>
    )
}

export default TaskLoad
import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import Workflow from "./Workflow";

class WorkflowTable extends Component {
    state = {
        workflows: []
    };
    render() {
        const workflowElements = this.state.workflows.map(workflow => {
                console.log("workflow=" + workflow);
                return <li key={workflow.wfId}><Workflow workflow={workflow}/></li>
            }
        )
        return (<ul>
                    {workflowElements}
                </ul>
            // <BootstrapTable data={ this.state.workflows }>
            //     <TableHeaderColumn dataField='wfId'>Идентификатор воркфлоу</TableHeaderColumn>
            //     <TableHeaderColumn dataField='wfNmeUnq'>Уникальное наименование</TableHeaderColumn>
            //     {/*<TableHeaderColumn dataField='rlsStus'>Статус</TableHeaderColumn>*/}
            //     {/*<TableHeaderColumn dataField='rlsStartDt'>Дата начала</TableHeaderColumn>*/}
            //     {/*<TableHeaderColumn dataField='rlsEndDt'>Дата окончания</TableHeaderColumn>*/}
            //     {/*<TableHeaderColumn dataField='rlsRunInf'>Информация о запуске</TableHeaderColumn>*/}
            //     {/*<TableHeaderColumn dataField='rlsParams'>Параметры запуска</TableHeaderColumn>*/}
            //     {/*<TableHeaderColumn dataField='rlsJobId'>Идентификатор запуска</TableHeaderColumn>*/}
            //     {/*<TableHeaderColumn dataField='rlsErrMsg'>Ошибки</TableHeaderColumn>*/}
            // </BootstrapTable>
        );
    }
}

export default WorkflowTable
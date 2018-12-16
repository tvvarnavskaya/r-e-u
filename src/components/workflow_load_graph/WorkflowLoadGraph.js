import React, { Component } from "react";
import wfs from '../../workflowLoadGraph'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

class WorkflowLoadGraph extends Component {
    render() {
        return <BootstrapTable data={wfs} border={true}
                               tableStyle={ { border: '#0000FF 2.5px solid' } }
                               containerStyle={ { border: '#FFBB73 2.5px solid' } }
                               headerStyle={ { border: 'red 1px solid' } }
                               bodyStyle={ { border: 'green 1px solid' } }
        >
            <TableHeaderColumn width={'20%'} dataField="wfId" isKey>Идентификатор воркфлоу</TableHeaderColumn>
            <TableHeaderColumn width={'80%'} dataField="wfNmeUnq">Уникальное наименование</TableHeaderColumn>
        </BootstrapTable>
    }
}

export default WorkflowLoadGraph
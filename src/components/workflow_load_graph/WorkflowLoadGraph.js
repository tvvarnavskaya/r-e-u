import React, { Component } from "react";
import wfs from '../../workflowLoadGraph'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {Progress} from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
// import Line from 'rc-progress';

class WorkflowLoadGraph extends Component {
    state = {
        workflows: wfs,
        percent: 30,
        status: "default" //active, success, error
    }

    onClickProductSelected(cell, row, rowIndex){
        console.log('Product #', rowIndex);
    }

    cellButton(cell, row, enumObject, rowIndex) {
        return (
            <button
                type="button"
                onClick={() =>
                    this.onClickProductSelected(cell, row, rowIndex)}
            >
                Click me { rowIndex }
            </button>
        )
    }

    //<Progress percent = {this.state.percent} status={this.state.status}/>
    render() {
        return <BootstrapTable data={this.state.workflows} border={true}
                               tableStyle={ { border: '#0000FF 2.5px solid' } }
                               containerStyle={ { border: '#FFBB73 2.5px solid' } }
                               headerStyle={ { border: 'red 1px solid' } }
                               bodyStyle={ { border: 'green 1px solid' } }
        >
            <TableHeaderColumn width={'20%'} dataField="wfId" isKey>Идентификатор воркфлоу</TableHeaderColumn>
            <TableHeaderColumn width={'60%'} dataField="wfNmeUnq">Уникальное наименование</TableHeaderColumn>
            <TableHeaderColumn width={'10%'} dataField="button" dataFormat={this.cellButton.bind(this)}>Кнопка</TableHeaderColumn>
            <TableHeaderColumn width={'10%'}>Прогресс</TableHeaderColumn>
        </BootstrapTable>
    }
}

export default WorkflowLoadGraph
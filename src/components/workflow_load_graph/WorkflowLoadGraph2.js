import React, { Component } from "react";
import wfs from '../../workflowLoadGraph'
import {Progress} from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {Button} from '@blueprintjs/core';
import { Cell, Column, Table } from "@blueprintjs/table";
class WorkflowLoadGraph extends Component {
    state = {
        workflows: wfs,
        status: "default" //active, success, errorColumn
    }

    onClickProductSelected(cell, row, rowIndex){
        console.log('Product #', rowIndex);
    }

    cellButton(cell, row, enumObject, rowIndex) {
        return (
            <Button
                icon="refresh" type="button"
            ><img src="../../img/info.png" alt="" onClick={this.onClickProductSelected(cell, row, rowIndex)} />
                info
            </Button>
        )
    }

    progressWf(cell, row, enumObject, rowIndex) {
        let wfsLocal = this.state.workflows.map(wf => {
            if (wf.wfId === row.wfId) {
                let startDt = new Date(wf.rlsStartDt);
                let endDt = new Date(wf.rlsEndDt);
                let diff = (endDt.getTime() - startDt.getTime()) / 1000 / 60;
                let percent = diff / wf.avg_time * 100;
                // console.log("wf.wfId="+wf.wfId+", row.wfId="+row.wfId+", time="+diff+", time2="+percent);
                return (percent > 100) ? 99 : percent
            }
            else return 9999999999999
        });
        wfsLocal.sort();
        // console.log("wfs="+wfsLocal);
        //todo add possibility to show all loaded tasks when click on cell or when cursor in cell
        return <Progress percent = {row.rlsStus === 'SUCCEEDED' || row.rlsStus === 'FAILED' || row.rlsStus === 'FINISHED' ? 100 : wfsLocal[0] | 0}
                         status={row.rlsStus === 'RUNNING' ? "active" :
                             row.rlsStus === 'FAILED' ? "error" :
                                 //todo make (! - with info) symbol with yellow color instead of success
                                 row.rlsStus === 'SUCCEEDED' || row.rlsStus === 'FINISHED' ? "success" : "default"}
        />;
    }

    //<Progress percent = {this.state.percent} status={this.state.status}/>
    render() {
        return <Table data={this.state.workflows} border={true}
        >
            <Column width={'20%'} dataField="wfId" isKey>Идентификатор воркфлоу</Column>
            <Column width={'60%'} dataField="wfNmeUnq">Уникальное наименование</Column>
            <Column width={'10%'} dataField="button" dataFormat={this.cellButton.bind(this)}>Кнопка</Column>
            <Column width={'10%'} dataField="progress" dataFormat={this.progressWf.bind(this)}>Прогресс</Column>
        </Table>
    }
}

export default WorkflowLoadGraph
import React, { Component } from "react";
import wfs from '../../workflowLoadGraph'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {Progress} from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import "../styles/bs_table/bs-table.css";
import {Button} from '@blueprintjs/core';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
// import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.js'

class WorkflowLoadGraph extends Component {
    state = {
        workflows: wfs,
        status: "default" //active, success, error
    }

    onClickProductSelected(cell, row, rowIndex){
        console.log('Product #', rowIndex);
    }

    cellButton(cell, row, enumObject, rowIndex, vText) {
        return (
            <Button
                icon="refresh" type="button"
            ><img src="../../img/info.png" alt="" onClick={this.onClickProductSelected(cell, row, rowIndex)} />
                { vText }
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
        return <Progress color={'#5e4937'}
                         percent = {row.rlsStus === 'SUCCEEDED' || row.rlsStus === 'FAILED' || row.rlsStus === 'FINISHED' ? 100 : wfsLocal[0] | 0}
                         status={row.rlsStus === 'RUNNING' ? "active" :
                             row.rlsStus === 'FAILED' ? "error" :
                                 //todo make (! - with info) symbol with yellow color instead of success
                                 row.rlsStus === 'SUCCEEDED' || row.rlsStus === 'FINISHED' ? "success" : "default"}
        />;
    }

     rowClassNameFormat(row, rowIdx) {
        // row is whole row object
        // rowIdx is index of row
        return rowIdx % 2 === 0 ? 'evenRowColor' : 'oddRowColor';
        }

    //<Progress percent = {this.state.percent} status={this.state.status}/>
    render() {
        const bHeight = window.innerHeight > 800 ? '85' : '79';

        return <div /*style={{backgroundColor: '#fff'}}*/>
                <BootstrapTable
                    data            = { this.state.workflows } version='4'
                    trClassName     = { this.rowClassNameFormat }
                    tableStyle      = {{ background: 'rgb(0, 0, 0, 0)',/*height:'75vh',*/ /*width: '100%',*/ color: '#ebae59' }}
                    containerClass = "containerStyleClass"
                    containerStyle  = {{}}
                    // bodyContainerClass = "containerStyleClass"
                    headerStyle     = {{ /*height: '7%'*/}}
                    tableHeaderClass     = "headerStyleClass"

                    bodyStyle       = {{ maxHeight: bHeight + 'vh', overflowY: 'auto' }}

        >
            <TableHeaderColumn thStyle = {{ padding: '12px', whiteSpace: 'normal', border: '#fff 2px solid'/*, color: '#284b7a'*/ }}
                               tdStyle = {{ paddingTop: '6px', paddingBottom: '6px', border: '#b5a79a 1px solid', color: '#ad4c4c' }}
                               width={'12vw'} dataField="wfId" isKey>Идентификатор воркфлоу
            </TableHeaderColumn>
            <TableHeaderColumn thStyle = {{ padding: '12px', whiteSpace: 'normal', border: '#fff 2px solid'/*, color: '#284b7a' */ }}
                               tdStyle = {{ paddingTop: '6px', paddingBottom: '6px', border: '#b5a79a 1px solid', color: '#277536' }}
                               width={'40vw'} dataField="wfNmeUnq">Уникальное наименование
            </TableHeaderColumn>
            <TableHeaderColumn thStyle = {{ padding: '12px', whiteSpace: 'normal', border: '#fff 2px solid' /*, color: '#284b7a' */}}
                               tdStyle = {{ paddingTop: '6px', paddingBottom: '6px', border: '#b5a79a 1px solid' }}
                               width={'20vw'} dataField="button" dataFormat={this.cellButton.bind(this)}>Кнопка
            </TableHeaderColumn>
            <TableHeaderColumn thStyle = {{ padding: '12px', whiteSpace: 'normal', border: '#fff 2px solid' /*, color: '#284b7a' */ }}
                               tdStyle = {{ paddingTop: '6px', paddingBottom: '6px', border: '#b5a79a 1px solid' }}
                               width={'25vw'} dataField="progress" dataFormat={this.progressWf.bind(this)}>Прогресс
            </TableHeaderColumn>
        </BootstrapTable></div>
    }
}

export default WorkflowLoadGraph
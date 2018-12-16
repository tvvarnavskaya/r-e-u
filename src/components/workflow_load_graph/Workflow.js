import React, {Component} from "react";

class Workflow extends Component {
    state = {
        wfId: 0,
        wfNmeUnq: ""
    }

    render() {
        const {workflow} = this.props
        return (
            <div>
                {workflow.wfId}
            </div>
        )
    }
}


export default Workflow
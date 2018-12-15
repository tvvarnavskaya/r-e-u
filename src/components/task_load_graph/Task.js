import React, {Component} from "react";

class Task extends Component {
    state = {
        isOpen: false,
    }

    render() {
        const {task} = this.props
        const body = this.state.isOpen && <section>{task.rlsStus}</section>
        return (
            <div>
                <h4>
                    {task.tskAlias}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h4>
                {body}
                <h3>creation date: {(new Date(task.rlsStartDt)).toDateString()}</h3>
            </div>
        )
    }

    handleClick = () => {
        console.log('---', 'clicked')
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default Task
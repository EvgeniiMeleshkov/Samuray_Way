import React from 'react';

type SpanInputPropsType = {
    status: string | null | undefined
}

class SpanInput extends React.Component<SpanInputPropsType> {
    state = {
        editMode: false
    }
    setEditOff = () => {
        this.setState({
            editMode: false
        })
    }
    setEditOn = () => {
        this.setState({
            editMode: true
        })
    }


    render() {
        return this.state.editMode
            ? <div>
                <input onBlur={this.setEditOff} autoFocus={true} placeholder={this.props.status!} />
            </div>
            : <div>
                <p onDoubleClick={this.setEditOn}>{this.props.status}</p>
            </div>
    }
}

export default SpanInput;
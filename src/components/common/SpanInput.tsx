import React, {ChangeEvent} from 'react';

type SpanInputPropsType = {
    status: string | null | undefined
    updateStatus: (status: string) => void
}

class SpanInput extends React.Component<SpanInputPropsType> {
    state = {
        editMode: false,
        val: this.props.status ? this.props.status : '...reload page'
    }
    setEditOff = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.val)
    }
    setEditOn = () => {
        this.setState({
            editMode: true
        })
    }
    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            val: e.currentTarget.value
        })
    }


    render() {
        return this.state.editMode
            ? <div>
                <input onChange={this.onChange} value={this.state.val} onBlur={this.setEditOff} autoFocus={true} placeholder={this.props.status!} />
            </div>
            : <div>
                <p onDoubleClick={this.setEditOn}>{this.props.status}</p>
            </div>
    }
}

export default SpanInput;
import React, {ChangeEvent} from 'react';

type SpanInputPropsType = {
    status: string | null | undefined
    updateStatus: (status: string) => void
}

class SpanInput extends React.Component<SpanInputPropsType> {



    state = {
        editMode: false,
        val: this.props.status
    }
    setEditOff = () => {
        if(this.state.val?.length === 0) {
            this.props.updateStatus('...write your status')
            this.setState({
                val: '...write your status'
            })
        }
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.val!)
    }
    setEditOn = () => {
        this.setState({
            editMode: true
        })
    }
    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.value.length < 300) {
            this.setState({
                val: e.currentTarget.value
            })
        }
    }
    componentDidUpdate(prevProps: Readonly<SpanInputPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return this.state.editMode
            ? <div>
                <input onChange={this.onChange} value={this.state.val!} onBlur={this.setEditOff} autoFocus={true} placeholder={this.props.status!} />
            </div>
            : <div>
                <p style={{color: 'rgba(5,23,30,0.8)'}} onDoubleClick={this.setEditOn}>{this.props.status}</p>
            </div>
    }
}

export default SpanInput;
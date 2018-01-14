import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: 'Hello!'
        }
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        let value = this.state.value;
        return (
            <div>
                <input 
                    type='text'
                    value={value}
                    onChange={(e) => this.handleChange(e)}
                />
                <p>{value}</p>
            </div>
        )
    }
}
export default Input;
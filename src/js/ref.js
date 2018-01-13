import React from 'react';

class UnControlledForm extends React.Component {
    handleSubmit = () => {
        alert('Input Value: ' + this.input.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    ref={(input) => this.input = input} />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
export default UnControlledForm;
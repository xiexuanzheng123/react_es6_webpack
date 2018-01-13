import React from 'react';

//ref获取真实DOM节点
class UnControlledForm extends React.Component {
    handleClick() {
        this.refs.myTextInput.focus();
    }

    render() {
        return (
            <div>
                <input 
                    type='text' 
                    ref="myTextInput"
                />
                <input 
                    type='button' 
                    value='Focus the text input' 
                    onClick={() => this.handleClick()}
                />
            </div>
        )
    }
}
export default UnControlledForm;
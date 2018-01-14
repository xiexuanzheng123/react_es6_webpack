import React from 'react';

class LifeStyle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 1.0
        }
    }
    componentDidMount() {
        console.log('ComponentDidMount');// componentDidMount after rendering
        this.timer = setInterval(function () {
            let opacity = this.state.opacity;
            opacity -= 0.05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
    }
    render() {
        console.log('render');//first to render
        return (
            <div style={{opacity: this.state.opacity, color: 'green'}}>
                Hello {this.props.name}
            </div>
        )
    }
}
export default LifeStyle;
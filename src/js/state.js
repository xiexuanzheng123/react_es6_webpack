import React from 'react';

class LikeButton extends React.Component {
    // getInitialState() {
    //     return {
    //         liked: false
    //     };
    // }React在ES6中去掉了getInitialState函数
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        }
    }
    handleClick(e) {
        this.setState({
            liked: !this.state.liked
        })
    }
    render() {
        let text = this.state.liked ? 'like' : 'dislike';
        return (
            <p onClick={(e) => this.handleClick(e)}>
                You&nbsp; 
                    <span style={{fontSize: '20px', color: 'green', fontWeight: 'bold'}}>{text}</span> 
                &nbsp;this to click change
            </p>
        )
    }
}
export default LikeButton;
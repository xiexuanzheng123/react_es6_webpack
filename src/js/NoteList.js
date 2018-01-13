import React from 'react';

class NoteList extends React.Component {
    render() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, (child, key) => {
                        return <li>{child}</li>
                    })
                }
            </ol>
        )
    }
}
export default NoteList;
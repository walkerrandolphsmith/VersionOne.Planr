import React from 'react';

class ToolbarSpacer extends React.Component {
    render() {
        const spacerStyle = {
            flex: '1'
        };
        return (
            <div style={spacerStyle}></div>
        );
    }
}
export default ToolbarSpacer;
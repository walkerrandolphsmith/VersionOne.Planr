import React, { Component, PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSpacer } from './../Toolbar';
import { DeleteIcon } from './../Icons';


export default class ModalHeader extends Component {
    static PropTypes = {
        className: PropTypes.string,
        title: PropTypes.string,
        requestClose: PropTypes.func
    };

    static defaultProps = {
        className: '',
        title: '',
        requestClose: () => {}
    };

    render() {
        const { className, title, requestClose } = this.props;
        return (
            <Toolbar className={`modal-actionbar ${className}`}>
                <ToolbarTitle text={title}/>
                <ToolbarSpacer />
                <ToolbarGroup className="close-modal">
                    <DeleteIcon onClick={requestClose} />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}
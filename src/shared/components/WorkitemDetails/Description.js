import React from 'react';
import TinyMCE from 'react-tinymce';
import { Button } from './../Buttons';

export class Description extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isExpanded: true,
            isEditing: false,
            newDescription: this.props.description,
            description: this.props.description
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            newDescription: nextProps.description,
            description: nextProps.description
        });
    }

    handleEditorChange(e) {
        const newDescription = e.target.getContent();
        this.setState({ newDescription: newDescription });
    }

    edit() {
        this.setState({ isEditing: true });
    }

    saveAndClose() {
        if(this.state.newDescription !== this.state.description) {
            this.props.updateWorkitem({
                oid: this.props.oid,
                assetData: {
                    description: this.state.newDescription
                }
            });
        }
        this.setState({ isEditing: false });
    }

    cancelAndClose() {
        this.setState({ isEditing: false });
    }

    toggleExpander() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }

    render() {
        const {
            description,
            isEditing,
            isExpanded
        } = this.state;

        const tinyMCEConfig = {
            plugins: 'link image code advlist',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | link image',
            advlist_bullet_styles: "square"
        };

        const descriptionMarkup = !isEditing
            ? <div
                className="read-only"
                onClick={this.edit.bind(this)}
                dangerouslySetInnerHTML={{ __html: description }}
               ></div>
            : <TinyMCE
            content={description}
            config={tinyMCEConfig}
            onChange={this.handleEditorChange.bind(this)}
        />;

        const expander = isExpanded ? 'fa-minus-square-o' : 'fa-plus-square-o';
        const isExpandedClass = isExpanded ? 'expanded' : '';
        return (
            <div className="description">
                <span className="expander" onClick={this.toggleExpander.bind(this)}>
                    <i className={`fa ${expander}`} />
                </span>
                <label>Description:</label>
                <div className={`field ${isExpandedClass}`}>{descriptionMarkup}</div>
                <div className="ghost-save"
                     style={{display: isEditing && isExpanded ? 'block' : 'none'}}
                     onClick={this.saveAndClose.bind(this)}
                >
                    <Button text="Save" />
                </div>
                <div className="ghost-cancel"
                     style={{display: isEditing && isExpanded ? 'block' : 'none'}}
                     onClick={this.cancelAndClose.bind(this)}
                >
                    <Button text="Cancel" />
                </div>
            </div>
        )
    }
}
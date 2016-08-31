import React from 'react';
import TinyMCE from 'react-tinymce';

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

    toggleEditingDescription() {
        const tryingToSave = this.state.isEditing;
        const descriptionChanged = this.state.newDescription !== this.state.description;
        if(tryingToSave && descriptionChanged) {
            this.props.updateWorkitem({
                oid: this.props.oid,
                assetData: {
                    description: this.state.newDescription
                }
            });
        }
        this.setState({ isEditing: !this.state.isEditing });
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
            ? <div dangerouslySetInnerHTML={{ __html: description }}></div>
            : <TinyMCE
            content={description}
            config={tinyMCEConfig}
            onChange={this.handleEditorChange.bind(this)}
        />;

        const editLabel = isEditing ? 'Save' : 'Edit';
        const expander = isExpanded ? '[-]' : '[+]';
        const isExpandedClass = isExpanded ? 'expanded' : '';
        return (
            <div className="description">
                <span className="expander" onClick={this.toggleExpander.bind(this)}>{expander}</span>
                <label>Description:</label>
                <span onClick={this.toggleEditingDescription.bind(this)}>{editLabel}</span>
                <div className={`field ${isExpandedClass}`}>{descriptionMarkup}</div>
            </div>
        )
    }
}
import React from 'react';
import TinyMCE from 'react-tinymce';

export class Description extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
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
        //WIP don't return early when updating works.
        return;
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

    render() {
        const {
            description,
            isEditing
        } = this.state;

        const tinyMCEConfig = {
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | link image'
        };

        const descriptionMarkup = !isEditing
            ? <div className="value-container" dangerouslySetInnerHTML={{ __html: description }}></div>
            : <TinyMCE
            content={description}
            config={tinyMCEConfig}
            onChange={this.handleEditorChange.bind(this)}
        />;

        return (
            <div className="group">
                <div className="attributes description">
                    <div>
                        <label>Description:</label>
                            <span onClick={this.toggleEditingDescription.bind(this)}>
                                {this.state.isEditing ? 'Save' : 'Edit'}
                            </span>
                        {descriptionMarkup}
                    </div>
                </div>
            </div>
        )
    }
}
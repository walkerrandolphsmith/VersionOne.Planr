import React from 'react';

const ESCAPE = 27,
      ENTER = 13;

export class WorkitemTitle extends React.Component {
    static defaultProps = {
        style: {}
    };

    save(e){
        const newName = e.target.innerText;
        console.log('save ', e, ' value', newName);
        if(newName != this.props.name){

            this.props.updateWorkitem({
                oid: this.props.oid,
                assetData: {
                    name: newName
                }
            });

        }
    }

    saveOrCancel(e){
        switch(e.which){
            case ESCAPE:
                e.target.innerText = this.props.name;
                break;
            case ENTER:
                this.save(e);
                e.preventDefault();
                break;
        }
    }

    render() {
        const {
            number,
            name,
            className,
            style
        } = this.props;
        const containerStyle = Object.assign({}, WorkitemTitle.defaultStyles.container, style);
        const titleStyle = Object.assign({}, WorkitemTitle.defaultStyles.title);

        return (
            <div style={containerStyle} className={`toolbar-title ${className}`} >
                <h1 style={titleStyle}>{number} <span contentEditable="true"
                                                        onBlur={this.save.bind(this)}
                                                        onKeyDown={this.saveOrCancel.bind(this)}>{name}</span>
                </h1>
                <span className={`toolbar-divider ${className}`}></span>
            </div>
        );
    }

    static defaultStyles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            lineHeight: 1
        },
        title: {
            wordWrap: 'break-word',
            wordBreak: 'break-word',
            maxWidth: '500px',
            maxHeight: '50%',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }
    }
}
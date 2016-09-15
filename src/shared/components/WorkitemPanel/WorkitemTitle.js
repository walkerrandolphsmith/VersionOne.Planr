import React from 'react';
import { Input } from './../common/Inputs';

export class WorkitemTitle extends React.Component {
    static defaultProps = {
        style: {}
    };

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
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }
    };

    updateName = (newValue) => {
        this.props.updateWorkitem({
            oid: this.props.oid,
            assetData: {
                Name: newValue
            }
        });
    };

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
                <h1 style={titleStyle}>
                    <span className="number">
                        {number}
                    </span>
                    <Input value={name} updateValue={this.updateName}/>
                </h1>
                <span className={`toolbar-divider ${className}`}></span>
            </div>
        );
    }
}
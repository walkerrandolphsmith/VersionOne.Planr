import React, { Component, PropTypes } from 'react';
import { Lookup } from './../Lookup';

export class EpicLookup extends Component {
    search = (query) => {
        this.props.lookupEpic(query);
    };

    select = (result) => {
        this.props.selectEpic({
            name: result.text, oid: result.oid, scope: result.scope, category: result.category
        });
    };

    deSelect = () => {
        this.props.deSelectEpic();
    };

    render() {
        const { epicLookupResults, epic } = this.props;
        const className = epic && epic.category ? epic.category.name : '';
        return (
            <Lookup {...this.props}
                classNames={className}
                resultClassNameField={"category.name"}
                selected={epic.name}
                deSelect={this.deSelect}
                placeholder="Search for an Epic"
                width={252}
                results={epicLookupResults}
                select={this.select}
                onChange={this.search}
                inputStyles={{
                    border: 'none'
                }}
                listStyles={{
                    position: 'absolute',
                    right: '0px',
                    zIndex: 99999,
                    backgroundColor: 'white'
                }}
            />
        );
    }
}
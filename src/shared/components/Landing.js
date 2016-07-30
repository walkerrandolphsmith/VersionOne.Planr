import React from 'react';
import axios from 'axios';

export class Landing extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            workitems: [],
            isLoading: true
        };
    }

    componentDidMount() {
        const self = this;
        axios.get('/api/backlog').then(response => {
            self.setState({
                workitems: response.data[0],
                isLoading: false
            });
        });
    }

    render() {

        const wis = this.state.workitems.map(wi => (
            <div key={wi.Number}>{wi.Number} - {wi.Name}</div>
        ));

        const content = this.state.isLoading
            ? (<div><i className="fa fa-spin fa-spinner" style={{fontSize: '5em'}}></i></div>)
            : wis;

        return (
            <div>
                {content}
            </div>
        )
    }
}
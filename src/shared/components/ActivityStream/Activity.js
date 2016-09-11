import React from 'react';

class Verb extends React.Component {
    render() {
        const { oldValue } = this.props;

        let icon = { name: 'downRightArrow', value: '&#8627;' };
        if(oldValue) {
            icon = { name: 'doubleRightArrow', value: '&raquo;' };
        } else {
            icon = { name: 'longRightArrow', value: '&#x27f6;' };
        }

        return (
            <span className={`verb ${icon.name}`} dangerouslySetInnerHTML={{__html: icon.value }} />
        )
    }
}


class Target extends React.Component {
    render() {
        const { name, verb, newValue, summary, oldValue } = this.props;
        let valueToDisplay = verb === 'SetLongValue' ? summary : newValue;
        if(valueToDisplay instanceof Object) {
            valueToDisplay = valueToDisplay.displayName;
        }

        return (
            <li className="target">
                <div className="expando">
                    <span className="name">{name}</span>
                    <Verb oldValue={oldValue} />
                    <span className="value">{valueToDisplay}</span>
                </div>
            </li>
        )
    }
}

export class Activity extends React.Component {

    static defaultProps = {
        activity: {
            body: {
                actor: {
                    id: '',
                    assetType: '',
                    displayName: '',
                    username: '',
                    email: '',
                    avatar: ''
                },
                verb: '',
                object: {
                    id: '',
                    assetType: '',
                    displayName: '',
                    number: '',
                    assetState: '',
                    scope: '',
                    colorName: ''
                },
                time: '',
                summary: '',
                provider: {
                    stream: '',
                    guid: "00000000-0000-0000-0000-0000000000000"
                },
                target: [
                    {
                        name: '',
                        newValue: '',
                        oldValue: '',
                        verb: '',
                        summary: ''
                    }
                ],
                id: "00000000-0000-0000-0000-0000000000000"
            },
            headers: {

            }
        }
    };

    render() {
        const { body, headers } = this.props;

        const targets = body.target.map((t, i) => <Target key={i} {...t} />);

        return (
            <div className={`activity verb-${body.verb}`}>
                <div className="time" title={body.time}>{body.time.split('T')[1]}</div>
                <div className="summary">
                    <span>{body.actor.displayName} </span>
                    <span className="verb">{body.verb}</span>
                    <div className={`activity-subject ${body.object.assetType}`}>
                        <span>{`${body.object.number} ${body.object.displayName}`}</span>
                    </div>
                    <ul className="targets">
                        {targets}
                    </ul>
                </div>
            </div>
        )
    }
}
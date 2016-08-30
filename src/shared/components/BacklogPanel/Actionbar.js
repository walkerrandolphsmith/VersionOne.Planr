import React from 'react';
import { Toolbar, ToolbarTitle, ToolbarSpacer, ToolbarGroup } from './../Toolbar';
import { MultiButton } from './../Buttons';

function ancestorHasClass(element, classname) {
    if(!element.className)
        return false;
    else
        return element.className.split(' ').indexOf(classname) >= 0
            ? true
            : element.parentNode && ancestorHasClass(element.parentNode, classname);
}

export class Actionbar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isMultiButtonOpen: false
        }
    }

    onClick(event) {
        const elm = event.target;
        const isMultiButtonAncestor = ancestorHasClass(elm, 'multi-button') || ancestorHasClass(elm, 'MultiButtonOptions');
        if(!isMultiButtonAncestor) {
            event.stopPropagation();
            this.setState({ isMultiButtonOpen: false });
        }
    }

    componentDidMount() {
        window.addEventListener('click', this.onClick.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onClick.bind(this));
    }
    
    render() {
        const { addStory, addDefect, epic } = this.props;
        const { isMultiButtonOpen } = this.state;
        return (
            <header>
                <Toolbar>
                    <ToolbarTitle text={'Backlog'}/>
                    <ToolbarSpacer />
                    <ToolbarGroup>
                        <MultiButton text="Add" onClick={addStory} isDisabled={!epic} isOpen={isMultiButtonOpen}>
                            <div onClick={addStory}>Story</div>
                            <div onClick={addDefect}>Defect</div>
                        </MultiButton>
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}
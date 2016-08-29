import React from 'react';
import { Toolbar, ToolbarTitle, ToolbarSpacer, ToolbarGroup } from './../Toolbar';
import { MultiButton } from './../Buttons';

export class Actionbar extends React.Component {
    render() {
        const { addStory, addDefect, epic } = this.props;
        return (
            <header>
                <Toolbar>
                    <ToolbarTitle text={'Backlog'}/>
                    <ToolbarSpacer />
                    <ToolbarGroup>
                        <MultiButton text="Add" onClick={addStory} isDisabled={!epic}>
                            <div onClick={addStory}>Story</div>
                            <div onClick={addDefect}>Defect</div>
                        </MultiButton>
                    </ToolbarGroup>
                </Toolbar>
            </header>
        );
    }
}
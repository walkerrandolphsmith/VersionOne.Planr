import AbstractPopover from './AbstractPopover';

export default class Popover extends AbstractPopover {
    clickHandler = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
}
import AbstractPopover from './AbstractPopover';

export default class HoverPopover extends AbstractPopover {
    open = () => {
        this.setState({ isOpen: true });
    };

    close = () => {
        this.setState({ isOpen: false });
    };
}
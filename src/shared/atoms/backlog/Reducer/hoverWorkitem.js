import * as actions from './../Actions';

const hoverWorkitem = {
    [actions.hoverWorkitem]: (state, action) => state.set('hovered', action.payload.workitemOidToken)
};

export default hoverWorkitem;
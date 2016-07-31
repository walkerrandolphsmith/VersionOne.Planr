import * as actions from './../Actions';

const selectWorkitem = {
    [actions.selectWorkitem]: (state, action) => state.set('selected', action.payload.workitemOidToken)
};

export default selectWorkitem;
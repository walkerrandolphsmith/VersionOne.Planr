import * as actions from './../Actions';

const updateWorkitemWithActivityStream = {
    [actions.updateWorkitemWithActivityStream]: (state, action) => state
            .setIn(["workitems", action.payload.workitemOidToken, 'activity'], action.payload.activity)
};

export default updateWorkitemWithActivityStream;
import * as actions from './../Actions';

const updateWorkitemWithDetails = {
    [actions.updateWorkitemWithDetails]: (state, action) => state.set(action.payload.workitemWithDetails.oid, action.payload.workitemWithDetails)
};

export default updateWorkitemWithDetails;
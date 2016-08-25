import * as actions from './../Actions';

const updateWorkitemWithConversationStream = {
    [actions.updateWorkitemWithConversationStream]: (state, action) => state
            .setIn(["workitems", action.payload.workitemOidToken, 'conversations'], action.payload.conversations)
};

export default updateWorkitemWithConversationStream;
import * as actions from './../Actions';
import _ from 'lodash';

const updateWorkitemWithActivityStream = {
    [actions.updateWorkitemWithActivityStream]: (state, action) => {
        let newState = _.cloneDeep(state);
        newState.workitems[action.payload.workitemOidToken].activity = action.payload.activity;
        return newState;
    }
};

export default updateWorkitemWithActivityStream;
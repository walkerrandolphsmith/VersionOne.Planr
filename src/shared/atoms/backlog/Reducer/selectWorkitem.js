import * as actions from './../Actions';
import _ from 'lodash';

const selectWorkitem = {
    [actions.selectWorkitem]: (state, action) => {
        let newState = _.cloneDeep(state);
        newState.selected = action.payload.workitemOidToken;
        return newState;
    }
};

export default selectWorkitem;
import * as actions from './../Actions';
import _ from 'lodash';

const hoverWorkitem = {
    [actions.hoverWorkitem]: (state, action) => {
        let newState = _.cloneDeep(state);
        newState.hovered = action.payload.workitemOidToken;
        return newState;
    }
};

export default hoverWorkitem;
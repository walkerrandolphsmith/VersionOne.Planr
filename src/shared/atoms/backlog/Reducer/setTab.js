import * as actions from './../Actions';
import _ from 'lodash';

const setTab = {
    [actions.setTab]: (state, action) => {
        let newState = _.cloneDeep(state);
        newState.tab = action.payload.tabKey;
        return newState;
    }
};

export default setTab;
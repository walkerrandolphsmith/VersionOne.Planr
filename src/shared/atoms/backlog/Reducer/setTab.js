import * as actions from './../Actions';

const setTab = {
    [actions.setTab]: (state, action) => state.set('tab', action.payload.tabKey)
};

export default setTab;
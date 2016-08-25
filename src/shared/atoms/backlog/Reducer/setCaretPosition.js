import * as actions from './../Actions';
import _ from 'lodash';

const setCaretPosition = {
    [actions.setCaretPosition]: (state, action) => {
        let newState = _.cloneDeep(state);
        newState.caretTopPosition= action.payload.offset;
        return newState;
    }
};

export default setCaretPosition;
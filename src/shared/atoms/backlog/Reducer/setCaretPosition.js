import * as actions from './../Actions';

const setCaretPosition = {
    [actions.setCaretPosition]: (state, action) => state.set('caretTopPosition', action.payload.offset)
};

export default setCaretPosition;
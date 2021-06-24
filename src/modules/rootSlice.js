import { combineReducers } from 'redux';
import { cursorReducers } from 'modules/slice/cursorSlice';
import { themeReducers } from 'modules/slice/themeSlice';
import { menuReducers } from 'modules/slice/menuSlice';

const rootReducer = combineReducers({
    cursorReducers,
    themeReducers,
    menuReducers,
});

export default rootReducer;

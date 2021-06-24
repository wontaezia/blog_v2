import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cursorActions } from 'modules/slice/cursorSlice';

export default function useCursor() {
    const dispatch = useDispatch();
    const { isHoverOnTarget, cursorStyles } = useSelector((state) => {
        const {
            cursorReducers: { isHoverOnTarget, cursorStyles },
        } = state;

        return {
            isHoverOnTarget,
            cursorStyles,
        };
    });

    const handleCursorType = useCallback(
        (cursorType) => dispatch(cursorActions.setCursorType(cursorType)),
        [dispatch],
    );

    return {
        isHoverOnTarget,
        cursorStyles,
        handleCursorType,
    };
}

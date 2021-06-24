import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuActions } from 'modules/slice/menuSlice';

export default function useMenu() {
    const dispatch = useDispatch();
    const { isMenuOpen } = useSelector((state) => {
        const {
            menuReducers: { isMenuOpen },
        } = state;

        return {
            isMenuOpen,
        };
    });

    const setMenuState = useCallback(
        () => dispatch(menuActions.setMenuState()),
        [dispatch],
    );

    return {
        isMenuOpen,
        setMenuState,
    };
}

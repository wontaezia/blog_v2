import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeActions } from 'modules/slice/themeSlice';

export default function useTheme() {
    const dispatch = useDispatch();
    const { currentTheme, isSet } = useSelector((state) => {
        const {
            themeReducers: { currentTheme, isSet },
        } = state;

        return {
            currentTheme,
            isSet,
        };
    });

    const toggleTheme = useCallback(() => {
        dispatch(themeActions.toggleTheme());
    }, [dispatch]);

    const setTheme = useCallback(
        (theme) => dispatch(themeActions.setTheme(theme)),
        [dispatch],
    );

    useEffect(() => {
        if (isSet) {
            window.localStorage.setItem('theme', currentTheme);
        }
    }, [currentTheme]);

    return {
        currentTheme,
        toggleTheme,
        setTheme,
    };
}

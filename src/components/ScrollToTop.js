import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';


const ScrollToTop = ({children}) => {
    const { pathname } = useLocation();

    useEffect(() => {
        const controlScrollRefresh = 'scrollRestoration' in window.history
        if(controlScrollRefresh) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0,0);
    }, [pathname]);

    return children;
}

export default ScrollToTop;

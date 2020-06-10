import { createContext } from 'react';

export type AppContextTypes = {
    pathname: string;
    query?: object;
    params?: object;
};

const AppContext = createContext<AppContextTypes>({
    pathname: '',
    query: {},
    params: {},
});

export default AppContext;

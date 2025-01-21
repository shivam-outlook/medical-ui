import { ApplicationContext } from '../App.jsx';
import { useContext } from 'react';

const useTheme = () => {
    const [context, setConext] = useContext(ApplicationContext);
    return [context, setConext];
};

export default useTheme;
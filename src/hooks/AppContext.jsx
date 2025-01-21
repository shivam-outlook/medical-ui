import { useState } from "react";
import Config from '../application-config/config.json';


const AppContext = () => {
    const [context, setConext] = useState(Config);

    const updateContext = (key, value) => {
        if (context[key] !== value) {
            const temp = { ...context };
            temp[key] = value;
            setConext(temp);
        }
    };

    return [context, updateContext];
};

export default AppContext;
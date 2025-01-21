import { useState } from "react";

const authObject = {
    isAuthenticated: false,
    user: null
};

const Auth = () => {
    const [auth, setAuth] = useState(authObject);
    return [auth, setAuth];
}

export default Auth;
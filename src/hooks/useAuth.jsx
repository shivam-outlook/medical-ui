import { useContext } from "react";
import { AuthContext } from "../App.jsx";

const useAuth = () => {
    const [auth, setAuth] = useContext(AuthContext);
    return [auth, setAuth];
};
export default useAuth;
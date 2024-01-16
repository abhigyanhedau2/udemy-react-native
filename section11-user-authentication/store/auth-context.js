import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: "",
    isAuthenticated: false,
    authenticate: () => { },
    logout: () => { }
});

export default function AuthContextProvider(props) {
    const [token, setToken] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function authenticate(token) {
        setToken(token);
        setIsAuthenticated(true);
    }

    function logout() {
        setToken(null);
        setIsAuthenticated(false);
    }

    const value = {
        token,
        isAuthenticated,
        authenticate,
        logout
    };

    return <AuthContext.Provider value={value}>
        {props.children}
    </AuthContext.Provider>
}
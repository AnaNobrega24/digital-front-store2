import { createContext, useState } from "react";

export const LoginContest = createContext();

const LoginProvider = ({ children }) => {

    const [logado, setLogado] = useState(false);

    return ( 
        <LoginContest.Provider value={{ logado, setLogado}}>
            {children}
        </LoginContest.Provider>
     );
}
 
export default LoginProvider;
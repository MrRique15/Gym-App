import React from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [user, setUser] = React.useState({
        name: '',
        surename: '',
        email: '',
        imageURL: '',
        altura: 0,
        peso: 0,
        tipoFisico: '',
        idade: 0,
        objetivo: 'Nenhum',
        restricao: 'Nenhuma',
        treino01: 'Nenhum',
        treino02: 'Nenhum',
        treino03: 'Nenhum',
    });

    return(
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => React.useContext(AuthContext);
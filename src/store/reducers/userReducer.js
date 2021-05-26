// Estado global (variáveis globais)
export const initialState = {
    isLogged: false, 
    email: null
}

//  configReducer.js
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': return { ...state, isLogged: true, email: action.values}; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
        case 'LOGOUT': return { ...state, isLogged: false, email: null}; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
        default: return state
    }
}
export default userReducer;

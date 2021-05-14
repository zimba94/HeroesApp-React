import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

// const usuario = {
//     name: 'Alan',
//     logged: true
// };

describe('Pruebas en authReducer', () => {
    
    test('Debe retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false}); 
    });
    test('Debe autenticar y colocar el name del usuario', () => {
        const action = {
            type: types.login, 
            payload: {
                name: "Zimba"
            }
        };
        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            name:"Zimba",
            logged: true
        }); 

    });
    test('Debe borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout, 
        };
        const state = authReducer({name:"Zimba", logged: true}, action);
        expect(state).toEqual({logged: false}); 
    });
    
});

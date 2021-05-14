import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { types } from '../../../types/types';

describe('Pruebas en <LoginScreen/>', () => {

    const history = {
        replace: jest.fn()
    };
    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: false,
            name: 'Alan'
        }
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter >
                <LoginScreen history={history} />
            </MemoryRouter>
        </AuthContext.Provider>
    ); 

   test('Debe mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
   });

   test('Debe de realizar el dispatch y la navegación', () => {
       const handleClick = wrapper.find('button').prop('onClick');
       
       handleClick();
       
       expect(contextValue.dispatch).toHaveBeenCalledWith({
            payload: {"name": "Zimba"}, 
            type: types.login
       });

       expect(history.replace).toHaveBeenCalledWith('/');
       localStorage.setItem('lastPath', '/dc');
       handleClick();
       expect(history.replace).toHaveBeenCalledWith('/dc');
   });
   
});

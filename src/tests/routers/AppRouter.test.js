import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';
import { shallow } from "enzyme";

describe('Pruebas en <AppRouter>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: false
        }
    };
   test('Debe mostar el login si no estáautenticado.', () => {
      const wrapper = mount(
          <AuthContext.Provider value={contextValue}>
              <AppRouter />
          </AuthContext.Provider>
      ); 
      expect(wrapper).toMatchSnapshot();
   });
   

   test('Debe de mostrar el componente marvel si está autenticado-', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: true,
            name: "Alan"
        }
    };
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <AppRouter />
        </AuthContext.Provider>
    ); 
    expect(wrapper.find(".navbar").exists()).toBe(true);
   });
   
    
});

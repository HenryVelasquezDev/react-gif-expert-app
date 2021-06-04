import React  from 'react';
import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';
import { shallow } from 'enzyme';

describe('Pruebas en <AddCategory /> ', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory SetCategories = {setCategories} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory SetCategories = {setCategories} />);
    })
    test('debe de mostrarse correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto', () => {
         
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{
            target: {
                value: value
            }
        });
    });

    test('no debe de postear la informacion Onsubmit', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});

        expect( setCategories ).not.toHaveBeenCalled();
    });
    
    test('debe de llamar al setcategorias y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{
            target: {
                value: value
            }
        });
        
        wrapper.find('form').simulate('submit',{preventDefault(){}});

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ));
        expect(input.prop('value')).toBe('');


    })
        
    
});

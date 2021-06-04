import React  from 'react';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas en <GifExpertApp /> ', () => {
    
    test('debe de mostrarse correctamente ', () => {
        const wrapper = shallow( <GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar una lista de categorias ', () => {
        const categories = ['Dragon Ball Z','Hunter x Hunter'];
        const wrapper = shallow( <GifExpertApp defaultCategories = {categories}/>);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length).toBe( categories.length );

    });
        
    
});

import React from 'react';
//import { render } from '@testing-library/react'; 
import GifGridItem from '../../components/GifGridItem';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en <GifGridItem />', () => {
    
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg'; 
    const wrapper = shallow( <GifGridItem title ={title} url={url}  /> );
    
    //pruebas despues de instalar enzyme en setupTests.js
    test('debe mostrar <GifGridItem /> correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe tener un parrafo con el title ', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });

    test('debe de obtener la imagen igual al url y alt de los props', () => {
       
        const img = wrapper.find( 'img' );
        //console.log( img.prop('src') );
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });
    
    test('debe de tener animate__bounceInLeft', () => {
        const div = wrapper.find( 'div' );
        const className = div.prop('className');
        //console.log(div.prop('className').split(' '));
        expect( className.split(' ')[2] ).toBe( 'animate__bounceInLeft' );
        expect( className.includes('animate__bounceInLeft') ).toBe ( true );
    })
    

})

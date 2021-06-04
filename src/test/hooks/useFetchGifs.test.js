import React from 'react';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook useFetchGifs', () => {
   
    test('debe de retornar el estado inicial ', async() => {
       
        const { result , waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dragon Ball' ) );
        const { loading, data } = result.current;
        await waitForNextUpdate();
        expect( data ).toEqual( [] );
        expect( loading ).toBe(true);
    });

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dragon Ball' ) );
        await waitForNextUpdate();

        const { loading, data } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe(false);
    });
    
    
});

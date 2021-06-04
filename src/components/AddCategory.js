import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({SetCategories}) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) =>{
        setinputValue(e.target.value);

        console.log('handleInputChange llamado');
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log('handleSubmit llamado');
        if (inputValue.trim().length > 2 ){
            SetCategories(cats => [inputValue, ...cats]);
            setinputValue('');
        }
        
    };

    return (
        <form onSubmit= {handleSubmit}>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );
}

AddCategory.propTypes = {
    SetCategories : PropTypes.func.isRequired
}

export default AddCategory;

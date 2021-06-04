import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
//import PropTypes from 'prop-types'

const GifExpertApp = ({defaultCategories = []}) => {

    //const [categories, setcategories] = useState(['Dragon Ball Z']);
    const [categories, setcategories] = useState(defaultCategories);

    return (
        <>
            <h2>CounterApp</h2>
            <AddCategory SetCategories = { setcategories }/>
            <hr/>
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key= { category }
                            category= { category }
                        />
                    ))
                }
            </ol>
        </>
    );
}

/*GifExpertApp.propTypes = {

}*/

export default GifExpertApp;
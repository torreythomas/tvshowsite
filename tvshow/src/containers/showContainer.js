import React from 'react';
import Showimage from '../components/showImage';
import Showdescription from '../components/showDescription'


const showContainer = () => {
    return (
        <div className=" w-100 bg-white ma0 pa0 tc flex ">
            <Showimage/>
            <Showdescription/>
        </div>
    )
}



















export default showContainer;
import React from 'react';
import './css/addDeveloper.css';

function InfoWithDev(props){
    return (
        <div className='addDev' >
            
            <div className='item' id='addDevItem1' >
                <div id='devInfo'>Could not find what you were looking for ?</div>
            </div>
            <div className='item' id='addDevItem2' >
                <input id="addDevBtn" type="button" value="Add developer info" />
            </div>
        </div>
    );
}


function InfoWithoutDev(props){
    return (
        <div className='addDev' >
            <div className='item' id='addDevItem1' >
                <div id='devInfo'>No developers added yet</div>
            </div>
            <div className='item' id='addDevItem2' >
                <input id="addDevBtn" type="button" value="Add developer info" />
            </div>
        </div>
    );
}

// function AddDev(props){
//     const isDevPresent = props.isDevPresent;
//     if(isDevPresent){
//         return <InfoWithDev />
//     }
//         return <InfoWithoutDev />
// }


// export default AddDev;

export {
    InfoWithDev,
    InfoWithoutDev
}
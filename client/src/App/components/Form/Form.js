import React from "react";
import './Form.css';

const Form = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                        onClick={onButtonSubmit}
                    >Submit</button>
                </div>
            </div>
        </div>
    );
}


export default Form;
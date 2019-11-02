import React from "react";
import './Form.scss';

const CLASS_NAMES = {
    FORM_CONTAINER: 'form-container',
    FORM_CONTAINER_INPUT: 'form-container-input',
    FORM_CONTAINER_BUTTON: 'form-container-button grow link' //grow,link are tachyons
}

const Form = ({handleInputChange, handleButtonPress, handleKeyPress}) => {
    return (
        <div>
            <div>
                <div className={CLASS_NAMES.FORM_CONTAINER}>
                    <input
                        className={CLASS_NAMES.FORM_CONTAINER_INPUT}
                        type='text'
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}/>
                    <button
                        className={CLASS_NAMES.FORM_CONTAINER_BUTTON}
                        onClick={handleButtonPress}
                    >Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Form;
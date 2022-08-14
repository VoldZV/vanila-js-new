import React from 'react';




export const User = () => {

    const deleteUser = () => {
        console.log('Delete user')
    }


    // onBlur - событие при потере фокуса с элемента
    const onBlurHandler = () => {
        console.log('blur - where are is Input?')
    }
    const onFocusHandler = () => {
        console.log('focus - Oh eeee, I`m in Focus')
    }

    return (
        <div> Dimych
            <button onClick={deleteUser}>delete</button>
            <button>save</button>
            <div>focus</div>
            <input onBlur={onBlurHandler} value={'blur'}/>
            <input onFocus={onFocusHandler} value={'focus'}/>
        </div>
    );
};

export default User;
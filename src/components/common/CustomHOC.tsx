import {store} from '../../redux/redux_store';
import {Redirect} from 'react-router-dom';
import React, {ComponentType} from 'react';


function customHoc <T> (PassedComponent: ComponentType<T>) {

    return function CustomHoc(props: any) {
        return store.getState().auth.isAuth
            ? <PassedComponent
                {...props}
            />
            : <Redirect to={'login'}/>

    }
}
export default customHoc
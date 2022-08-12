import {store} from '../../redux/redux_store';
import {Redirect} from 'react-router-dom';
import React from 'react';


const customHoc = (PassedComponent: any) => {
    const isAuth = store.getState().auth.isAuth
    return class CustomHoc extends React.Component {

        render() {
            return isAuth
                ? <PassedComponent
                    {...this.props}
                />
                : <Redirect to={'login'}/>
        }
    }
}
export default customHoc
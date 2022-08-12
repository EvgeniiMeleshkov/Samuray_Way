import {store} from '../../redux/redux_store';
import {Redirect} from 'react-router-dom';
import React from 'react';


const customHoc = (PassedComponent: any) => {
    const isAuth = store.getState().auth.isAuth
    return class CustomHoc extends React.Component {

        render() {
            if (isAuth === true) {
                return <Redirect to={'login'}/>
            } else {

                return <PassedComponent
                    {...this.props}
                />
            }
        }
    }
}
export default customHoc
import React from 'react';
import './App.css';
import {Sidebar} from './components/Sidebar/Sidebar';
import {Route, Switch} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer'
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeTC} from './redux/appReducer';
import {AppDispatch, RootState} from './redux/redux_store';
import Preloader from './components/common/Preloader';

class App extends React.Component<MapDTP & MapSTP> {

    componentDidMount() {
        this.props.initializeTC()
    }

    render() {
        if(!this.props.init) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Sidebar/>
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/dialogs/'} render={() => <DialogsContainer/>}/>
                        <Route path={'/users/'} render={() => <UsersContainer/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

type MapSTP = ReturnType<typeof mapStateToProps>
type MapDTP = ReturnType<typeof mapDispatchToProps>

const mapStateToProps = (state: RootState) => ({
    init: state.app.initialized
})
const mapDispatchToProps = (dispatch: AppDispatch) => ({
    initializeTC: ()=>dispatch(initializeTC())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

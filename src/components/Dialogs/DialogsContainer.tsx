import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {AppDispatch, RootReducerType, RootState} from '../../redux/redux_store';
import {addMessageAC, DialogsPageType} from '../../redux/dialogsReducer';
import customHoc from '../common/CustomHOC';


type MapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}
type MapDispatchPropsType = {
    addMessage: (text: string) => void
}

//-------------------------------------------------------------

const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchPropsType => {
    return {
        addMessage: (text: string) => {
            dispatch(addMessageAC(text))
        }
    }
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
export const DialogsContainer = compose(customHoc(connect<MapStatePropsType, MapDispatchPropsType, {}, RootReducerType>(mapStateToProps, mapDispatchToProps)(Dialogs)))
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {RootReducerType, RootState} from '../../redux/redux_store';
import {addMessageAC, DialogsPageType, updateMessageAC} from '../../redux/dialogsReducer';
import customHoc from '../common/CustomHOC';


type MapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}
type MapDispatchPropsType = {
    onTextChanged: (text: string) => void
    addMessage: () => void
}

//-------------------------------------------------------------

const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onTextChanged: (text: string) => {
            dispatch(updateMessageAC(text))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
export const DialogsContainer = compose(customHoc(connect<MapStatePropsType, MapDispatchPropsType, {}, RootReducerType>(mapStateToProps, mapDispatchToProps)(Dialogs)))
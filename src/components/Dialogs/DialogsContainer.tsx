import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootReducerType} from '../../redux/redux_store';
import {addMessageAC, DialogsPageType, updateMessageAC} from '../../redux/dialogsReducer';


type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
    onTextChanged: (text: string) => void
    addMessage: () => void
}

//-------------------------------------------------------------

const mapStateToProps = (state: RootReducerType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
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
export const DialogsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootReducerType>(mapStateToProps, mapDispatchToProps)(Dialogs)
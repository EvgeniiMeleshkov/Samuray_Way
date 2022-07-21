import {
    addMessageActionCreator, DialogsPageType,
    updateMessageActionCreator
} from '../../redux/store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootReducerType} from '../../redux/redux_store';


export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

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
            dispatch(updateMessageActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export const DialogsContainer: any = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
import {
    addMessageActionCreator, DialogsPageType,
    updateMessageActionCreator
} from '../../redux/store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootReducerType} from '../../redux/redux_store';


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
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
export const DialogsContainer: any = connect<MapStatePropsType, MapDispatchPropsType, {}, RootReducerType>(mapStateToProps, mapDispatchToProps)(Dialogs)
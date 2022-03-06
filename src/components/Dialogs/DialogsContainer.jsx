import React from "react";
import {addMessageActionCreator, changeMessageAreaActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        ButtonPush: () => {dispatch(addMessageActionCreator() )},
        changeMessageArea: (text) => {dispatch(changeMessageAreaActionCreator(text) )}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
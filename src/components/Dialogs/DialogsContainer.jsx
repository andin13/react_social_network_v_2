import React from "react";
import {addMessageActionCreator, changeMessageAreaActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        ButtonPush: () => {dispatch(addMessageActionCreator() )},
        changeMessageArea: (text) => {dispatch(changeMessageAreaActionCreator(text) )}
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
import s from './../Dialogs.module.css';
import React from "react";
import {useFormik} from "formik";

const MessageForm = (props) => {

    const buttonImageUrl = 'https://icon-library.com/images/chat-send-icon/chat-send-icon-1.jpg'

    const initialValues = {
        message: ''
    }
    const onSubmit = (values) => {
        console.log(values.message);
        props.addMessage(values.message);
    }
    const validate = (values) => {
        let errors = {}
        if (!values.message) {
            errors.message = 'Fill this form!'
        }
        return errors
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return <form onSubmit={formik.handleSubmit}>
        <div className={s.enterArea}>
                <textarea placeholder='Enter your message'
                          type={'text'}
                          id={'message'}
                          name={'message'}
                          onChange={formik.handleChange}
                          value={formik.values.message}
                />
            <button type={'submit'}><img src={buttonImageUrl}/></button>
        </div>
    </form>
}

export default MessageForm;
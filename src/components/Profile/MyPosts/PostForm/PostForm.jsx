import s from './../MyPosts.module.css';
import React from "react";
import {useFormik} from "formik";

const PostForm = (props) => {

    const initialValues = {
        post: ''
    }
    const onSubmit = (values) => {
        console.log(values.post);
        props.addPost(values.post);
    }
    const validate = (values) => {
        let errors = {}
        if (!values.post) {
            errors.post = 'Fill this form!'
        }
        return errors
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return <form onSubmit={formik.handleSubmit}>
        <div className={s.postCreationBlock}>
            <textarea placeholder='Enter your post'
                      type={'text'}
                      id={'post'}
                      name={'post'}
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      className={s.postCreation}
            />
            <div>
                <button type={'submit'}>Add post</button>
            </div>
        </div>
    </form>
}

export default PostForm;
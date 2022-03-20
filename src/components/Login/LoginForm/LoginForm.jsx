import {useFormik} from "formik";
import s from './../Login.module.css';

const LoginForm = (props) => {
    const initialValues = {
        login: '',
        password: '',
        rememberMe: null
    }

    const onSubmit = (values) => {
        props.login(values.login, values.password)
    }

    const validate = (values) => {
        let errors = {}
        if (!values.login) {
            errors.login = 'Fill this form!'
        }
        if (!values.password) {
            errors.password = 'Required'
        }
        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    console.log('Forms touched', formik.touched)
    return <form onSubmit={formik.handleSubmit}>
        <div className={s.formItem}>
            <div>
                <label htmlFor="login">Login</label>
            </div>
            <div>
                <input type={'text'}
                       id={'login'}
                       name={'login'}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.login}/>
            </div>
            {formik.touched.login && formik.errors.login ? <div className={s.formControl}>{formik.errors.login}</div> : null}
        </div>
        <div className={s.formItem}>
            <div>
                <label htmlFor="password">Password</label>
            </div>
            <div>
                <input type={'password'}
                       id={'password'}
                       name={'password'}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.password}/>
            </div>
            {formik.touched.password && formik.errors.password ? <div className={s.formControl}>{formik.errors.password}</div> : null}
        </div>
        <div className={s.formItem}>
            <input type={'checkbox'}
                   id={'rememberMe'}
                   name={'rememberMe'}
                   onChange={formik.handleChange}
                /*checked={formik.values.rememberMe === 'Y'}*//>
            <label htmlFor="rememberMe">Remember me</label>
        </div>
        <div>
            <button type={"submit"}>Login</button>
        </div>
    </form>
}

export default LoginForm;
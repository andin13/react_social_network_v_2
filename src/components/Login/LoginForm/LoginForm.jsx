import {Formik, Field, Form} from 'formik';
import s from './../Login.module.css';

const LoginForm = ({login}) => <Formik
    initialValues={{
        login: '',
        password: '',
        rememberMe: true
    }}
    onSubmit={(values) => login(values.login, values.password, values.rememberMe)}
>
    <Form>
        <div className={s.formItem}>
            <div>
                <label htmlFor="login">Login</label>
            </div>
            <div>
                <Field id={'login'}
                       name={'login'}/>
            </div>
        </div>
        <div className={s.formItem}>
            <div>
                <label htmlFor="password">Password</label>
            </div>
            <div>
                <Field type={'password'}
                       id={'password'}
                       name={'password'}/>
            </div>
        </div>
        <div className={s.formItem}>
            <Field type={'checkbox'}
                   id={'rememberMe'}
                   name={'rememberMe'}/>
            <label htmlFor="rememberMe">Remember me</label>
        </div>
        <div>
            <button type={"submit"}>Login</button>
        </div>
    </Form>
</Formik>

export default LoginForm;
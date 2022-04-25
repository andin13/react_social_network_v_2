export interface LoginFormProps {
    login: (
        login: string,
        password: string,
        rememberMe: boolean,
    ) => void;
}

export interface FormValues {
    email: string;
    password: string;
    rememberMe: boolean;
}

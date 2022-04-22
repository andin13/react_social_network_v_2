export interface LoginFormProps {
    login: (
        login: string,
        password: string,
        rememberMe: boolean,
    ) => void;
}

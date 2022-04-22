export interface AppState {
    initialized: boolean;
}

export enum AppActionTypes {
    INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS',
}

interface InitializedSuccessAction {
    type: AppActionTypes.INITIALIZED_SUCCESS;
}

export type AppAction = InitializedSuccessAction;

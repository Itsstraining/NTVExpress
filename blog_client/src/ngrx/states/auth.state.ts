export interface AuthState {
    isAuthenticatied: boolean;
    idToken: string;
    error: string;
}

export interface AuthLogin {
    isLogin: boolean;
    error: string;
}
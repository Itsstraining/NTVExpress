import { Express } from '../../app/models/express.model';

export interface ExpressState {
    isLoading: boolean;
    express: Express[];
    error: string;
    isSuccess: boolean;
}

export interface createExpressState {
    isLoading: boolean;
    express: Express;
    error: string;
    isSuccess: boolean;
    message: string;
}

export interface updateExpressState {
    isLoading: boolean;
    express: Express;
    error: string;
    isSuccess: boolean;
}

export interface deleteExpressState {
    isLoading: boolean;
    express: Express;
    error: string;
    isSuccess: boolean;
}

export interface getExpressState {
    isLoading: boolean;
    express: Express;
    error: string;
    isSuccess: boolean;
}
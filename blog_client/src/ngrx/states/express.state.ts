import { Express } from '../../app/models/express.model';

export interface ExpressState {
    isLoading: boolean;
    express: Express[];
    error: string;
    isSuccess: boolean;
}
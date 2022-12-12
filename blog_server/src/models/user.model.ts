export interface User {
    _id: string;
    email: string;
    name: string;
    photoURL: string;
    dob: string;
    website: string;
    gender: string;
    posts: Array<any>;
    description: string;
}
import { Post } from "./post.model";

export interface User {
    name: string;
    email: string;
    photoURL: string;
    description: string;
    Posts: Post[];
}
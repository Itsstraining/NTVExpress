export interface Comment {
    userId: string;
    content: string;
    image: string;
    comments: Array<Comment>;
    postId: string;
}
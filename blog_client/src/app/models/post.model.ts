export interface Post {
    _id: string;
    title: string;
    content: string;
    images: [{
        url: string;
        hashTag: string;
    }];
    tags: string;
    links: Array<string>;
    authorId: {
        email: string;
        name: string;
    };
    likes: string;
    comments: string;
    coverImage: string;
    status: string;
}

export interface Comment {
    content: string,
    comments: [],
    createAt: string,
    image: string,
    postId: string,
    updateAt: string,
    userId: string,
}
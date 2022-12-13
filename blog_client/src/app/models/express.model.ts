
export interface Express {
    _id: string;
    title: string;
    content: string;
    createdAt: string,
    image: [{
        url: string;
        hashTag: string;
    }];
    tags: string;
    links: Array<string>;
    // authorId: {
    //     email: string;
    //     firstName: string;
    // };
    likes: string;
    comments: Comment[];
    coverImage: string;
}

export interface Comment {
    content: string,
    comments: [],
    createdAt: string,
    image: string,
    ExpressId: Express,
    updatedAt: string,
    // userId: User,
}
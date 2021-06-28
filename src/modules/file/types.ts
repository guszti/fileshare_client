export type File = {
    _id: string;
    name: string;
    createdAt: Date;
    user: User;
};

export type User = {
    _id: string;
    username: string;
};

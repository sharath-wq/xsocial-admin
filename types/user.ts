export type User = {
    id: string;
    email: string;
    username: string;
    following: number;
    followers: number;
    posts: number;
    isBlocked: boolean;
};

export type UserData = {
    bio: string;
    createdAt: string;
    email: string;
    followers: string[];
    following: string[];
    fullName: string;
    id: string;
    imageUrl: string;
    isAdmin: boolean;
    posts: string[];
    savedPosts: string[];
    username: string;
    verified: boolean;
    isBlocked: boolean;
};

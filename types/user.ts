export type User = {
    id: string;
    amount: number;
    status: 'active' | 'blocked';
    email: string;
    username: string;
    following: number;
    followers: number;
    posts: number;
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
};

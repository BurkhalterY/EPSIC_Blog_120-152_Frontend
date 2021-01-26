import { Post } from './post';
import { Comment } from './comment';

export interface User
{
    id: number;
    username: string;
    password: string;
    passconf: string;
    isAdmin: boolean;
    posts: Array<Post>;
    comments: Array<Comment>;
}

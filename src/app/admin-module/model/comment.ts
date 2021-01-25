import { User } from './user';
import { Post } from './post';

export interface Comment
{
    id: number;
    date: Date;
    message: string;
    post: Post;
    author: User;
}

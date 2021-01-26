import { User } from './user';
import { Post } from './post';

export interface Comment
{
    id: number;
    date: string;
    prettyDate: string;
    message: string;
    postId: number;
    post: Post;
    authorId: number;
    author: User;
}

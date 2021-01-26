import { User } from './user';
import { Comment } from './comment';

export interface Post
{
    id: number;
    title: string;
    date: string;
    prettyDate: string;
    content: string;
    authorId: number;
    author: User;
    comments: Array<Comment>;
}

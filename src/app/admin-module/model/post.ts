import { User } from './user';
import { Comment } from './comment';

export interface Post
{
    id: number;
    title: string;
    date: Date;
    content: string;
    author: User;
    comments: Array<Comment>;
}

import { User } from './user';
import { Genre } from './genre';

export interface Movie
{
    id: number;
    title: string;
    year: number;
    duration: number;
    image: string;
    users: Array<User>;
    genres: Array<Genre>;
}

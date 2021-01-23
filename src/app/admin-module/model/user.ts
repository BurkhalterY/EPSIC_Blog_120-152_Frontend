import { Movie } from './movie';

export interface User
{
    id: number;
    username: string;
    isAdmin: boolean;
    movies: Array<Movie>;
}

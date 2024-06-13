import { Movie } from "./movie";

export class Cart{
    id?: number;
    movies: Movie[];
    clientId: number;
    status: string;
    sumPrice: number;
    
    constructor(
        movies: Movie[],
        clientId: number,
        status: string,
        sumPrice: number,
        id?: number){
            this.movies = movies;
            this.clientId = clientId;
            this.status = status;
            this.sumPrice = sumPrice;
            this.id = id;
        }
}
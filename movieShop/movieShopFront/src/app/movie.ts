export class Movie {
    id: number;
    title: string;
    description: string;
    releaseYear: number;
    genre: string;
    director: string;
    price: number;

    constructor(
        id: number,
        title: string,
        description: string,
        releaseYear: number,
        genre: string,
        director: string,
        price: number,
    ){
        this.title = title;
        this.description = description;
        this.releaseYear = releaseYear;
        this.genre = genre;
        this.director = director;
        this.price =price;
        this.id = id;
    }
}
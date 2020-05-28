const MongoLib = require('../lib/mongo')

class MoviesService {
    constructor(){
        this.collection = 'movies';
        this.mongoDB = new MongoLib();
    }

    async getMovies({ tags }) {
        const query = tags && { tags: {$in: tags}}
        const movies = await this.mongoDB.getAll(this.collection, query);

        return movies || [];
    }
    async getMovie({movieId}) {
        const movie = await this.mongoDB.get(this.collection, movieId);

        return movie || {};
    }
    async createMovie({ movie }) {
        const createdMovie = await this.mongoDB.create(this.collection, movie);

        return createdMovie;
    }
    async updateMovie({ movieId, movie}) {
        const updatedMovie = await this.mongoDB.update(this.collection,movieId, movie);

        return updatedMovie;
    }
    async deleteMovie({movieId}) {
        const deletedMovie = await this.mongoDB.delete(this.collection, movieId);

        return deletedMovie;
    }
    async replaceMovie(){
        const replacedMovie = await Promise.resolve(moviesMock[0].id);
        return replacedMovie;
    }
}

module.exports = MoviesService;
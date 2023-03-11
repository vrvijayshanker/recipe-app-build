const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    servings: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    imageurl: {
        type: String
    }

});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
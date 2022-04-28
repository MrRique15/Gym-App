const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    surename: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    height: {
        type: Number,
        require: true
    },
    weight: {
        type: Number,
        require: true
    },
    code: {
        type: Number,
        require: true
    },
    imageURL: {
        type: String,
        require: true
    },
    tipoFisico: {
        type: String,
        require: true
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

UserSchema.index({ name: 1, surename: 1, email: 1, password: 1, age: 1, high: 1, weight: 1, code: 1 }, { unique: true });

module.exports = mongoose.model('user', UserSchema);
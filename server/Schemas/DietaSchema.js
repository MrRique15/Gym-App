const mongoose = require('mongoose');

const DietaSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    objetivo: {
        type: String,
        require: true
    },
    restricao: {
        type: String,
        require: true
    },
}, {
    timestamps: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

DietaSchema.index({ email: 1, objetivo: 1, restricao: 1}, { unique: true });

module.exports = mongoose.model('dieta', DietaSchema);
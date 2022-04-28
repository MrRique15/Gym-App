const mongoose = require('mongoose');

const TreinoSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    treinoOne: {
        type: Object,
        require: true
    },
    treinoTwo: {
        type: Object,
        require: true
    },
    treinoThree: {
        type: Object,
        require: true
    },
}, {
    timestamps: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

TreinoSchema.index({ email: 1, treinoOne: 1, treinoTwo: 1, treinoThree: 1}, { unique: true });

module.exports = mongoose.model('treino', TreinoSchema);
const reviewsCtrl = {}

const review = require('../models/reviews.js');

reviewsCtrl.getReviews = async (req, res) => {
    const reviews = await review.find();
    res.json(reviews);
}

reviewsCtrl.getReview = async (req, res) => {
    const reviewF = await review.findById(req.params.id);
    res.send(reviewF);
}

reviewsCtrl.getGameReviews = async (req, res) => {
    const reviewF = await review.find({ game: req.params.game });
    res.send(reviewF);
}

reviewsCtrl.createReview = async (req, res) => {
    const newReview = new review(req.body);
    await newReview.save();
    res.send({ message: 'Review Posted' });
}

reviewsCtrl.updateReview = async (req, res) => {
    const reviewF = await review.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: 'Review Updated', reviewF });
}

reviewsCtrl.deleteReview = async (req, res) => {
    const reviewF = await review.findByIdAndDelete(req.params.id);
    res.send({ message: 'Review Deleted', reviewF });
}

module.exports = reviewsCtrl;

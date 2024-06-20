const express = require("express");
const router= express.Router();
const wrapAsync= require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {reviewSchema} = require("../schema.js");
const Review= require("../models/review.js");
const Listing = require("../models/listing.js");


// So as like validate listing we write this code for the server side validation similarly we need to write the server side 
//validation for the review schame

const validateReview = (req,res, next) => {
    let{error} = reviewSchema.validate(req.body);
    if(error) {
        let errMsg= error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
};

// We need to add our review in the form for that we need to create one route which trigger our request 
// for that we are creating a prost route 

router.post("/",validateReview,wrapAsync(async(req, res) =>{

    console.log("Listing ID:", req.params.id); // Log the ID
    
    //Finding our listing using id
    let listing= await Listing.findById(req.params.id);

      // If listing not found, throw an error
      if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }

    //New Review jo add hua hai usko body se nikal kar newReview naam ke varible me store kar rhe hai 
    let newReview = new Review(req.body.review);

    // And after doing this we need to add our review in our review array which is created inside the listing
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    console.log("new review is saved");

    // res.send("The page is saved");

    res.redirect(`/listings/${listing._id}`);
}));

// Now we want to make delete Route so that we can also delete some post 

    router.delete("/:reviewId", wrapAsync(async(req, res) => {
        let { id, reviewId } = req.params;
         //Now for removing the reviews form the listing we need to use this syntax
        await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
        await Review.findByIdAndDelete(reviewId);
        res.redirect(`/listings/${id}`);
    }));

    module.exports= router;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const vendorSchema = new mongoose.Schema({
    companyName:{
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    serviceType: {
      type: String,
      //required: true, // e.g. "Catering", "Decoration", "Photography"
    },
    description: {
      type: String,
    },
       contactNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
     portfolioImages: [
      {
        type: String, // store image URLs
      },
    ],
    ratings: {
      averageRating: { type: Number, default: 0 },
      totalReviews: { type: Number, default: 0 },
    },
    completedEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },{ timestamps: true }
);

vendorSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
        { _id: this._id,  },        
        process.env.JWT_SECRET,
        { expiresIn: '24h' },
      );
        return token;
};

vendorSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

vendorSchema.statics.hashPassword = async function(password) {    
    return await bcrypt.hash(password, 10);
};

const vendorModel = mongoose.model('Vendor', vendorSchema);
module.exports = vendorModel;
    
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const clientSchema = new mongoose.Schema({
  fullname: {
    firstname: {
        type: String,
        required: true,
        minlenghth: [3, 'first name must be at least 3 characters long']
    },
    lastname: {
        type: String,        
        minlenghth: [3, 'last name must be at least 3 characters long']
    }
  },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        select: false
    },    
    // 📞 Contact information
    contactNumber: {
      type: String,
      required: true,
    },
    // 💍 Event requirements posted by the client
    postedEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],

    // 🧾 Quotations received from vendors
    quotations: [
      {
        vendorId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Vendor",
        },
        eventId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Event",
        },
        quoteAmount: {
          type: Number,
        },
        message: {
          type: String,
        },
        status: {
          type: String,
          enum: ["pending", "accepted", "rejected"],
          default: "pending",
        },
      },
    ],
    // ⚙️ Account status
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

clientSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
        { _id: this._id,  },
        process.env.JWT_SECRET,
        { expiresIn: '24h' },
      );
        return token;
};
clientSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};
clientSchema.statics.hashPassword = async function(password) { 
    return await bcrypt.hash(password, 10);
}; 
const clientModel = mongoose.model('client', clientSchema);
module.exports = clientModel;


const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
     urlId: {
        type: String,
        required: true,
      },
      origUrl: {
        type: String,
        required: true,
     /*    unique: true, */
      },
      shortUrl: {
        type: String,
        required: true,
      },
      clicks: {
        type: Number,
        required: true,
        default: 0,
      },
      date: {
        type: String,
        default: Date.now,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
},{
    timestamps: true,
  }
);


// Validación de URL
urlSchema.path('origUrl').validate((val) => {
    urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i

    return urlRegex.test(val);
}, 'Invalid URL.');

const Url = mongoose.model("url", urlSchema);

module.exports = Url;
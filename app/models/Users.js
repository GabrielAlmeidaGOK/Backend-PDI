const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
      login: {
        type: String,
        unique: true,
        required: true,
      },
      name: {
        type: String,
      },
      company: {
        type: String,
      },
      avatar_url: {
        type: String,
      },
      location: {
        type: String,
      },
      public_repos: {
        type: Number,

      }
},
    {
        timestamps: true,
        collection: "UsersReg",
    }
)


module.exports = mongoose.model('UsersReg', UserSchema);

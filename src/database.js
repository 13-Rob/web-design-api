const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/web', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Connected'))
    .catch((err) => console.error(err));
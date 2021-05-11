const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('database Not connected')
    }
    console.log('Database connected');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('609a50b8ca6fb3c20fe939fa')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    // db.close();
})

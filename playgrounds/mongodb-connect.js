const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server')
    }
    console.log('Connected to MongoDB Server')

    // db.collection('Todos').insertOne({
    //     text: 'something',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    db.collection('users1').insertOne({
        name: 'Sunitha',
        age: 50,
        location: 'Bangalore'
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert data', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    })

    db.close();
});



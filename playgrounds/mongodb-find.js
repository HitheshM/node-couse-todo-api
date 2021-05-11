const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('database Not connected')
    }
    console.log('Database connected');
    // db.collection('Todos').find({ _id: new ObjectID('609a3eb3ca6fb3c20fe9360d') }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('unable to fetch the data')
    // })

    db.collection('Todos').find().count().then((count) => {
        console.log('Todos count :', count)
    }, (err) => {
        console.log('unable to fetch the data')
    })

    // db.close();
})

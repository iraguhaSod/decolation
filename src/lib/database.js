const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string
const uri = process.env.MONGO_DB_URL;

if (!uri) {
    console.log('there is no MONGO_DB_URi');
    
}

const client = new MongoClient(uri);

console.log('mongodb is connected successfull',client);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Queries for a movie that has a title value of 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
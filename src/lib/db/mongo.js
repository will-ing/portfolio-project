
import { MongoClient } from 'mongodb';

let db = null;

export async function getDB() {
  if (!db) {
    const DB_URL = import.meta.env.VITE_MONGO_URL;
    const DB_NAME = import.meta.env.VITE_MONGODB_DB;

    const client = await MongoClient
      .connect(DB_URL,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          tls: true,
        })
    db = client.db(DB_NAME);
  }
  return db;
}





/*


import { MongoClient } from 'mongodb'

// const { MongoClient } = mongo
const MONGO_URL = import.meta.env.VITE_MONGO_URL;

const url = encodeURI(MONGO_URL)
console.log("🚀 ~ file: mongo.js ~ line 8 ~ url", url);


export const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })

export async function connectDb() {
  try {
    await client.connect()

    await client.db("portfolio").command({ ping: 1 })
    console.log('🗄  Connected to DB is successful');

  } catch (e) {
    console.error(e);

    await client.close()
  }

}




// import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

// dotenv.config();
const { VITE_MONGODB_URI, VITE_MONGODB_DB } = import.meta.env;

if (!VITE_MONGODB_URI) {
  throw new Error('please defined MONGODB_URI in .env');
}
if (!VITE_MONGODB_DB) {
  throw new Error('please defined MONGODB_DB in .env');
}

let cached = global.mongo;
if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function connectDb() {

  if (cached.conn) {
    return cached.conn
  }

  if (!cached.conn) {
    cached.promise = MongoClient.connect(VITE_MONGODB_URI).then((client) => {
      return {
        client,
        db: client.db(VITE_MONGODB_DB)
      }
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}
*/

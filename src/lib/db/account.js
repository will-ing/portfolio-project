import { getDB } from "$lib/db/mongo";
import { ObjectId } from 'mongodb';

export async function createAccount(user) {
  const db = await getDB();
  const res = await db.collection('user').insertOne({ user });
  return res;
}

export async function getAccount(uid) {
  const db = await getDB();
  const res = await db.collection('user').findOne({ _id: ObjectId(uid) })
  return res;
}

// export async function deleteAccount(uid) {
//   const db = await getDB();
//   const res = await db.collection('user').deleteOne({ _id: ObjectId(uid) })
//   return res;
// }

// export async function updateAccountFavourited(uid) {
//   const db = await getDB();
//   const res = await db.collection('user')
//     .updateOne({ "_id": ObjectId(uid) },
//       { $inc: { "favourited": 1 } })
//   return res
// }
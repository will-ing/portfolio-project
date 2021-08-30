import { getAccount, createAccount, deleteAccount } from "$lib/db/account"
import cookie from 'cookie';
import { encrypt } from "$lib/encrypt";

export async function get(request) {
  const cookies = cookie.parse(request.headers.cookie || "")
  return {
    body: await getAccount(cookies.uid)
  }
}

export async function post(req) {
  const password = req.body.password
  const email = req.body.email
  const obj = await encrypt(email, password)
  const user = await createAccount(obj)


  return {
    body: user,
    headers: {
      'set-cookie': `uid=${user.insertedId}; Path=/; HttpOnly`
    }
  };
}

export async function del(request) {
  const cookies = cookie.parse(request.headers.cookie || "")
  return {
    body: await deleteAccount(cookies.uid),
    headers: {
      'set-cookie': `uid=deleted; Max-Age=0; Path=/; HttpOnly`
    }
  };
}


// import { connectDb, client } from '$lib/db/mongo';


// connectDb()
// client.db("portfolio").command({ ping: 1 })
// console.log('🗄  Connected to DB is successful');

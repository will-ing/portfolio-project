import { client } from './mongo'

export const user = client.db("portfolio").collection("user")
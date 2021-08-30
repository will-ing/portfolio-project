import bcrypt from "bcryptjs"


const { genSalt, hash } = bcrypt


export async function encrypt(email, password) {

  // generate salt
  const salt = await genSalt(10)

  // hash with salt
  const hashPassword = await hash(password, salt)

  // store the database
  const result = {
    email: {
      address: email,
      verified: false
    },
    password: hashPassword,
  }

  // return user from database
  return result

}

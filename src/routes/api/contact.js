import { google } from 'googleapis'
import { createTransport } from 'nodemailer'

// client_id = 1098087664604-096d5cpv667d0bahvtd3sauibe6ihkm6.apps.googleusercontent.com
// client_secret = Zm_EI_ff9D0VykmWmsllQs_B


export const post = async function (req) {
  const formBody = JSON.parse(req.body)
  const name = formBody.name
  const email = formBody.email
  const message = formBody.message
  const OAuth2 = google.auth.OAuth2;
  const client_id = import.meta.env.VITE_CLIENT_ID;
  const client_secret = import.meta.env.VITE_SECRET;
  let results;

  const myOAuth2Client = new OAuth2(
    client_id,
    client_secret,
    "https://developers.google.com/oauthplayground"
  )



  myOAuth2Client.setCredentials({
    refresh_token: import.meta.env.VITE_REFRESH_TOKEN
  });

  // console.log('Refresh Token: ', myOAuth2Client.credentials.refresh_token)

  const myAccessToken = await myOAuth2Client.getAccessToken()

  try {


    let transport = createTransport({
      // service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: "willkoger@gmail.com", //your gmail account you used to set the project up in google cloud console"
        clientId: client_id,
        clientSecret: client_secret,
        refreshToken: myOAuth2Client.credentials.refresh_token,
        accessToken: myAccessToken.res.data.accessToken //access token variable we defined earlier
      }
    });

    const finalMessage = {
      // from: email, // Sender address
      sender: {
        name: name,
        address: email
      },
      replyTo: email,
      to: 'willkoger@gmail.com',         // List of recipients
      subject: 'New Client Inquiry: ' + name, // Subject line
      text: `Email: ${email} Message: ${message}`,
      // html: `<h3>From Email: ${email}</h3><br /> <p>${message}</p>`,
      html: `<!doctype html>
      <html ⚡4email>
        <head>
          <meta charset="utf-8">
          <style amp4email-boilerplate>body{visibility:hidden}</style>
          <script async src="https://cdn.ampproject.org/v0.js"></script>
          <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
        </head>
        <body>
          <h3>From Email: ${email}</h3>
          <img src="https://media0.giphy.com/media/3osxYc2axjCJNsCXyE/200w.webp?cid=ecf05e47dxczezz0zswlg4lpae9fsfq3854fblbowfnva86z&rid=200w.webp&ct=g" alt="data">
          <p>${message}</p>
          <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
        </body>
      </html>`
    };

    transport.sendMail(finalMessage, function (err, info) {
      if (err) {
        // Error.log(err)
        results = err
      } else {
        // console.log(info)
        results = info
      }

    });
    results = "Message Sent"
  } catch (error) {
    results = error
  }

  return {
    body: {
      result: results,
    }
  }
}
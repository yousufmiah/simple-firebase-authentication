/** step to use firebase

1. create a project on console.firebase.google.com
2. install firebase......... npm install firebase in projects
3. register web app in firebase
4. copy firebase init with config from firebase project settings in to a file firebase.init.js
5. export default app
6. import getAuth from firebase/Auth and create const auth = getAuth(app) in app.js
7. import app firebase init.js into your app.js
8. create google provider in app.js under app function
9. turn on google authentication (firebase> authentication> enable google sign in)
10. use signWithPopup and pass auth and provider
11. handle .then(if successfull) and catch error (if error)

*/

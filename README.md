# Ada Firebase Demo App
The base app in this demo has a form for adding things and a form for displaying things. We'll deploy this app to Firebase, then hook up Firestore in order to get it to load/save data.

## Set up Hosting
First, make sure you build the app so it's ready for deployment:

```
npm run build
```

The most important thing this does is guarantee you have a `build` folder.

Basically, you go to Firebase Hosting in your project and follow the steps it walks you through! Replace `<YOUR_PROJECT_NAME_HERE>` in this URL with your project name: `https://console.firebase.google.com/u/0/project/<YOUR_PROJECT_NAME_HERE>/hosting/sites`

```
npm install -g firebase-tools
```

```
firebase login
firebase init
```

Just set up hosting (you can re-run init later). Make these choices:
- Pick the `build` folder as the public folder.
- Say `y` to configure as a single-page app.
- Say `n` to automatic github builds/deploys.
- Say `n` to overwriting `index.html`.

Now you got two config files: `.firebaserc` and `firebase.json`. You're ready to deploy!

```
firebase deploy
```

## Set up Firestore
Follow the set up steps for firestore in your firebase project! Replace `<YOUR_PROJECT_NAME_HERE>` in this URL with your own project name: `https://console.firebase.google.com/u/0/project/<YOUR_PROJECT_NAME_HERE>/firestore`

When setting up on the UI, do these things:
- Start in test mode, just for the demo. This lets us read and write without auth.
- Pick `us-west1` for your region (that's an Oregon data center), since this is a demo.

Once you have Firestore set up, you have to use the firebase SDK from
the app. The easiest way to load data and have it kept up-to-date is to pick a React hooks library that talks
to firebase for you. Let's use `react-firebase-hooks`.

```
npm install --save react-firebase-hooks firebase
```

We'll need to initialize our firebase app. (See: https://firebase.google.com/docs/firestore/quickstart#initialize)
- Make `firebase.js` and copy the initialization in.
- Add the firebase config from the web into it.
  - You need to go to your [Project Settings](https://console.firebase.google.com/u/0/project/_/settings/general), scroll down
    to "Your Apps" and click the `</>` button to add a web app.
  - Now you can copy your config.
- Export the `app` object by default

Now we can create the "add thing" logic! We'll follow the [Add Data](https://firebase.google.com/docs/firestore/quickstart#add_data) example.

Now let's load the data. Follow the [full example](https://github.com/CSFrequency/react-firebase-hooks/tree/09bf06b28c82b4c3c1beabb1b32a8007232ed045/firestore#full-example) for `useCollection`.

## Set up auth and make per-user stores
Anyone can go to this URL and create a bunch of things. Try it for yourself! This is because we set up the security rules to allow anyone to read/write from our application. To restrict access, we need to set up Firebase auth and also set up rules about who can and can't access the store.

The simplest rule to write is: allow write only for users who have signed in.

First, you have to enable authentication for your account. Go to the [Authentication Console](https://console.firebase.google.com/u/0/project/ada-demo-project-57538/authentication/providers) and set up something simple like Google auth.

Then, you update the security rules in firebase to ensure that only signed-in users can write. For example, you might use:

```
    match /{document=**} {
      allow read;
      allow write: if request.auth != null;
    }
```

Then, you enable some kind of sign-in:
- Social login [react-firebase-hooks example](https://github.com/CSFrequency/react-firebase-hooks/blob/09bf06b28c82b4c3c1beabb1b32a8007232ed045/auth/README.md#social-login-example)
- Use [useLoginWithGoogle](https://github.com/CSFrequency/react-firebase-hooks/blob/09bf06b28c82b4c3c1beabb1b32a8007232ed045/auth/README.md#usesigninwithgoogle)


# Ada Firebase Demo App
The base app in this demo has a form for adding things and a form for displaying things. We'll deploy this app to Firebase, then hook up Firestore in order to get it to load/save data.

## Set up Hosting
First, make sure you build the app so it's ready for deployment:

```
npm run build
```

The most important thing this does is guarantee you have a `build` folder.

Basically, you go to [Firebase Hosting](https://console.firebase.google.com/u/0/project/ada-demo-project/hosting/sites) in your project and follow the steps it walks you through!

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

## Set up auth and make per-user stores
This might be out of scope for the demo.

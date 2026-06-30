# Firebase Voting Setup

The prediction cards already support Firebase Firestore. Until this config is filled in, the site uses local preview voting.

## 1. Create the Firebase project

1. Go to https://console.firebase.google.com/
2. Create a project.
3. Add a Web app.
4. Copy the Firebase config object.
5. Paste the values into `firebase-config.js`.

## 2. Enable Firestore

1. In Firebase Console, open Firestore Database.
2. Create a database.
3. Start in production mode.
4. Use a nearby region.

## 3. Starter Firestore rules

These rules allow public voting for this static website. They validate the document shape, but anyone can still vote from a browser. For a school/friend project this is usually fine; for a large public site, add Firebase App Check later.

```txt
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /raceVotes/{raceKey} {
      allow read: if true;
      allow write: if request.resource.data.keys().hasOnly(['season', 'raceKey', 'updatedAt'])
        && request.resource.data.season is int
        && request.resource.data.raceKey is string;

      match /categories/{categoryId} {
        allow read: if true;
        allow write: if request.resource.data.keys().hasOnly(['totals', 'updatedAt'])
          && request.resource.data.totals is map;
      }

      match /users/{userId}/categories/{categoryId} {
        allow read, write: if request.resource.data.keys().hasOnly(['driverId', 'updatedAt'])
          && request.resource.data.driverId is string;
      }
    }
  }
}
```

## 4. Publish

After `firebase-config.js` is filled in:

```bash
git add firebase-config.js script.js index.html FIREBASE_SETUP.md
git commit -m "Configure Firebase voting"
git push origin main
```

Then refresh the GitHub Pages site. The prediction header should say `Shared live voting`.

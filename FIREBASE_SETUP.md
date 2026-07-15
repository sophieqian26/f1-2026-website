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

## 3. Enable email login

1. In Firebase Console, open **Authentication**.
2. Click **Get started** if it is not enabled yet.
3. Open **Sign-in method**.
4. Enable **Email/Password**.
5. Save.

The site uses email/password accounts for F1 Bucks wallets. New users start with `50` F1 Bucks.

## 4. Firestore rules

Use these rules in **Firestore Database > Rules**, not Realtime Database rules. These allow public voting for the free prediction cards and authenticated wallet access for F1 Bucks. For a larger public site, move F1 Bucks deductions into Cloud Functions and add Firebase App Check later.

If you just want the live vote board working quickly, paste this simple version:

```txt
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /raceVotes/{document=**} {
      allow read, write: if true;
    }

    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

Use this stricter version after the simple version is confirmed working:

```txt
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow create, update: if request.auth != null
        && request.auth.uid == userId
        && request.resource.data.keys().hasOnly(['email', 'displayName', 'f1BucksBalance', 'profileDriverId', 'favoriteTeamId', 'favoriteDriverId', 'createdAt', 'updatedAt'])
        && request.resource.data.email is string
        && request.resource.data.displayName is string
        && request.resource.data.f1BucksBalance is int
        && request.resource.data.f1BucksBalance >= 0
        && (!('profileDriverId' in request.resource.data) || request.resource.data.profileDriverId is string)
        && (!('favoriteTeamId' in request.resource.data) || request.resource.data.favoriteTeamId is string)
        && (!('favoriteDriverId' in request.resource.data) || request.resource.data.favoriteDriverId is string);
    }

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
        allow read: if true;
        allow write: if request.resource.data.keys().hasOnly(['driverId', 'updatedAt'])
          && request.resource.data.driverId is string;
      }

      match /f1BuckStakes/{predictionId} {
        allow read: if true;
        allow write: if request.auth != null
          && request.auth.uid == request.resource.data.userId
          && request.resource.data.keys().hasOnly(['userId', 'categoryId', 'driverId', 'voterName', 'points', 'updatedAt'])
          && request.resource.data.userId is string
          && request.resource.data.categoryId is string
          && request.resource.data.driverId is string
          && request.resource.data.voterName is string
          && request.resource.data.points is int;
      }
    }
  }
}
```

## 5. Publish

After `firebase-config.js` is filled in:

```bash
git add firebase-config.js script.js index.html styles.css FIREBASE_SETUP.md
git commit -m "Configure Firebase voting"
git push origin main
```

Then refresh the GitHub Pages site. The account button should let you sign in and show your F1 Bucks wallet.

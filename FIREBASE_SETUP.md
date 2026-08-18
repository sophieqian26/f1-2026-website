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

For the creator-only dashboard:

1. Open Firebase Console > Authentication > Users.
2. Click your creator account.
3. Copy your **User UID**.
4. Paste that UID into `CREATOR_UID` in `script.js`.
5. Paste the same UID into the `isCreator()` rule below.

If you just want the live vote board working quickly, paste this simple version:

```txt


```

## 5. Publish

After `firebase-config.js` is filled in:

```bash
git add firebase-config.js script.js index.html styles.css FIREBASE_SETUP.md
git commit -m "Configure Firebase voting"
git push origin main
```

Then refresh the GitHub Pages site. The account button should let you sign in and show your F1 Bucks wallet.

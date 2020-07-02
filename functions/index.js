const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();



// auth trigger (new user signup)
exports.newUserSignUp = functions.auth.user().onCreate(user => {
  // for background triggers you must return a value/promise
  return admin.firestore().collection('ules').doc(user.uid).set({

    email: user.email,

    mentMail: '',
    mentName: '',
    mentNum: '',
    ment2Mail: '',
    ment2Name: '',
    mentNum2: '',
  

  });
});

// auth trigger (user deleted)
exports.userDeleted = functions.auth.user().onDelete(user => {
  const doc = admin.firestore().collection('ules').doc(user.uid);
  return doc.delete();
});
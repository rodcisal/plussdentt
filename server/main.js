import { Meteor } from 'meteor/meteor';

import '../imports/api/questions.js';

Meteor.startup(() => {
  // code to run on server at startup
});

// Settings
//
Accounts.config({
  forbidClientAccountCreation: true
});


Accounts.onCreateUser((options, user) => {
  const newInfo = user.emails[0];
  newInfo.role = "promotor";
  const newEmails = [ newInfo ];
  user.emails = newEmails;
  return user;
});

Meteor.publish('users', function usersPublication() {
  return Meteor.users.find();
});



Meteor.methods({
  'createPromotor'(options) {
    Accounts.createUser({
      email: options.email,
      password: options.password
    });
  }
});

import { Meteor } from 'meteor/meteor';

import '../imports/api/quiz.js';

Meteor.startup(() => {
  // code to run on server at startup
});




// Settings
//
Accounts.config({
  forbidClientAccountCreation: false
});

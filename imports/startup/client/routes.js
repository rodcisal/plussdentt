import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Tracker } from 'meteor/tracker';

BlazeLayout.setRoot('body');

FlowRouter.route('/', {
  name: 'root',
  action() {
    Tracker.autorun(() => {
      if ( Meteor.userId() ) {
        BlazeLayout.render('layout1', { main: 'questions' });
      } else {
        BlazeLayout.render('notAuthenticated');
      }
    });
  }
});

FlowRouter.route('/quiz', {
  name: 'quiz',
  action() {
    Tracker.autorun(() => {
      if ( Meteor.userId() ) {
        BlazeLayout.render('layout1', { main: 'questions' });
      } else {
        BlazeLayout.render('notAuthenticated');
      }
    });
  }
});

FlowRouter.route('/thanks', {
  name: 'thanks',
  action() {
    Tracker.autorun(() => {
      if ( Meteor.userId() ) {
        BlazeLayout.render('layout1', { main: 'thanks' });
      } else {
        BlazeLayout.render('notAuthenticated');
      }
    });
  }
});

FlowRouter.route('/dashboard', {
  name: 'dashboard',
  action() {
    Tracker.autorun(() => {
      const isAdmin = Meteor.user() && Meteor.user().emails[0].role === 'admin';
      if ( isAdmin ) {
        BlazeLayout.render('layout1', { main: 'dashboard' });
      } else {
        BlazeLayout.render('notAdmin');
      }
    });
  }
});

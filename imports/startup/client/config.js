import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

Accounts.onLogin(() => {
  let path = FlowRouter.current().path;
  if ( path == "/" ) {
    FlowRouter.go('/quiz');
  }
});

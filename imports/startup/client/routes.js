import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


FlowRouter.route('/', {
  name: 'root'
});


FlowRouter.route('/quiz', {
  name: 'quiz',
  action() {
    BlazeLayout.render('questions');
  }
});

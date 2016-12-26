import { Template  } from 'meteor/templating';
import { QuizData  } from '../data/quizData.js';
import { Questions } from '../api/questions.js';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './body.html';


Template.questions.onRendered(() => {
});

Template.NavigationBar.helpers({
  userRole() {
    if ( Meteor.userId() ) {
      return Meteor.user() && Meteor.user().emails[0].role ? Meteor.user().emails[0].role.toUpperCase() : false;
    }
  },
  isAdmin() {
    if ( Meteor.userId() && Meteor.user() ) {
      return Meteor.user().emails[0].role === 'admin'
    }
  }
});


Template.questions.helpers({
  questions() {
    return QuizData;
  },
  isMultiple() {
    return this.type === 'multiple';
  }
});


Template.questions.events({
  'click .next--question'(event) {
    event.preventDefault();
    const elem = $(event.currentTarget).parents('.question--unit').next();
    if ( elem.length === 0 ) {

      // LAST ELEMENT IN LIST
      FlowRouter.go('/thanks');

    } else {
      topPosition = elem.offset().top;
      $('body').scrollTop(topPosition);
      const questionObject = this;

      const actualResponse = $(event.currentTarget).parents('.question--unit').find('input').val();
      questionObject.response = actualResponse;


      if ( true ) {
        Questions.update(
          { _id: Session.get('questionsId') },
          { $push: { responses: questionObject }}
        )
      }
    }
  },
  'click #start--quiz'(event) {
    event.preventDefault();

    const nombre = $('#quiz--nombre').val();
    const telefono = $('#quiz--telefono').val();
    const rut = $('#quiz--rut').val();
    const email = $('#quiz--email').val();


    if (nombre.length > 0 && telefono.length > 0 && rut.length > 0 && email.length > 0) {
      Session.set('emailEntrevistado', email);

      Questions.insert({
        personal_information: {
          nombre: nombre,
          telefono: telefono,
          rut: rut,
          email: email
        },
        responses: [],
        promotorId: Meteor.userId(),
        promotorEmail: Meteor.user().emails[0].address,
        createdAt: Date.now(),
        giftCard: Math.floor( Math.random() * 10000 )
      });

      const questionsObject = Questions.findOne({ "personal_information.email": email });
      Session.set('questionsId', questionsObject._id);
      $('body').scrollTop($('.question--unit').first().offset().top)
    } else {
      $('#personal--info').append('<h4> Faltan Datos </h4>')
    }
  }

});


Template.dashboard.helpers({
  promotoras() {
    return Meteor.users.find();
  },
  getQuizCount() {
    const email = this.address;
    const count = Questions.find({
      "promotorEmail": email
    }).count();
    return count;
  },
  questions() {
    return Questions.find();
  }
});

Template.dashboard.onCreated(() => {
  Meteor.subscribe('users');
});


Template.thanks.helpers({
  emailEntrevistado() {
    return Session.get('emailEntrevistado');
  }
})


Template.addPromotor.events({
  'click #create--promotor'(event) {
    const email = $('#promotor--email').val();
    const password = $('#promotor--password').val();

    if ( email.length > 0 && password.length > 0 ) {
      console.log(email, password);
      const options = {
        email: email,
        password: password
      };
      Meteor.call('createPromotor', options, () => {
        $('#promotor--email').val('');
        $('#promotor--password').val('');
      });
    } else {
      alert('Missing fields');
    }
  }
})

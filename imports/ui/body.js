import { Template  } from 'meteor/templating';
import { QuizData  } from '../data/quizData.js';
// import { Questions } from '../api/questions.js';

import './body.html';


Template.questions.onRendered(() => {
  console.log( QuizData );
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
    let elem = $(event.currentTarget).parents('.question--unit').next();
    console.log(elem);
    topPosition = elem.offset().top;
    $('body').scrollTop(topPosition);
  },
  'click #start--quiz'(event) {
    event.preventDefault();
    const nombre = $('#quiz--nombre').val();
    const telefono = $('#quiz--telefono').val();
    const rut = $('#quiz--rut').val();
    const email = $('#quiz--email').val();

    console.log(nombre, telefono, rut, email);

    if (nombre !== undefined && telefono !== undefined && rut !== undefined && email !== undefined) {
      Quiz.insert({
        personal_information: {
          nombre: nombre,
          telefono: telefono,
          rut: rut,
          email: email
        }
      });
    }
  }

});

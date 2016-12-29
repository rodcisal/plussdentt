import { Template  } from 'meteor/templating';
import { QuizData  } from '../data/quizData.js';
import { Questions } from '../api/questions.js';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Random } from 'meteor/random';

import './body.html';


Template.questions.onRendered(() => {
  Session.set('totalScore', {
    "caries": 0,
    "periodoncia": 0,
    "ortodoncia": 0,
    "bruxismo": 0,
    "blanqueamiento": 0,
    "implantes-protesis": 0
  });
  console.log(Session.get('totalScore'));

  $('.checkbox--input').change((event) => {
    console.log($(event.currentTarget).val());
    console.log($(event.currentTarget).siblings('.checkbox--sibling').data('factors'));
    $(event.currentTarget).parents('.checkbox--total').data('factors', {})
  });
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
  },
  JSONfactors() {
    return JSON.stringify(this.factors);
  }
});

whatRisk = function(score, specialty){
  const noMediumRisk = ["ortodoncia", "bruxismo", "blanqueamiento", "implantes-protesis"];
  if ( noMediumRisk.indexOf(specialty) !== -1 ) {
    if ( score < 2 ) { return "Riesgo Bajo"}
    if ( score >= 2 && score < 2.2 ) { return "Riesgo Medio"}
    if ( score >= 2.2 ) { return "Riesgo Alto"}
  } else {
    if ( score < 2.2 ) { return "Riesgo Bajo"}
    if ( score >= 2.2 ) { return "Riesgo Alto"}
  }
}

returnProfile ={
  "caries": {
    "riesgo-alto": {
      "perfil": "¡OJO! Tienes un alto riesgo de presentar caries. Estas son pequeñas lesiones que van quitándole los minerales al diente y que si no son diagnosticadas y tratadas a tiempo pueden generar dolor al acercarse mucho al nervio o incluso producir una infección importante. ",
      "tratamiento": "Si en tu diagnóstico aparecen caries puede significar la necesidad de realizar tapaduras para que las lesiones no sigan avanzando, o en una etapa más avanzada realizar tratamientos de conducto para poder mantener tus dientes en la boca. En los casos más severos, la única solución es extraer el diente.",
      "cuidados": "Manten una dieta equilibrada baja en azúcar y bebidas gaseosas. Cepilla tus dientes después de cada comida, sobretodo en la noche y usa seda dental. Controlate con tu dentista todos los años y realiza al menos una limpieza profesional anual."
    },
    "riesgo-medio": {
      "perfil": "Tienes riesgo moderado de presentar caries. Estas son pequeñas lesiones que van quitándole los minerales al diente y que si no son diagnosticadas y tratadas a tiempo pueden generar dolor al acercarse mucho al nervio o incluso producir una infección importante. ",
      "tratamiento": "Si en tu diagnóstico aparecen caries puede significar la necesidad de realizar tapaduras para que las lesiones no sigan avanzando, o en una etapa más avanzada realizar tratamientos de conducto para poder mantener tus dientes en la boca. En los casos más severos, la única solución es extraer el diente.",
      "cuidados": "Manten una dieta equilibrada baja en azúcar y bebidas gaseosas. Cepilla tus dientes después de cada comida, sobretodo en la noche y usa seda dental. Controlate con tu dentista todos los años y realiza al menos una limpieza profesional anual."
    },
    "riesgo-bajo": {
      "perfil": "Tienes bajo riesgo de presentar caries. ¡Felicidades!  Las caries son pequeñas \\n lesiones que van quitándole los minerales al diente y que si no son diagnosticadas y tratadas a tiempo pueden generar dolor al acercarse mucho al nervio o incluso producir una infección importante.  ",
      "tratamiento": "Si en tu diangóstico aparecen caries puede significar la necesidad de realizar tapaduras para que las lesiones no sigan avanzando, o en una etapa más avanzada realizar tratamientos de conducto para poder mantener tus dientes en la boca. En los casos más severos, la única solución es extraer el diente.",
      "cuidados": "Debes mantener cuidados básicos como una dieta equilibrada baja en azúcar y bebidas gaseosas, cepillar tus dientes después de cada comida, sobretodo en la noche y usar seda dental. Controlate con tu dentista todos los años y realiza al menos una limpieza profesional anual, para mantener tu riesgo en niveles bajos."
    }
  },
  "periodoncia": {
    "riesgo-alto": {
      "perfil": "¡OJO! Tienes un alto riesgo de presentar enfermedad en las encías. Cuando se acumula sarro en los dientes y no lo eliminamos sus bacterias comienzan a atacar a la encía generando gingivitis y posteriormente al hueso generando periodontitis, que son los tejidos que afirman los dientes en la boca y puede ser tan severo que incluso se sueltan y caen.",
      "tratamiento": "La limpieza profesional es el primer paso para sanar los tejidos que afirman el diente, y mantenerla al menos una vez al año te ayudará a controlar la gingivitis. Si en tu diagnóstico presentas periodontitis es muy importante realizar en un principio una limpieza profunda que elimine el sarro que daña el hueso y que podría llevar a la pérdida de tus dientes y continuar con los controles mencionados en un comienzo.",
      "cuidados": "Cepilla tus dientes después de cada comida. Usa elementos como la seda dental o los cepillos interproximales para limpiar la zona entre los dientes. Manten tu control anual con el dentista y realiza una limpieza profesional al menos una vez al año para eliminar el sarro y que tu encía y hueso se mantenga sanos."
    },
    "riesgo-medio": {
      "perfil": "Tienes un riesgo moderado de presentar enfermedad en las encías. Cuando se acumula sarro en los dientes y no lo eliminamos sus bacterias comienzan a atacar a la encía generando gingivitis y posteriormente al hueso generando periodontitis, que son los tejidos que afirman los dientes en la boca y puede ser tan severo que incluso se sueltan y caen.",
      "tratamiento": "La limpieza profesional es el primer paso para sanar los tejidos que afirman el diente, y mantenerla al menos una vez al año te ayudará a controlar la gingivitis. Si en tu diagnóstico presentas periodontitis es muy importante realizar en un principio una limpieza profunda que elimine el sarro que daña el hueso y que podría llevar a la pérdida de tus dientes y continuar con los controles mencionados en un comienzo.",
      "cuidados": "Cepilla tus dientes después de cada comida. Usa elementos como la seda dental o los cepillos interproximales para limpiar la zona entre los dientes. Manten tu control anual con el dentista y realiza una limpieza profesional al menos una vez al año para eliminar el sarro y que tu encía y hueso se mantenga sanos."
    },
    "riesgo-bajo": {
      "perfil": "¡Felicidades! Tienes un bajo riesgo de presentar gingivitis o periodontits, que son las enfermedades que afectan a la encía y el hueso y pueden incluso llevarte a perder los dientes.",
      "tratamiento": "La limpieza profesional es el primer paso para sanar los tejidos que afirman el diente, y mantenerla al menos una vez al año te ayudará a controlar la gingivitis. Si en tu diagnóstico presentas periodontitis es muy importante realizar en un principio una limpieza profunda que elimine el sarro que daña el hueso y que podría llevar a la pérdida de tus dientes y continuar con los controles mencionados en un comienzo.",
      "cuidados": "Cepilla tus dientes después de cada comida. Usa elementos como la seda dental o los cepillos interproximales para limpiar la zona entre los dientes. Manten tu control anual con el dentista y realiza una limpieza profesional al menos una vez al año para eliminar el sarro y que tu encía y hueso se mantenga sanos."
    }
  },
  "ortodoncia": {
    "riesgo-bajo": {
      "perfil": "Probablemente no requieres de tratamiento con frenillos, que se utilizan para corregir la mordida y enderezar dientes que se encuentren en una mala posición.",
      "tratamiento": "Mantén control con tu dentista y preguntale si realmente esta todo en su posición correcta o requieres tratamiento con el ortodoncista.",
      "cuidados": "Preocupate de no perder dientes por caries o enfermedad de las encías, porque sino los demás dientes se empiezan a mover. Por lo tanto manten una buena higiene en casa y tu control anual con el dentista."
    },
    "riesgo-alto": {
      "perfil": "Probablemente no requieres de tratamiento con frenillos, que se utilizan para corregir la mordida y enderezar dientes que se encuentren en una mala posición.",
      "tratamiento": "Mantén control con tu dentista y preguntale si realmente esta todo en su posición correcta o requieres tratamiento con el ortodoncista.",
      "cuidados": "Preocupate de no perder dientes por caries o enfermedad de las encías, porque sino los demás dientes se empiezan a mover. Por lo tanto manten una buena higiene en casa y tu control anual con el dentista."
    }
  },
  "bruxismo": {
    "riesgo-alto": {
      "perfil": "¡OJO! Tienes alto riesgo de presentar bruxismo. Esta es una condición en la cual el apriete o rechinar de los dientes, generalmente nocturno, genera múltiples daños como desgaste severo de los dientes, se recogen las encías, dolor muscular de cuello, cara o cabeza al despertar y/o sensibilidad o dolor en la zona de la articulación.",
      "tratamiento": "El plano de relajación que se realiza en la consulta evita todos los efectos mencionados anteriormente. Es igual de importante buscar la causa de la enfermedad, que generalmente se encuentra asociado a estrés, para así bajar el nivel de apriete.",
      "cuidados": "Realiza actividades que disminuyan tu nivel de estrés como hacer deporte, salir con amigos, o cualquier actividad que a ti te acomode para liberar los altos niveles de tensión. Si es necesario incluso puedes pedir ayuda profesional como psicológo o psiquiatra. Manten tu citas con el dentista para controlar los efectos de la enfermedad. "
    },
    "riesgo-bajo": {
      "perfil": "¡Que bien! Tienes bajo riesgo de presentar bruxismo. Esta es una condición en la cual el apriete o rechinar de los dientes, generalmente nocturno, genera múltiples daños como desgaste severo de los dientes, se recogen las encías, dolor muscular de cuello, cara o cabeza al despertar y/o sensibilidad o dolor en la zona de la articulación.",
      "tratamiento": "De todas formas es importante saber que el tratamiento al Bruxismo es por medio de un plano de relajación rígido que se realiza en la consulta (el de la farmacia no sirve porque es blando y contraproducente)",
      "cuidados": "En el caso que comiences a sentir síntomas como desgaste de las piezas dentarias, recogimiento de encías, dolor muscular en el cuello, jaquecas reiterativas y despertar con sensación de dolor en la articulación del rostro, procure realizar actividades que disminuyan tu nivel de estrés como hacer deporte, salir con amigos, o cualquier actividad que a ti te acomode para liberar los altos niveles de tensión. Si es necesario incluso puedes pedir ayuda profesional como psicológo o psiquiatra. Mantén tu citas con el dentista para controlar los efectos de la enfermedad. "
    }
  },
  "blanqueamiento": {
    "riesgo-alto": {
      "perfil": "Al parecer presentas algunos factores que favorecen la tinción de tus dientes, lo que indica que eres un muy buen candidato para realizar un blanqueamiento. Estos factores pueden ser muy diversos: ser fumador, consumir bebidas o alimentos con colorantes fuertes como el té y/o café en grandes cantidades, etc.",
      "tratamiento": "El blanqueamiento es un tratamiento estético que se le realiza a los dientes para cambiar el tono dejándolos más blancos. Para realizar este tratamiento es necesario tener la boca sana y no presentar sensibilidad, ya que se puede exacerbar.",
      "cuidados": "Para que tu blanqueamiento se mantenga en el tiempo es necesario que evites todos los factores que mencionamos anteriormente que son capaces de teñirlos. Además de mantener tu control con el dentista y la limpieza profesional al día."
    },
    "riesgo-bajo": {
      "perfil": "¡Felicidades! Hay pocos factores que favorezcan la tinción de tus dientes. Todas aquellas bebidas o alimentos con colorantes, té y/o café en grandes cantidades, o ser fumadores son condiciones que pueden ir alterando el color blanco de tus dientes.",
      "tratamiento": "Si puedes evitar los factores antes mencionados, no deberías requerir un blanqueamiento, a no ser de que por estética tu prefieras hacerlo y así cambiar el tono de los dientes dejándolos más blancos. Es muy importante saber que debes tener tu boca sana y no presentar sensibilidad para poder realizarlo.",
      "cuidados": "Mantén tu control odontológico y la limipieza profesional al día, además de evitar todos los factores mencionados anteriormente que pueden producir tinciones en tus dientes."
    }
  },
  "implantes-protesis": {
    "riesgo-alto": {
      "perfil": "Al perder piezas dentarias, es muy relevante recuperarlas lo antes posible, ya que si no, se empieza a modificar toda la mordida y si aún quedan dientes en tu boca los hace más propensos a enfermedades. El propóstio de rehabilitar en base a prótesis removible o implantes es recuperar la estética y la función.",
      "tratamiento": "Dependiendo del tipo y número de dientes que hayas pérdido, el especialista te indicará si es mejor realizar uno o varios implantes o prótesis removible y así lograrás proteger los dientes que aún quedan, y si no quedan, recuperaras la función y estética de todas maneras.",
      "cuidados": "Cada diente de nuestra boca cuenta, es por esto que es muy importante que mantengas tu control con el odontológo y la limpieza profesional, al menos una vez al año, y así lograrás evitar las enfermedades que provocan la pérdida de piezas dentarias, como las caries y la enfermedad de las encías."
    },
    "riesgo-bajo": {
      "perfil": "¿Qué mejor que tener todos tus dientes en la boca? Es muy importante evitar las enfermedades de la boca que a la larga pueden hacer que pierdas los dientes y requieras elementos externos como prótesis removibles o implantes para poder recuperar la sonrisa y la función. ¡Manténte así!",
      "tratamiento": "No hay tratamiento asociado para recuperar dientes si no los has pérdido, pero es sumamente importante mantenerlos sanos en tu boca, para que así nunca tengas que reemplazarlos. ",
      "cuidados": "Cada diente de nuestra boca cuenta, es por esto que es muy importante que mantengas tu control con el odontológo y la limpieza profesional, al menos una vez al año, y así lograrás evitar las enfermedades que provocan la pérdida de piezas dentarias, como las caries y la enfermedad de las encías."
    }
  }
}


Template.questions.events({
  'click .next--question'(event) {
    event.preventDefault();
    const elem = $(event.currentTarget).parents('.question--unit').next();
    if ( elem.length === 0 ) {
        let totalScore = Session.get('totalScore');

        for ( prop in totalScore ) {
          console.log(`TOTAL SCORE ${totalScore[prop]}`, prop);
          totalScore[prop] = whatRisk(totalScore[prop], prop);
        }
        Session.set('results', totalScore);


        let results = Session.get('results', totalScore);
        let arrayResults = [];

        for ( specialty in results ) {
          const risk = results[specialty].toLowerCase().split(' ').join('-');
          console.log(risk, specialty);
          if ( returnProfile[specialty][risk] !== undefined ) {
            arrayResults.push({
              specialty: specialty,
              risk: results[specialty],
              profile: returnProfile[specialty][risk]["perfil"],
              treatment: returnProfile[specialty][risk]["tratamiento"],
              care: returnProfile[specialty][risk]["cuidados"]
            });
          }
        }

        Session.set('results', arrayResults);
        console.log(Session.set('results', arrayResults));

        if ( true ) {
          Questions.update(
            { _id: Session.get('questionsId') },
            { $set: { responses: arrayResults }}
          )
        }

      // LAST ELEMENT IN LIST
      FlowRouter.go('/thanks');

    } else {
      topPosition = elem.offset().top;
      $('body').scrollTop(topPosition);
      const questionObject = this;

      const actualResponse = $(event.currentTarget).parents('.question--unit').find('input').val();
      questionObject.response = actualResponse;

      if ( questionObject.type === 'checkbox' ) {

        // console.log(`total is ${total}`);
        let totalScore = Session.get('totalScore');
        if ( questionObject.factors !== undefined ) {
          let total = 0;
          $(event.currentTarget)
          .parents('.question--unit')
          .find('input:checked')
          .each((key, elem) => {
              total += +elem.value
            });
          total = total > questionObject.max ? questionObject.max : total;
          for ( factor in questionObject.factors ) {
            totalScore[factor] = totalScore[factor] + (total * questionObject.factors[factor]);
          }
        } else {
          let objectTotal = $(event.currentTarget)
          .parents('.question--unit')
          .find('input:checked')
          .each((key, elem) => {
              const val = $(elem).val();
              const factors = $(elem).siblings('.checkbox--sibling').data('factors');
              for ( factor in factors ) {
                totalScore[factor] = totalScore[factor] + (val * factors[factor]);
              }
            });
        }

        Session.set('totalScore', totalScore);
      }

      if ( questionObject.type === 'multiple' ) {
        const response = +$(event.currentTarget).parents('.question--unit').find('input:checked').val();

        let totalScore = Session.get('totalScore');
        for ( factor in questionObject.factors ) {
          totalScore[factor] = totalScore[factor] + (response * questionObject.factors[factor]);
        }
        Session.set('totalScore', totalScore);
      }

      console.log(Session.get('totalScore'));




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
        giftCard: Random.id()
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
  },
  results() {
    return Session.get('results');
  }
});

Template.thanks.onRendered(() => {
  $('body').scrollTop(0);
});


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

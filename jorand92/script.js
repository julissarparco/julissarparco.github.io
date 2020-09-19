var content = 'Este es un pequeño mensaje que queria compartir contigo por el día de tu cumpleaños. Hoy te haces un año más viejito, pero sabes... me encanta la persona que eres y realmente estoy muy feliz de verte crecer, no lo digo por tu tamaño, porque así te vas a quedar xD lo digo porque veo como eres con tu entorno, como actuas y no puedo decir que me gusta todo de tí, no pretendo que te agrade todo de mí y quizá aún no lo sé todo de tí y supongo que es bueno, porque así tengo mucho por descubrir aún en el tiempo que me queda de estar a tu lado :") no podría precisar si seguiremos juntos, no lo digo porque quiera terminar, sino porque todo es incierto. Me gustaría desearte un feliz cumpleaños, aunque no puedo estar a tu lado este año y no es que haya estado a tu lado un buen de tiempo, supongo que mientras exista el sentimiento, me gustaría estar junto a ti en momentos como esos ♥. Hago el recuento de todo lo que has hecho por mí y cuanto me has ayudado a crecer, no sé, supongo que veo en tí un modelo de persona a seguir, ojo no digo que seas el 100/100 pero en su mayoría tienes actitudes rescatables que me gustaría tener. Espero que puedas concretar tus metas y si tengo el gusto de estar cerca cuando pase genial, sino te deseo lo mejor en cada uno de tus sueños Jorge, eres una persona muy especial para mí... Podría seguir con esto, porque son 2 largos años de muchas cosas que han pasado entre nosotros y si bien solo es tu cumpleaños supongo que ese lado cursi que oprimi con otras personas, contigo solo fluye, aunque no puedo negar que es molesto, me gustaba ser cursi solo para mi y mi imaginación :c bueno, no sé si esté sea un saludo propiamente dicho :D se que la hilación se perdió hace rato :v no obstante me divertí mucho haciendo esto para ti! Pasa un bonito día, necesito sacarte poquito de mi corazón, soy muy dependiente, yo lo sé, espero todo resulte mejor más adelante, come rico y date un fuerte abrazo de mi parte :3 see u';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

$(ele).hide()
    .appendTo('p')
    .each(function (i) {
        $(this)
            .delay(100 * i)
            .css({
                display: 'inline',
                opacity: 0
            })
            .animate(
                {
                    opacity: 1
                }, 100
            );
        }
    );

window.onload = function() {
    var context = new AudioContext();
}
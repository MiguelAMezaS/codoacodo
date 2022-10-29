(function(){ //otra vez se hace una función autoinvocada para proteger las variables de otros archivos

    const titleQuestions = [...document.querySelectorAll('.questions_title')]; //se pone los 3 puntos para convertir esto en un array

    titleQuestions.forEach(question =>{ //por cada pregunta quiero obtener su pregunta individual
        question.addEventListener('click', ()=>{
            let height = 0; //esta variable es para calcular el alto del elemento
            let answer = question.nextElementSibling; //obtiene al hno o sig. hno de question con el nextElementSibling
            let addPadding = question.parentElement.parentElement; //obtiene la pregunta del elemento questions arrow del html y tmb obtiene al padre de esa pregunta que es el questions_show y obtiene al padre de ese elemento que es questions_padding
            
            
            addPadding.classList.toggle('questions_padding--add');
            question.children[0].classList.toggle('questions_arrow--rotate'); //de la variable question se quiere obtener al primer hijo(children) y obtener la clase del span y agregarle o quitarle dependiendo si tiene la clase questions arrow rotate

            if(answer.clientHeight === 0){ // si el height=0 es porque quitamos el height
                height = answer.scrollHeight; //el scrollHeight nos da el alto minimo para que un elemento se muestre pero no da el padding ni el tamaño completo con el border
            }
            //si lo anterior es verdad entonces se agrega el height a la propiedad answer
            answer.style.height = `${height}px`;
        });
    });



})();

//el metodo forEach te permite ejecutar una función iterando a través de cada elemento de una matriz, no devuelve nada por lo tanto en caso de querer obtener un valor se tendra un "undefined", solo itera en arrays y objetos
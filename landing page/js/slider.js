(function(){ // esta es una funcion que se llama así misma para proteger el codigo y no mezclarlo entre todos los archivos de js y se ejecuta despues de su creacion 
            // Es como si lo asignara a una variable y lo usara inmediatamente después, solo que sin la variable
    const sliders = [...document.querySelectorAll('.testimonio_body')];
    const buttonNext = document.querySelector('#next'); //se obtiene al elemento con el querySelector que tenga el id next
    const buttonBefore = document.querySelector('#before');
    let value;
    //agregar un evento al boton next entonces cuando se da click se ejecuta la funcion changePosition
    buttonNext.addEventListener('click', ()=>{
        changePosition(1); //le doy un argumento de 1
    });

    buttonBefore.addEventListener('click',()=> {
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimonio = document.querySelector('.testimonio_body--show').dataset.id; //se crea esta constante para obtener el slider actual y obtener el elemento con la clase testimonio_body--show y quiero obtener tmb su dataset que en este caso es un id
        value = Number(currentTestimonio); //el valor es igual al data-id del slider actual
        value += add; //se suma el valor que se le paso a la funcion que seria el add

        sliders[Number(currentTestimonio)-1].classList.remove('testimonio_body--show'); //quitar la clase al elemento actual que es currenTestimonio convertido a numero o entero menos 1 y accedo a su clase y remuevo el testimoniobodyshow
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        } //se hace una condicional que lo que hace es mandarte al último slider en caso de ser 0 o al primero en caso de ser 4, porque solo hay 3 id, no 4 ni 0

        sliders[value-1].classList.add('testimonio_body--show'); //obtener las clases y agregar la clase que esta entre parentesis


    }

})();

//este script hace que sea dinamico el slider y no se rompa así tenga muchos o pocos slider
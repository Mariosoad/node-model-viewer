const buttons = document.querySelectorAll("button");

buttons[1].addEventListener("click", function(){
    alert("button 1");
})

buttons.forEach(function(item){
    item.addEventListener('click', function(){
        ButtonC("Ejemplo de button");
    });
});

function ButtonC(nombre){
    alert("ejemplo de función" + nombre);
}

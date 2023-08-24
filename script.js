let video=document.querySelector('video');


const reproducirVideo=()=>{
video.play();
document.querySelector('.duracion').textContent="duracion video "+video.duration.toFixed(2);
/*no me quedo en claro como hacer que el tiempo empiece sin tener que utilizar un efecto que lo active*/

}

const pausarVideo=()=>{
    video.pause();  
}


let arreglo=["","",""];

function allowDrop(event){
    event.preventDefault();

}

function drag(event){
    event.dataTransfer.setData("text",event.target.id);
}


let sacar=document.querySelector(".cuadro1");
let sacar1=document.querySelector(".cuadro2");
let sacar2=document.querySelector(".cuadro3");

sacar.addEventListener('dragover',()=>{
    sacar.innerHTML="";
})

sacar1.addEventListener('dragover',()=>{
    sacar1.innerHTML="";
})

sacar2.addEventListener('dragover',()=>{
    sacar2.innerHTML="";
})


/*No entiendo porque este metodo no me funciona para todos los parrafos
/*let sacar=document.querySelector("p");
sacar.addEventListener('dragover',()=>{
    sacar.innerHTML="";
})*/

function drop(event){
    /*Este tampoco me funciono, me funciona para la primera imagen nomas
    let sacar=document.querySelector('p');
    sacar.innerHTML="";*/

    if(arreglo[parseInt(event.target.id)]==""){
        var data=event.dataTransfer.getData("text");
        arreglo[parseInt(event.target.id)]=data;
        event.target.appendChild(document.getElementById(data)); 
    }
      
    if(arreglo[0]!="" && arreglo[1]!="" && arreglo[2]!=""){
        if(arreglo[0]=="img2" && arreglo[1]=="img1" && arreglo[2]=="img3"){
            document.querySelector("h3").innerHTML="Lo armaste correctamente!";
        }else{
            document.querySelector("h3").innerHTML="Incorrecto, intente nuevamente!";
        }
    }
}



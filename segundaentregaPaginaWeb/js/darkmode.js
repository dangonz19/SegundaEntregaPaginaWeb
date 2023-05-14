



    




/* let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');
toggle.addEventListener('change',(event)=>{
let checked = event.target.checked;
document.body.classList.toggle('dark');

let val = localStorage.getItem("label_toggle");

if (checked==true){
    label_toggle.innerHTML='<i class="fa-solid fa-sun"></i>';
    label_toggle.style.color="yellow";
}else{
    label_toggle.innerHTML='<i class="fa-solid fa-moon"></i>';
    label_toggle.style.color="rebeccapurple";

}


}) */

let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');

// al cargar la página, lee el valor del interruptor desde localStorage y aplica el modo oscuro si es necesario
let darkModeActivo = localStorage.getItem("darkModeActivo") ==='true';
if (darkModeActivo) {
  document.body.classList.add('dark');
  toggle.checked = true;
  label_toggle.innerHTML='<i class="fa-solid fa-sun"></i>';
  label_toggle.style.color="yellow";
} else {
  document.body.classList.remove('dark');
  toggle.checked = false;
  label_toggle.innerHTML='<i class="fa-solid fa-moon"></i>';
  label_toggle.style.color="rebeccapurple";
}

toggle.addEventListener('change',(event)=>{
  let checked = event.target.checked;
  document.body.classList.toggle('dark');
  
  if (checked==true){
      label_toggle.innerHTML='<i class="fa-solid fa-sun"></i>';
      label_toggle.style.color="yellow";
  }else{
      label_toggle.innerHTML='<i class="fa-solid fa-moon"></i>';
      label_toggle.style.color="rebeccapurple";
  }
  
  // guarda el estado del interruptor en localStorage
  localStorage.setItem("darkModeActivo", checked);
});

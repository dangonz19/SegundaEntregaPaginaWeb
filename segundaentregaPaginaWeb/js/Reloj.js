const time = document.getElementById('time');
const date = document.getElementById('date');

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const weekNames = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sabado"];

const interval = setInterval(() => {

    const local = new Date();
    
    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear();
        week = local.getDay();
        

    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${weekNames[week]} ${day} ${monthNames[month]} ${year}`;

}, 1000);
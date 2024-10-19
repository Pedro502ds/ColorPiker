const escritura=document.getElementById("reloj")

const getHora=()=>{
    const fecha=new Date ();
    console.log(fecha)
    const tiempo={
        hora: fecha.getHours(),
        minuto: String(fecha.getMinutes()).padStart(2, '0'),
        segundo: String(fecha.getSeconds()).padStart(2, '0')

    }
    console.log(tiempo.hora)
    const ahora=tiempo.hora+":"+tiempo.minuto+":"+tiempo.segundo;
    console.log(ahora)
    escritura.textContent=ahora;

}
setInterval(getHora,300);

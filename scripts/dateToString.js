function dateToString () {
    let userDate = document.getElementById("rds-date").value;                    
    let userDateClean = userDate.replace(/-/g, "");
    document.getElementById('buscar').innerHTML=`<p>Busca en google imágenes:</p> <p> IMG ${userDateClean} </p>`;
}

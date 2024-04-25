const incidentsTotales = [];
const incidents = [];

exports.limpiador = (ctx) => {
    let datos=ctx.request.body
    console.log('Tiempo:',ctx.query.tiempo);
    console.log('Body:',ctx.request.body);
    let ultimoDato = incidents.lastIndexOf(datos)
    console.log(datos.metadata)
    if (incidents.length== 0){
        incidents.push(datos)
    }
    else
    {
    for(var i = 0; i < incidents.length; i++)
    {
        console.log(incidents[i].metadata,"y", datos.metadata)
        console.log(incidents[i].event_id,"y", datos.event_id)
      if((incidents[i].metadata == datos.metadata) && incidents[i].event_id != datos.event_id)
      {
        let dif =incidents[i].timestamp  - datos.timestamp
        if((0 <dif)&& (dif < 5000))
        {
            console.log("ya existia, pero menor a 5000")
            incidents.push(datos)
        }
        else
        {
            console.log("ya existia, pero memayor a 5000")
            incidentsTotales.push(incidents)
            let data = 
            {
            "incident_id": "prot-35-fld",
            "incidents" :incidentsTotales
            }
            incidentsTotales.push(incidents)
        }
        break
      }
      else{
        break
        console.log("Evento repetido")
      }
    }
    }
    console.log(incidentsTotales)
    return incidentsTotales
  };


  

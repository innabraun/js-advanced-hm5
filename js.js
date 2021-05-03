document.querySelector("button").addEventListener( "click",()=>getIp())
const root=document.querySelector(".root")

async function getIp(){

       const data = await fetch('https://api.ipify.org/?format=json')
            .then(res=>res.json())
            .then(data=>data)


  const dataIP=await fetch(`http://ip-api.com/json/${data.ip}?fields=status,message,continent,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,isp,org,as,query`)
        .then(res=>res.json())
        .then(dataIP=>dataIP)
    console.log(dataIP)

    root.insertAdjacentHTML("afterend", `
    
   <p>continent:${dataIP.continent}</p>
    <p>country:${dataIP.country}</p>
    <p> region : ${dataIP.regionName}</p>
    <p>city: ${dataIP.city}</p>
    <p>district: ${dataIP.district}</p>
     
    `)
    }


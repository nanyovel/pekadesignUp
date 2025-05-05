const keyMap = "AIzaSyBxZcTI1WYSE3tyf6EbAZgPCPazFO5fzi4";
{
  /* <script>
  (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "YOUR_API_KEY",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });
</script> */
}

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Simple Marker</title>
//     <!-- The callback parameter is required, so we use console.debug as a noop -->
//     <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxZcTI1WYSE3tyf6EbAZgPCPazFO5fzi4&callback=console.debug&libraries=maps,marker&v=beta">
//     </script>
//     <style>
//       /* Always set the map height explicitly to define the size of the div
//        * element that contains the map. */
//       gmp-map {
//         height: 100%;
//       }

//       /* Optional: Makes the sample page fill the window. */
//       html,
//       body {
//         height: 100%;
//         margin: 0;
//         padding: 0;
//       }
//     </style>
//   </head>
//   <body>
//     <gmp-map center="18.55854606628418,-68.3562240600586" zoom="14" map-id="DEMO_MAP_ID">
//       <gmp-advanced-marker position="18.55854606628418,-68.3562240600586" title="My location"></gmp-advanced-marker>
//     </gmp-map>
//   </body>
// </html>

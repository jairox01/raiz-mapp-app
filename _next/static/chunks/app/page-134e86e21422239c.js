(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7333:function(s,i,e){Promise.resolve().then(e.bind(e,2441)),Promise.resolve().then(e.t.bind(e,3605,23))},2441:function(s,i,e){"use strict";e.r(i);var n=e(6941),t=e(6097),l=e(6974),c=e(9298);let o={height:"1000px"},r={lat:.9214413,lng:-77.4354531};i.default=()=>{let[s,i]=(0,t.useState)([]),[e,a]=(0,t.useState)(null);(0,t.useEffect)(()=>{let s=async()=>{try{let s=await c.Z.get("https://sheets.googleapis.com/v4/spreadsheets/".concat("1YpG6mjwNuiSApHwJafqaiGnNccAE746gk56Z1SJc4Gg","/values/").concat("FUNES!A:N","?key=").concat("AIzaSyByc4JiGVTQCH4w-tPZWnNfVyjcgAjuBjo")),e=s.data.values.map(s=>({group:s[0],specie:s[1],origin:s[2],taxon:s[3],status:s[4],family:s[5],shortDescription:s[6],longDescription:s[7],latitude:s[8],longitude:s[9],altitude:s[10],position:{lat:parseFloat(s[11]),lng:parseFloat(s[12])}}));i(e)}catch(s){console.error("Error fetching markers: ",s)}};s()},[]);let d=s=>{a(s)};return(0,n.jsx)("div",{children:(0,n.jsxs)(l.KJ,{googleMapsApiKey:"AIzaSyByc4JiGVTQCH4w-tPZWnNfVyjcgAjuBjo",children:[(0,n.jsxs)(l.b6,{mapContainerStyle:o,center:r,zoom:12,children:[s.map((s,i)=>(0,n.jsx)(l.Jx,{position:s.position,onClick:()=>d(s)},i)),e&&(0,n.jsx)(l.nx,{position:e.position,onCloseClick:()=>a(null),children:(0,n.jsxs)("div",{class:"info-window",children:[(0,n.jsx)("h5",{children:e.specie}),(0,n.jsx)("img",{src:"./images/pajaro-quemamais.png"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Familia: "}),e.family]}),(0,n.jsx)("a",{onClick:()=>{let s=document.getElementById("info-box");s&&s.scrollIntoView({behavior:"smooth"})},children:"Ver m\xe1s"})]})})]}),(0,n.jsx)("div",{children:e&&(0,n.jsx)("div",{className:"card",id:"info-box",children:(0,n.jsxs)("div",{class:"columns",children:[(0,n.jsxs)("div",{class:"column",children:[(0,n.jsx)("img",{src:"./images/pajaro-quemamais.png"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Latitud:"})," ",e.latitude]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Longitud:"})," ",e.longitude]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Altitud:"})," ",e.altitude]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Distribuci\xf3n del tax\xf3n:"})," ",e.taxon]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Estado de conservaci\xf3n:"})," ",e.status]})]})]}),(0,n.jsxs)("div",{class:"column",children:[(0,n.jsx)("h3",{children:e.specie}),(0,n.jsx)("h5",{children:"Descripci\xf3n"}),(0,n.jsx)("p",{children:e.longDescription})]})]})})})]})})}}},function(s){s.O(0,[456,605,193,428,526,744],function(){return s(s.s=7333)}),_N_E=s.O()}]);
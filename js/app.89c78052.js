(function(e){function a(a){for(var i,o,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,l||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"4b4f9c7b","chunk-0206bfa0":"a278e582","chunk-0c047e41":"9dab790d","chunk-13a6037e":"81eda5eb","chunk-18f95272":"7a57d180","chunk-25b302c8":"c0c96807","chunk-26fc7596":"72ac93ab","chunk-2c06842c":"fb99932f","chunk-2d0e96ec":"5df2f04d","chunk-2d208d90":"cd091006","chunk-2d21d0e2":"e3102ef0","chunk-2d22c123":"07fa3afa","chunk-2d2747e2":"830388c1","chunk-2e80bb9a":"16424b70","chunk-319206de":"612f074e","chunk-32334cb6":"440e7537","chunk-3c57cd7b":"415a152e","chunk-3d6834f6":"e8ab565d","chunk-4cdd78c0":"57da21f4","chunk-4f2d402a":"cce421b8","chunk-4fde0a08":"42f6160f","chunk-515a8379":"3dc189c9","chunk-53ccb27e":"2eb129e7","chunk-55d286b8":"761dc6b8","chunk-59974754":"10e91e45","chunk-6e1e538a":"b8da87ec","chunk-766a929b":"b7bdd6eb","chunk-c796899c":"fdb738a9","chunk-e8a7823a":"c1f222d4","chunk-f2df7d2c":"156dfe57","chunk-fde47172":"7234b9b3",comple:"f9380598",creditos:"fd38ecaa",glosario:"0ad8ff0f",intro:"b660fadf",referencias:"7c48b355",sintesis:"b0dd12ba",tema1:"89aceb9d",tema2:"250026b6",tema3:"820444b8",tema4:"3886d182",tema5:"de873709"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1,tema2:1,tema4:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"6374314a","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"807b0df4","chunk-6e1e538a":"126808df","chunk-766a929b":"2c7cca92","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"69948aa1",creditos:"64b25935",glosario:"1b69cb5d",intro:"31d6cfe0",referencias:"f381af68",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"ed0a261b",tema3:"31d6cfe0",tema4:"1f3db184",tema5:"31d6cfe0"}[e]+".css",r=s.p+i,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===i||d===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=i,delete o[e],m.parentNode.removeChild(m),n(t)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var i=r[e];if(0!==i)if(i)a.push(i[2]);else{var t=new Promise((function(a,n){i=r[e]=[a,n]}));a.push(i[2]=t);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(n,i,function(a){return e[a]}.bind(null,i));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"417a":function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.c21c3af5.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("68f3"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),l=Object(s["a"])(c,o,r,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=b,h=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Diseño y elaboración de prótesis fija",descripcionCurso:"La prótesis parcial fija es un área enfocada a las restauraciones indirectas, solo puede ser removida por el profesional de odontología; es realizada en un laboratorio dental y durante su proceso de elaboración es importante tener conocimientos en el área y cumplir con la prescripción clínica para garantizar el cumplimiento de las necesidades del mercado.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("417a"),imagenesDecorativasBanner:[]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Modelo de prótesis fija",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Tecnologías mixtas digital y analógico",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Protocolo de trabajo digital y/o analógico",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Diseño y elaboración de la estructura",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Control de calidad",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Protocolo de trabajo digital y/o analógico.",referencia:"ZirconArtDental. (2013). <em>Proceso de diseño de una Prótesis fija con Software CAD/CAM - ZIRCONART.</em> [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=N5hTHx1aEOU&ab_channel=ZirconArtDental"}],glosario:[{termino:"Alginato",significado:"material elástico que sirve para la toma de impresiones dentales, teniendo como objetivo principal obtener una réplica exacta de los tejidos duros y blandos de la cavidad oral."},{termino:"Arenar",significado:"quitar los excesos de revestimiento a las piezas, para ello se usa la máquina arenadora."},{termino:"Arista central",significado:"elevación del esmalte que se encuentra en la cara vestibular más marcado de los caninos y recorre la pieza en su tercio medio desde cervical o incisal."},{termino:"Articuladores",significado:"instrumentos que simulan la relación existente entre los dientes maxilares y los mandibulares y nos permiten reproducir las posiciones y movimientos mandibulares fuera de la boca y sobre la mesa de trabajo."},{termino:"ATM",significado:"articulación témporo-mandibular."},{termino:"Base",significado:"parte de la prótesis que contiene los dientes artificiales y que encaja sobre la encía."},{termino:"Bruxismo",significado:"hábito de apretamiento o frotamiento de dientes, diurno o nocturno, con distintos grados de intensidad y persistencia en el tiempo, involuntario y fuera de los movimientos funcionales que tiene la mandíbula."},{termino:"CAD-CAM",significado:"<em>(Computer-Aid-Design-Computer Aid Manufacturing)</em> programa informático de diseño y fabricación asistido por ordenador."},{termino:"Cofia dental",significado:"sistema de toma de impresión dental cuya función es la de obtener una impresión exacta de los pilares tallados."},{termino:"Conector",significado:"estructura que une los retenedores con el póntico."},{termino:"Cubetas individuales",significado:"instrumentos que se realizan cuando las cubetas estándar no se adaptan bien al paciente para la toma del registro de la boca."},{termino:"Curva de compensación",significado:"curvatura anteroposterior y lateral en el alineamiento de las superficies oclusales y los bordes incisales de los dientes artificiales, que se emplea para conseguir una oclusión equilibrada durante los movimientos mandibulares."},{termino:"Dientes pilares",significado:"dientes remanentes que sirven de soporte al puente."},{termino:"Dientes remanentes",significado:"piezas que conserva el paciente."},{termino:"Escayola dental metalizada",significado:"yeso para dados de trabajo sobre los que se harán trabajos de rehabilitación dental como coronas, implantes, postes o prótesis."},{termino:"Escayola dental tipo IV",significado:"yeso tipo 4 tixotrópico extraduro, de alta resistencia. Su tiempo prolongado de trabajo de 8 minutos permite correr hasta 6 arcadas al mismo tiempo."},{termino:"Estética",significado:"diseño, en cierta medida, de la cara del paciente."},{termino:"Estructura mecanizada presinterizada",significado:"estructura fresada de zirconita aún no completamente endurecida de la manera indicada."},{termino:"Estructura mecanizada sinterizada",significado:"estructura fresada que ya presenta la dureza y las características recomendadas."},{termino:"Fraguado",significado:"endurecimiento del revestimiento."},{termino:"Muñón",significado:"superficie dentaria que queda tras el tallado y que es apta para recibir la corona artificial."},{termino:"Oclusión",significado:"contacto entre los dientes superiores e inferiores."},{termino:"Oclusión dentaria <em>(angle)</em>",significado:"relación de las arcadas entre sí."},{termino:"Odontología",significado:"una de las ciencias de la salud que se encarga del diagnóstico, tratamiento y prevención de las enfermedades del aparato estomatognático, que incluye los dientes, el periodonto, la articulación temporomandibular, el sistema neuromuscular y todas las estructuras de la cavidad oral como la lengua, el paladar, la mucosa oral y las glándulas salivales."},{termino:"Pinza de mosquito",significado:"instrumental que se usa para sujetar la pieza en la que quieras aplicar él <em>opaque</em> por medio del gito."},{termino:"Póntico",significado:"diente postizo que reemplaza al perdido."},{termino:"Posición dentaria",significado:"“posición de equilibrio muscular”, donde los dientes se colocan en la posición donde exista un equilibrio."},{termino:"Prótesis dental",significado:"elemento artificial destinado para suplir la ausencia dentaria, restaurando la anatomía de una o varias piezas."},{termino:"Prótesis dental",significado:"prótesis parcial removible es aquella prótesis que sustituye parcialmente los dientes ausentes del paciente, con la finalidad de restablecer las principales funciones orales, masticación, estética, fonética, prevención de inclinación, estabilización de los dientes debilitados."},{termino:"Prueba del bizcocho",significado:"consiste en la colocación de la corona (no glaseada) en boca del paciente sobre el muñón, para poder comprobar que en el laboratorio han colocado la cerámica correctamente."},{termino:"Puente",significado:"prótesis que reemplaza uno o varios dientes ausentes."},{termino:"Pulido",significado:"procedimiento superficial que consiste en un desgaste por frotación o abrasión para conseguir una prótesis totalmente lisa."},{termino:"Rebase",significado:"método de reajuste de la prótesis que consiste en reemplazar parte del material de la base, consiguiendo el ajuste sin modificar la posición de los dientes."},{termino:"Rebordes marginales",significado:"elevación del esmalte que se encuentra en mesial y distal de la cara oclusal de premolares y molares, siendo la zona donde finalizan surcos secundarios."},{termino:"Restauración",significado:"procedimiento que consiste en reemplazar por medios artificiales los dientes o parte de ellos."}],referencias:[{referencia:"Esponda, R. (2019). <em>Anatomía dental.</em> Universidad Nacional Autónoma de México (UNAM).",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/187393"},{referencia:'García, V. (2017). <em>La enseñanza bimodal en la asignatura "dentaduras parciales removibles" y su incidencia en el rendimiento estudiantil.</em> Universidad Central de Venezuela.',link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/112051"},{referencia:"Matiz, J. (2014). <em>Temas de rehabilitación oral: acrílicos dentales. 1: Clínica-laboratorio.</em> Ecoe Ediciones.",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/122433"},{referencia:"Navas, E. (2018). <em>Prevención de riesgos laborales, sector sanitario: riesgos específicos del trabajo de protésicos dentales</em> (2a. ed.). Editorial ICB.",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/111458"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Daniel L. Toro A.",cargo:"Instructor",centro:"Centro de Servicios de Salud. Regional Antioquia"},{nombre:"Paola Alexandra Moya Peralta",cargo:"Diseñadora instruccional",centro:"Centro de la Industria, la Empresa y los Servicios. Regional Norte de Santander"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Asesora metodológica",centro:"Centro de Diseño y Metrología. Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yerson Fabian Zarate Saavedra",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Revisión de guion audiovisual",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Jhon Edinson Castañeda Oviedo",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Eugenia Mejía López",cargo:"Validación Contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Carolina Tamayo López",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yicelly Estefania Mesa Silva",cargo:"Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Estefani Daniela Gallo Cortés",cargo:"Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Validación Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Pedro Nel Calao Zabala",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Oleg Litvin",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Validación audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});i["a"].prototype.$config=v;var y=n("9224");i["a"].prototype.$package=y,new i["a"]({router:g,store:h["a"],render:function(e){return e(d)}}).$mount("#app")},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.f8a1fc04.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){}});
//# sourceMappingURL=app.89c78052.js.map
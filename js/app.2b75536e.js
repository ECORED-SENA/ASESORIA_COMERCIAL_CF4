(function(e){function a(a){for(var n,t,c=a[0],l=a[1],u=a[2],s=0,d=[];s<c.length;s++)t=c[s],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&d.push(i[t][0]),i[t]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(a);while(d.length)d.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var e,a=0;a<r.length;a++){for(var o=r[a],n=!0,t=1;t<o.length;t++){var c=o[t];0!==i[c]&&(n=!1)}n&&(r.splice(a--,1),e=l(l.s=o[0]))}return e}var n={},t={app:0},i={app:0},r=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6",tema7:"tema7"}[e]||e)+"."+{actividad:"860f2021","chunk-0206bfa0":"1ea385af","chunk-04b93936":"aba9f9fa","chunk-13a6037e":"1c98822b","chunk-16015154":"a34d0304","chunk-17977988":"4ced23bd","chunk-2c06842c":"f69c97b2","chunk-2d208d90":"36ac7329","chunk-2d21d0e2":"a3d72785","chunk-2d22c123":"1d0df974","chunk-2e80bb9a":"af6860e1","chunk-3145fe0f":"9d50680d","chunk-319206de":"a5580532","chunk-328f70dd":"8b598862","chunk-3807499c":"1a57ba6c","chunk-3dc647fd":"a7a8c549","chunk-4cdd78c0":"a6e5c672","chunk-4fde0a08":"c0869c3d","chunk-515a8379":"cf251591","chunk-53ccb27e":"4930fd7d","chunk-59974754":"f78244e7","chunk-766a929b":"5a61252b","chunk-839300a6":"506b7db6","chunk-c796899c":"a04c39c9","chunk-dbb9869e":"4b08733f",comple:"e6727ea7",creditos:"9244316b",glosario:"9a0c01d0",intro:"df40bbf1",referencias:"8c7b93b1",tema1:"d8bfda8c",tema2:"d6f9fb6e",tema3:"abb9963b",tema4:"ede39720",tema5:"80246f24",tema6:"cd7473bf",tema7:"b7504ff3"}[e]+".js"}function l(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var a=[],o={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};t[e]?a.push(t[e]):0!==t[e]&&o[e]&&a.push(t[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6",tema7:"tema7"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-319206de":"31d6cfe0","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"7c4e8a67","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"63e9ff5b","chunk-766a929b":"d31e9d0a","chunk-839300a6":"7f32605e","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"ac8d1e3e",creditos:"84522be8",glosario:"985961c4",intro:"0e433876",referencias:"e470c260",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0",tema6:"31d6cfe0",tema7:"31d6cfe0"}[e]+".css",i=l.p+n,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===n||s===i))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],s=u.getAttribute("data-href");if(s===n||s===i)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var n=a&&a.target&&a.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete t[e],f.parentNode.removeChild(f),o(r)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){t[e]=0})));var n=i[e];if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(a,o){n=i[e]=[a,o]}));a.push(n[2]=r);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var d=new Error;u=function(a){s.onerror=s.onload=null,clearTimeout(f);var o=i[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+t+")",d.name="ChunkLoadError",d.type=n,d.request=t,o[1](d)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(a)},l.m=e,l.c=n,l.d=function(e,a,o){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)l.d(o,n,function(a){return e[a]}.bind(null,n));return o},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=a,u=u.slice();for(var d=0;d<u.length;d++)a(u[d]);var f=s;r.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("68f3"),t=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},i=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,l=o("2877"),u=Object(l["a"])(c,t,i,!1,null,null,null),s=u.exports,d=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),f=o("8c4f"),m=o("ae58"),p=o("7e58");d["a"].use(f["a"]);var h=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return o.e("tema4").then(o.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return o.e("tema5").then(o.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return o.e("tema6").then(o.bind(null,"92ea"))}},{path:"tema7",name:"tema7",component:function(){return o.e("tema7").then(o.bind(null,"a2b2"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Propuesta comercial de un producto o servicio",descripcionCurso:"Una propuesta comercial es un documento presentado al cliente con la información del producto o servicio; describiendo beneficios, plazos de entrega, alcance, formas de pago, entre otros. <br><br> Se abordarán sus principales componentes: identificación de necesidades, descripción del producto, condiciones de la propuesta y formas de presentación. Finalmente, se muestran técnicas de negociación y herramientas para la socialización de la propuesta.",imagenBannerPrincipal:o("9370"),fondoBannerPrincipal:o("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Las necesidades y el deseo",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"El producto",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Atributos del producto",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Niveles de productos",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Clasificación de productos",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Características del producto",hash:"t_2_4"},{icono:"far fa-file-alt",numero:"2.5",titulo:"Empaque",hash:"t_2_5"},{icono:"far fa-file-alt",numero:"2.6",titulo:"Etiqueta",hash:"t_2_6"},{icono:"far fa-file-alt",numero:"2.7",titulo:"Envase",hash:"t_2_7"},{icono:"far fa-file-alt",numero:"2.8",titulo:"Embalaje",hash:"t_2_8"},{icono:"far fa-file-alt",numero:"2.9",titulo:"Portafolio de productos",hash:"t_2_9"},{icono:"far fa-file-alt",numero:"2.10",titulo:"Ciclo de vida",hash:"t_2_10"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"El surtido",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Estructura del surtido",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Dimensiones del surtido",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Clasificación del surtido",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Características",hash:"t_3_4"},{icono:"far fa-file-alt",numero:"3.5",titulo:"Cualidades del surtido",hash:"t_3_5"},{icono:"far fa-file-alt",numero:"3.6",titulo:"El lineal",hash:"t_3_6"},{icono:"far fa-file-alt",numero:"3.7",titulo:"Implantación",hash:"t_3_7"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Servicio al cliente",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Atributos del servicio",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Características del servicio",hash:"t_4_2"},{icono:"far fa-file-alt",numero:"4.3",titulo:"Tipos de servicio al cliente",hash:"t_4_3"}]},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Negociación",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"5.1",titulo:"Características",hash:"t_5_1"},{icono:"far fa-file-alt",numero:"5.2",titulo:"Etapas de la negociación",hash:"t_5_2"},{icono:"far fa-file-alt",numero:"5.3",titulo:"Tipos de negociación",hash:"t_5_3"},{icono:"far fa-file-alt",numero:"5.4",titulo:"Aplicabilidad",hash:"t_5_4"}]},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"Propuesta comercial",desarrolloContenidos:!0},{nombreRuta:"tema7",icono:"far fa-file-alt",numero:"7",titulo:"Herramientas ofimáticas",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"7.1",titulo:"Clasificación",hash:"t_7_1"},{icono:"far fa-file-alt",numero:"7.2",titulo:"Tipos de herramientas",hash:"t_7_2"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Amador Araujo, Lourdes, L., Pineda Ayala, E. & Kotler. P. (2017). Fundamentos De Marketing. Decimotercera ed. México: Pearson Prentice Hall. Print. Área: Administración."},{referencia:"Amador Araujo, Lourdes, L., Pineda Ayala, E. & Kotler. P. (2016). Dirección De Marketing. Decimoquinta. Decimotercera ed. México: Pearson Prentice Hall. Print. Área: Administración."},{referencia:"Ávila M., F. (2008). Tácticas para la Negociación Internacional. (2da. Ed.). ISBN: 9682480841. México D.F., México: Editorial Trillas, pp. 29, 195-196."},{referencia:"Díez de Castro, E.C, Landa Bercebal, F.J., Navarro García, A. (2006). Merchandising. Teoría y práctica. Pirámide, Madrid"},{referencia:"Lira Mejía, M. C. (2009). ¿Cómo puedo mejorar el servicio al cliente? Técnicas para perfeccionar la actitud en el servicio al cliente.",link:"https://comunidadilgo.org/back/_lib/file/doc/portaldoc453_3.pdf"},{referencia:"Muñiz G., R. (2008). Marketing en el siglo XXI. (2da. Ed.). ISBN: 8445410911. España: Centro de estudios Financieros."},{referencia:"Negocios en Tu Mundo, negocios en TM. (2012). Emprendedores a diferenciar sus productos Nada de commodities.",link:"https://www.youtube.com/watch?v=GGAGkqStMJw"},{referencia:"Negocios en Tu Mundo, negocios en TM. (2012). Qué es y que no es el valor agregado. (2007). Maslows Hierarchy of Needs.",link:"https://www.simplypsychology.org/maslow.html"},{referencia:"Palomares, B. (2009). Merchandising. Teoría, práctica y estrategia. ESIC, Madrid."},{referencia:"Parra, J. B., Santiago, E., Murillo, M. & Atonal, C. (2010). Estrategia para negociaciones exitosas. e-Gnosis, 8."},{referencia:"Solís Buendía, L. (2015). Importancia del surtido en la estrategia minorista: un análisis empírico en el contexto de tiendas de ropa."}],glosario:[{termino:"Online",significado:"En español, “en línea”, que se accede mediante una conexión a internet o que se encuentra en internet."},{termino:"Proactivo",significado:"Persona que tiene iniciativa y capacidad para anticiparse a problemas o necesidades futuras."},{termino:"Reactivo",significado:"Persona que actúa reaccionando a las circunstancias externas"},{termino:"Stock",significado:"Conjunto de mercancías o productos que se tienen almacenados en espera de su venta o comercialización."}],complementario:[{texto:"Amador Araujo, Lourdes, L., Pineda Ayala, E. & Kotler. P. (2017). Fundamentos De Marketing. Decimotercera ed. México: Pearson Prentice Hall. Print. Área: Administración.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4393"},{texto:"Amador Araujo, Lourdes, L., Pineda Ayala, E. & Kotler. P. (2016). Dirección De Marketing. Decimoquinta. Decimotercera ed. México: Pearson Prentice Hall. Print. Área: Administración.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4273"},{texto:"Negocios en Tu Mundo, negocios en TM. (2012). Emprendedores a diferenciar sus productos Nada de commodities. [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=GGAGkqStMJw"},{texto:"Negocios en Tu Mundo, negocios en TM. (2012). Qué es y que no es el valor agregado. [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=FpnYS2jtKJk"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Paolo Andrés Cantillo Largo",cargo:"Experto temático",centro:"Centro de comercio Regional Antioquia"},{nombre:"Zenith Chinchilla Ruedas",cargo:"Diseñador Instruccional",centro:"Regional Distrito Capital – Centro de Diseño y Metrología"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Revisor Metodológico y Pedagógico",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Anllelo Andres Reina Montañez",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Diego Fernando Velasco Güiza",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Andres Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Wilson Andrés Arenales Caceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"María Carolina Tamayo López ",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Camilo Villamizar Lizcano",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Ernesto Navarro Jaimes",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Veimar Celis Melendez",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});n["a"].prototype.$config=v;var k=o("9224");n["a"].prototype.$package=k,new n["a"]({router:b,store:g["a"],render:function(e){return e(s)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.2.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},9370:function(e,a,o){e.exports=o.p+"img/banner-princiapal.03f0dfdd.png"},"9eb5":function(e,a,o){e.exports=o.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,o){},e6b0:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.7881c392.png"}});
//# sourceMappingURL=app.2b75536e.js.map
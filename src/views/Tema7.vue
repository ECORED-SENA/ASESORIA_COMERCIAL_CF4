<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Herramientas ofimáticas
    
    .row.align-items-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        img(src='@/assets/curso/tema7/img01.png')
      .col-lg-6.mb-0
        .cajon.color-primario.p-4
          p.mb-4 Las herramientas de ofimática son un conjunto de técnicas, aplicaciones y programas informáticos que se utilizan para optimizar, sistematizar y obtener una mayor eficiencia en diferentes tareas relacionadas con la oficina u otras actividades administrativas.
    
    Separador
    #t_7_1.titulo-segundo(data-aos="fade-right")
      .h3 7.1 Clasificación
    
    p.mb-4 Las herramientas ofimáticas podemos clasificarlas así:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema7/img02.svg')
      .tarjeta.color-red-light.p-3(x="36%" y="21%")
        p Soluciones de escritorio: son aquellas herramientas que se deben instalar localmente en cada computador para que puedan funcionar. Usualmente, requieren de la compra de una licencia o bien pueden instalarse de forma gratuita según la marca. Por ejemplo, Microsoft Office (pago por licencia) y Open Office (gratuito).
      .tarjeta.color-red-light.p-3(x="63%" y="25%")
        p Soluciones online: como su nombre lo indica, son aquellas que funcionan a través de un servidor y con conexión a internet. El funcionamiento es similar a las soluciones de escritorio, solo que puedes acceder a ellas desde cualquier lugar siempre que se esté conectado a internet. Por ejemplo: Google Apps
    
    Separador
    #t_7_2.titulo-segundo(data-aos="fade-right")
      .h3 7.2 Tipos de herramientas
    
    p.mb-4 Entre las herramientas ofimáticas, encontramos:

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
      h5 Tabla 4
      span #[i Tipos de herramientas]
    
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Tipo
            th Descripción
            th Herramienta
        tbody
          tr
            td Procesador de texto
            td Usado para la redacción de informes, cartas, contenidos, memorandos, folletos sencillos, manuales, tesis, etc. Si el documento es en línea, se pueden introducir animaciones, videos, entre otros.
            td Word (Office) <br> Writer (Open office) <br> Documentos (Google)
          tr
            td Hoja de cálculo
            td Su función principal es generar planillas con balances, control de gastos, estados de cuenta, manejos contables, etc.
            td Excel (Office) <br> Calc (Open office) <br> Hoja de cálculo (Google)
          tr
            td Bases de datos
            td Permite la creación y administración de datos del usuario, control de inventarios, consulta de registros, entre otras aplicaciones.
            td Access (Office) <br> Base (Open Office)
          tr
            td Presentaciones
            td Permite la creación de presentaciones basadas en diapositivas o slides para la exposición de información, gráficos, infografías, videos, animaciones, gráficos, etc.
            td PowerPoint (Office) <br> Impress (Open Office) <br> Presentaciones (Google)
    separador
</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass" scoped></style>

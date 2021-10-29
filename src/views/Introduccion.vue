<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center
      .col-lg-10.mb-4
        .cajon.color-primario.p-4(data-aos="fade-left")
          p Bienvenidos a este proceso formativo donde podrán conocer sobre la propuesta comercial. Veamos el siguiente video que nos muestra una introducción al respecto:
      .col-lg-10.mb-0
        figure(data-aos="flip-up")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/pFIQ4Q9rB8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Servicio al cliente
    
    figure.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/tema4/img01.png')
    
    p.mb-4 No hay una fórmula sencilla para cuidar a los clientes, pero tampoco se trata de un gran misterio. Según el director general de L. L. Bean, “Muchas personas tienen cosas curiosas que decir acerca del servicio al cliente... pero solo se trata de una actividad diaria, continua, interminable, persistente, perseverante y compasiva”. De acuerdo con este concepto, podemos decir que el servicio al cliente son actividades que ofrece una empresa o quien provee el producto, hacia el consumidor, con el fin de satisfacer sus necesidades complementarias alrededor del producto adquirido y así, asegurar su correcto uso.

    Separador
    #t_4_1.titulo-segundo(data-aos="fade-right")
      .h3 4.1 Atributos del servicio
    
    p.mb-4 Los atributos del servicio son la filosofía o principios fundamentales que soportan el proceso de interacción entre el prestador de servicio con el cliente y consolidarlo sobre la base de la confianza y la ética. Entre los atributos tenemos:

    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Actitud de servicio
            th Satisfacción del usuario
            th Actitud positiva
            th Ética
            th Gusto por el servicio
            th Continuidad
    
    Separador
    #t_4_2.titulo-segundo(data-aos="fade-right")
      .h3 4.2 Características del servicio

    p.mb-4 Aunque muchos de los conceptos relacionados con el servicio al cliente son perceptuales y pueden ser adaptados de acuerdo con cada cliente, siempre encontraremos características comunes, entre ellas:

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
          h5 #[i Tabla 2]
          span Características del servicio
        
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th Característica
                th Descripción
            tbody
              tr
                th Disponible
                td Que se encuentre al alcance cuando el cliente lo necesite.
              tr
                th Accesible
                td Hace referencia al grado de contacto con el proveedor en el período de disponibilidad.
              tr
                th Cortés
                td Es el comportamiento cortés y profesional del proveedor en la prestación del servicio.
              tr
                th Ágil
                td Rapidez y eficiencia en la prestación del servicio.
              tr
                th Competente
                td Es la habilidad demostrada al prestar un servicio.
              tr
                th Confiable
                td Se genera confianza cuando hay habilidad para prestar el servicio de forma precisa.
              tr
                th Con buena comunicación
                td Es la fluidez y claridad en el intercambio de información entre el prestador de servicio y el cliente

    Separador
    #t_4_3.titulo-segundo(data-aos="fade-right")
      .h3 4.3 Tipos de servicio al cliente
    
    .row.justify-content-center.mb-4
      .col-lg-10
        p La forma de estar en contacto con los clientes dependerá de los canales, herramientas y estrategias que aplique la empresa para garantizar su plena satisfacción. De acuerdo con lo anterior, podemos representar las formas de atención al cliente, así:
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
          h5 Figura 10
          span #[i Tipos de Servicio al cliente]
        figure.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/tema4/img02.svg')
    separador
</template>

<script>
export default {
  name: 'Tema4',
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

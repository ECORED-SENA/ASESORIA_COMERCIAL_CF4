<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Propuesta comercial
    
    figura.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/tema6/img01.png')
    br
    p.mb-4 La propuesta comercial es un documento en el que el cliente tendrá toda la información sobre el producto o servicio que desea adquirir, incluyendo plazos de entrega, alcance de trabajo, valores y formas de pago. Se debe tener en cuenta

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Elementos de una propuesta comercial")
        .col-md-11.mb-0
          p.mb-4 Aunque existen varias posturas y corrientes que proponen elementos diversos para una propuesta comercial, es común identificar 3 grandes elementos que la componen:
          img(src='@/assets/curso/tema6/img02.svg')
    
      .row.justify-content-center(titulo="Elaboración de una propuesta")
        .col-md-12.mb-0
          p.mb-4 Crear la propuesta comercial puede representar un reto para algunos, porque no solo representa redactar bien los términos, sino también el diseño, la estructura, la extensión, entre otros elementos. Algunos de los elementos para tener en cuenta al momento de redactar una propuesta son:
        .col-md-11.mb-0
          ul.lista-ul--color
            li 
              i.fas.fa-check-circle
              p 
                strong El diseño y la presentación: 
                | presentar la propuesta comercial en una carpeta con identificación visual de la empresa, colores, material, papel membretado, entre otros aspectos. Son factores que llaman la atención como primera impresión de la propuesta.
            li 
              i.fas.fa-check-circle
              p
                strong Incluir un índice: 
                | los índices ayudan a estructurar la información y le permitirá al cliente localizar fácilmente la información dentro de la propuesta.
            li 
              i.fas.fa-check-circle
              p
                strong Excelente redacción: 
                | la propuesta debe redactarse de forma clara y concisa para que no genere inquietudes o vacíos en la información.
            li 
              i.fas.fa-check-circle
              p
                strong Importancia del precio y la forma de pago: 
                | para nadie es un secreto que el precio es un factor importante para la toma de decisiones; por consiguiente, la propuesta comercial debe presentar unos precios competitivos y una forma de pago que ayude al cierre de la venta.
            li 
              i.fas.fa-check-circle
              p
                strong Cronograma: 
                | consecuente con el precio, se presenta el cronograma de actividades o de acciones, esto permite comparar qué tan competitiva es la propuesta, relacionando precio con el tiempo de desarrollo. Presentar fechas claras, genera confianza en la empresa que presenta la propuesta.
            li 
              i.fas.fa-check-circle
              p
                strong Opciones: 
                | presentar al cliente más de una opción para el desarrollo de la propuesta le dará criterios al cliente para comparar y tomar una mejor decisión.
      .row.justify-content-center(titulo="Estructura de una propuesta")
        .col-md-12.mb-0
          p.mb-4 Una estructura común para las propuestas comerciales, presenta una serie de parámetros e información que le permite organizar las diferentes opciones que le presentará al cliente, encontrando:
        .col-md-11.mb-0
          ul.lista-ul--color
            li 
              i.fas.fa-check-circle
              | Índice o tabla de contenido.
            li 
              i.fas.fa-check-circle
              | Resumen de la propuesta.
            li 
              i.fas.fa-check-circle
              | Introducción o breve descripción de la propuesta.
            li 
              i.fas.fa-check-circle
              | Información sobre la empresa que recibirá la propuesta: aquí usted puede escribir una corta descripción de la empresa a la cual se le enviará la propuesta. No es necesario toda la historia, pero por lo menos una indicación de los aspectos más importantes.
            li 
              i.fas.fa-check-circle
              | Argumento o descripción del problema.
            li 
              i.fas.fa-check-circle
              | Objetivos y alcances del proyecto.
            li 
              i.fas.fa-check-circle
              | Plan de acción o actividades que se desarrollarán.
            li 
              i.fas.fa-check-circle
              | Cronograma general para el desarrollo de la propuesta.
            li 
              i.fas.fa-check-circle
              | Costos de la propuesta
            li 
              i.fas.fa-check-circle
              | Formas de pago propuestas o como base de la negociación.
            li 
              i.fas.fa-check-circle
              | Términos de confidencialidad (si los hay).
        .col-md-12.mb-0
          p.mb-4 Finalmente, la propuesta debe cerrarse con información de la empresa que la presenta, esto con el fin de generar confianza con los términos que se expresan en el documento:
          ul.lista-ul--color
            li 
              i.fas.fa-check-circle
              | Acerca de nosotros (descripción de la empresa, misión y visión).
            li 
              i.fas.fa-check-circle
              | Nuestros clientes.
            li 
              i.fas.fa-check-circle
              | Equipo de especialistas o equipo de trabajo que conforma la empresa.
    separador
</template>

<script>
export default {
  name: 'Tema6',
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

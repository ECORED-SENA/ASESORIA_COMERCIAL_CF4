<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Negociación
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-g.color-primario.p-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-5(data-aos="fade-left")
            p Las negociaciones son parte de la vida cotidiana de las personas, en cada actividad donde intervienen una o más personas, sea para estudiar, investigar o comprar algún artículo en el hogar, siempre habrá un proceso de negociación. Una buena negociación tiene un efecto recíproco entre las partes negociantes. Ávila (2008) comenta que la negociación “es un proceso en el que dos o más personas intercambian ideas con la intención de modificar sus relaciones y alcanzar un acuerdo tendiente a satisfacer necesidades mutuas”.

    Separador
    #t_5_1.titulo-segundo(data-aos="fade-right")
      .h3 5.1 Características
    
    p.mb-4 Sin importar el contexto, la negociación cuenta con las siguientes características:

    .row.justify-content-center.mb-4
      .col-lg-6
        img(src='@/assets/curso/tema5/img02.png')(data-aos="fade-right")
      .col-lg-6
        ul.lista-ul--color
          li 
            i.fas.fa-check-circle
            | Hay presencia de las partes negociadoras o interesadas en negociar.
          li 
            i.fas.fa-check-circle
            | Las partes negociadoras tienen algún tipo de interés en la otra parte. Si una parte no tiene nada que ofrecer a la otra, es difícil que haya una negociación. 
          li 
            i.fas.fa-check-circle
            | La negociación es un proceso dinámico, donde las partes se comunican, se brindan informes, existe una comunicación y se discute acerca de lo que cada uno está dispuesto a ceder a cambio de algo que el otro puede otorgar.
          li 
            i.fas.fa-check-circle
            | Cada parte negociadora tiene una estrategia para conseguir que la mayor parte de sus condiciones sean aceptadas. Los resultados pueden ser exitosos o no.
          li 
            i.fas.fa-check-circle
            | Si la negociación finaliza con éxito, se formaliza un acuerdo entre ambas partes.
    
    Separador
    #t_5_2.titulo-segundo(data-aos="fade-right")
      .h3 5.2 Etapas de la negociación

    p.mb-4 Aunque las fases o etapas de una negociación dependen de los intereses de las partes y tipo de negociación, de acuerdo con Muñiz (2008), del conocimiento y dominio de las fases de la negociación, se puede tener éxito o fracaso en la misma. El proceso de negociación se desarrolla en 4 fases

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
      h5 Figura 11
      span #[i Etapas de la negociación]
    
    .row.align-items-center.mb-4
      .col-lg-3
        img(src='@/assets/curso/tema5/img03.svg')(data-aos="fade-right")
      .col-lg-3
        img(src='@/assets/curso/tema5/img04.svg')(data-aos="flip-up")
      .col-lg-3
        img(src='@/assets/curso/tema5/img05.svg')(data-aos="flip-up")
      .col-lg-3.p-5
        img(src='@/assets/curso/tema5/img06.svg')(data-aos="fade-left")

    Separador
    #t_5_3.titulo-segundo(data-aos="fade-right")
      .h3 5.3 Tipos de negociación
    
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-4 Se evidencian dos tipos de negociación, la negociación cooperativa y la negociación competitiva. En el siguiente cuadro comparativo se presentan los tipos de negociación y algunos ítems importantes:

        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
          h5 Tabla 3
          span #[i Tipos de negociación]
        
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th Criterio
                th Negociación Cooperativa
                th Negociación Competitiva
                th Método Harvard
            tbody
              tr
                td.text-center Participantes
                td.text-center Amigos
                td.text-center Adversarios
                td.text-center Solucionador
              tr
                td.text-center Meta
                td.text-center Generar un acuerdo
                td.text-center Que haya un ganador
                td.text-center Buen acuerdo entre las partes
              tr
                td.text-center Relación
                td.text-center Se cultiva una relación de largo plazo
                td.text-center Hay un relacionamiento con condición
                td.text-center Se cultiva una relación de largo plazo
              tr
                td.text-center Concesiones
                td.text-center Se hace una concesión
                td.text-center Se demanda una concesión
                td.text-center Según los términos se hace o se demanda
              tr
                td.text-center Con el problema
                td.text-center Usualmente el problema no es grave
                td.text-center Se presenta principalmente con problemas graves
                td.text-center Se presenta principalmente con problemas graves
              tr
                td.text-center Con la gente
                td.text-center Buen trato y cordialidad
                td.text-center Buen trato
                td.text-center Buen trato y cordialidad
              tr
                td.text-center Con los otros
                td.text-center Relación de confianza
                td.text-center Relación de “desconfianza”
                td.text-center Neutral
              tr
                td.text-center Posición
                td.text-center Flexibilidad
                td.text-center Rígidos y estrictos
                td.text-center Según el interés
              tr
                td.text-center Avance
                td.text-center Se hacen ofertas
                td.text-center Se condiciona la oferta
                td.text-center Se exploran intereses
              tr
                td.text-center Límites
                td.text-center Se definen los límites
                td.text-center Se esconden
                td.text-center Se evita tenerlos
              tr
                td.text-center Unilateralidad
                td.text-center Se aceptan pérdidas (si las hay)
                td.text-center Se demandan las ganancias
                td.text-center La ganancia es mutua.

    Separador
    #t_5_4.titulo-segundo(data-aos="fade-right")
      .h3 5.4 Aplicabilidad

    .row.justify-content-center.mb-4
      .col-lg-7
        p.mb-4 Como se había mencionado, la negociación es un proceso basado en la comunicación recíproca de las partes negociantes mediante el intercambio de propuestas, con el objetivo de llegar a un acuerdo final que los beneficie a ambos.  
        p.mb-4  En el ámbito organizacional, la negociación es altamente competitiva y requiere una gran habilidad negociadora. En momentos de recesión económica, una buena negociación adquiere una alta importancia para la empresa.
        .cajon.color-primario.p-4  
          p Una de las estrategias más importantes para las empresas es la que se denomina “negociación comercial”, la cual requiere de profesionales calificados y capacitados en negociación para aportar beneficios a la empresa para coadyuvar en el alcance de los objetivos organizacionales.
      .col-lg-5
        img(src='@/assets/curso/tema5/img07.svg')(data-aos="fade-left")    
    separador
</template>

<script>
export default {
  name: 'Tema5',
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

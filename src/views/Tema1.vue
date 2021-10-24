<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Las necesidades y el deseo
    
    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        img(src='@/assets/curso/tema1/img01.png')(data-aos="fade-right")
      .col-lg-7.mb-0
        p.mb-4 Las necesidades en los seres humanos pueden caracterizarse como estados de carencia que percibe el ser humano ante diferentes situaciones; las cuales pueden ser de comportamiento, de pensamiento o de adversidades que se presentan. Contrario a otras apreciaciones, las necesidades no son creadas por la publicidad o el mercadeo, pues estas hacen parte de los seres humanos. 
        p.mb-4 Por otra parte, los deseos, son la “forma que adopta la necesidad” convertida en un elemento tangible, por ejemplo: una persona tiene la necesidad de alimento, pero desea calmar esa necesidad con una hamburguesa de una marca en especial. O una familia necesita una casa, pero la desea en la zona más exclusiva de su región.
        .cajon.color-primario.p-4(data-aos="fade-left")
          p Los deseos son influenciados por la sociedad en la que vive y se materializan en objetos que las satisfacen; es decir, los productos. En ese sentido, se puede decir que las necesidades son elementos constantes y que tienen un origen biológico, inherentes al ser humano. De otro lado los deseos son influenciados por la sociedad en la que vive y se materializan en objetos que los satisfacen. Son las necesidades convertidas en deseos, las que demandan los productos.
    p.mb-4 A continuación, se presenta una infografía en la que se muestra la escala de necesidades, en la que el ser humano satisface las necesidades de forma ascendente. Es decir; medida que satisface las básicas, busca por todos los medios satisfacer las siguientes, hasta llegar a la autorrealización:
    figure.mb-4
      img(src='@/assets/curso/tema1/img02.png')(data-aos="flip-up")
    separador

</template>

<script>
export default {
  name: 'Tema1',
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

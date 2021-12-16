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
    p.mb-4 A continuación, se presenta una infografía en la que se muestra la escala de requisitos, en la que el ser humano satisface las necesidades de forma ascendente. Es decir; a medida que satisface las básicas, busca por todos los medios satisfacer las siguientes, hasta llegar a la autorrealización:
    
    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img02.svg')
      .tarjeta.color-yellow-light.p-3(x="69%" y="25%")
        h4  Autorrealización o autoactualización.
        p Maslow describe estas necesidades como el cumplimiento de los ideales personales en una actividad específica. Autorrealizarse muchas veces implica la búsqueda de creatividad, talento, crecimiento, experiencias y descubrimiento (McLeod, 2007).
      .tarjeta.color-blue-light.p-3(x="75%" y="37%")
        h4 Necesidades de estima.
        p Las necesidades de estima o de reconocimiento son categorizadas por Maslow en dos niveles: un nivel inferior que hace referencia al respeto de los demás, tener un estatus, fama, reputación y otra de nivel superior, determinado por la necesidad de respeto por sí mismo, aquí la  confianza, la independencia y libertad juegan un papel importante.
      .tarjeta.color-blue-light.p-3(x="81%" y="48%")
        h4  Necesidades de afiliación y afecto.
        p Las necesidades de amor, afecto y pertenencia a un grupo social o de filiación, se evidencian cuando se muestra el deseo de tener un novio o novia, contraer matrimonio, de tener una familia, de ser parte de un grupo o una comunidad, de pertenecer a una iglesia o club.
      .tarjeta.color-red-light.p-3(x="89%" y="58%")
        h4 Necesidades de seguridad y protección.
        p Subiendo en la pirámide, encontramos las necesidades de seguridad personal, relacionadas directamente con el orden, seguridad física, empleabilidad e ingresos, seguridad familiar, de salud y la protección. Aquellas que permitan que la persona pueda sentirse segura.
      .tarjeta.color-red-light.p-3(x="97%" y="69%")
        h4 Necesidades básicas.
        p Las necesidades básicas o fisiológicas, tienen origen biológico, es decir, del ser humano y están orientadas a su propia supervivencia. En esta primera escala (o base de la pirámide) se encuentra la necesidad de respirar, de tomar agua, comer, descansar o dormir, sexo o refugio.
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

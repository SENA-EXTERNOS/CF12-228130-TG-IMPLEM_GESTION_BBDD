<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a los sistemas de BD
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right").mb-lg-0.mb-3
        p Una de las grandes metas de las organizaciones a nivel mundial, en el mercado internacional, es mostrar competitividad y eficiencia para sostenerse y así alcanzar el crecimiento mercantil. Para conseguir esta meta se debe tener en cuenta la gran demanda de datos y la necesidad de gestionarlos; es así como, la implementación del sistema de gestión de bases de datos (SGBD), se convierte en una herramienta imprescindible para el respetivo manejo de los datos, evidenciando un crecimiento en la gestión de los mismos y mejorando la eficiencia para su utilización en la toma de decisiones.
          br
          br
          | Las bases de datos son activos intangibles muy importantes para la organización, en ellas se almacena la gran mayoría de la información obtenida de los resultados del negocio en términos de costos, márgenes del mercado, ventas, clientes, rentabilidad y proveedores, etc. Estas disponen de información estratégica, que además es protegida por la ley; es por ello que, la disponibilidad de dicha información sin control, podría provocar sanciones y la pérdida de credibilidad ante los clientes.
      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/1.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #ffecc1 ")
          p.mb-0 En la actualidad la información operativa y estratégica de la que dispone una empresa, se encuentra estructurada en bases de datos. Teniendo en cuenta que estos sistemas de gestión manipulan, operan y administran cada uno de los datos e información valiosa de la organización, gran parte del presupuesto se invierte en BD, tanto en copias de seguridad, actualizaciones, mejoraras del rendimiento, accesibilidad, como en el cuidado de la calidad de los datos. Un objetivo crucial para el CEO de la compañía es garantizar la gestión en las bases de datos, ya que es primordial para ejecutar el rol de soporte de las diferentes infraestructuras y procesos que garantizan sus activos.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Conceptos generales sobre BD
    p.mb-4(data-aos='fade-right') Como primera medida debe definirse el término “base de datos”, este es un conjunto de datos clasificados metódicamente y correlaciones entre ellos, con el propósito de lograr una eficiencia y valor de esos datos. “Una base de datos es un conjunto de datos almacenados en memoria externa que están organizados mediante una estructura de datos” (Marqués, 2010).
    .titulo-square.d-flex.align-items-center.mb-4
      i.fas.fa-square(style="color: #FFB30B   ").me-3.mb-0
      h3.mb-0 Origen bases de datos
    p.mb-5(data-aos='fade-right') A continuación, se explica cronológicamente el origen de las bases de datos:
    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="1761")
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/intro/intro.jpg')})`}"
            style='width: 50%'
            )
          .bloque-texto-g__texto.p-4
            p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde aprenderá sobre la evolución de las bases de datos, los diferentes tipos que encontramos, así como también, información sobre el diseño de bases de datos. 
              br
              br
              |En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xUpr20u9dmc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

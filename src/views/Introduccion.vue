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
            p.mb-0 Bienvenido estimado aprendiz, el presente componente formativo contiene información sobre la evolución de las bases de datos, los diferentes tipos que encontramos, así como también información sobre el diseño de bases de datos. Les invito a ver el video de presentación para identificar el contexto de aprendizaje. 
              br
              br
              |#[b A continuación, se muestra el video de presentación de las temáticas abordadas, es recomendable observarlo con atención:]
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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

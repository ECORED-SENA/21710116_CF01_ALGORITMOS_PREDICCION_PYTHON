<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    
    .bg-1.br-8.p-3.pb-md-0.mb-4
      .row.align-items-center
        .col-md-3.mb-3.mb-md-0
          img(src="@/assets/curso/temas/intro/ico.svg", alt="")
        .col-md-9
          p.mb-0 Tenga una especial bienvenida a este componente formativo denominado 
            b “Introducción a la analítica predictiva”
            |, para comenzar el recorrido por el mismo, explore la información que se ofrece en el siguiente video:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video.


    
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .bg-1.br-8.p-3.mb-4
      .row.align-items-center.justify-content-center
        .col-lg-1.col-3.mb-3.mb-lg-0
          img(src="@/assets/curso/temas/ico-sint.svg", alt="")
        .col-lg-11
          p.mb-0 Aquí finaliza el estudio de las temáticas de este componente formativo. En este punto, analice el esquema que se presenta a continuación y haga su propia síntesis de los contenidos. 
            b ¡Adelante!

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema de los contenidos desarrollados en este componente formativo. Tema principal: la introducción a la analítica predictiva. Temas integradores: conjuntos de datos, procesamiento de datos, algoritmos de aprendizaje supervisado y no supervisado, métricas de evaluación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

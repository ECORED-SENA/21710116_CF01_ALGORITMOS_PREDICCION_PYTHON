<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-lg-0
      .titulo-principal__numero
        span 2
      h1 Preprocesamiento de datos

    .row.fondo-tema2.align-items-center.pt-5.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center.mb-4
            .col-lg-4.col-9.mb-3.mb-lg-0(data-aos="fade-right")
              img(src="@/assets/curso/temas/t2/img.svg", alt="")
            .col-lg-8(data-aos="fade-left")
              p Cuando se trata de algoritmos de predicción o clasificación en aprendizaje supervisado, existen datos o características independientes y un valor dependiente. Si existen demasiadas variables predictoras, es posible que muchas de ellas sean irrelevantes y es conveniente eliminarlas.  
              .bg-white.br-8.p-3.p-md-4.mb-4.mb-lg-0
                .row.align-items-center
                  .col-md-2.mb-3.mb-lg-0
                    img.px-md-2(src="@/assets/curso/temas/t2/ico.svg", alt="")
                  .col-md-10
                    p.mb-0 Si una de las características no es informativa, es conveniente eliminarla; por ejemplo, de acuerdo con determinada investigación realizada, puede ser más significativa la edad de una persona que el número de su casa. 

          h5.mb-4(data-aos="fade") Existen varias formas para preprocesar la información; entre las más destacadas están:

          .row.justify-content-center.align-items-center
            .col-lg-8.mb-3.mb-lg-0(data-aos="fade-right")
              AcordionA(tipo="a" clase-tarjeta="tarjeta bg-3")
                .row.justify-content-end(titulo="Binarización de características")
                  .col-11
                    p El principal objetivo de esta transformación es mejorar una observación o entidad, eliminando, cambiando o añadiendo información, una transformación sencilla puede ser transformar un tipo de #[em data set] en otro, por ejemplo, transformar un atributo de tipo entero a flotante. Una transformación muy común es la binarización que no es más que transformar un atributo de tipo categórico a un atributo booleano.
                .row.justify-content-end(titulo="Discretización")
                  .col-11
                    p Consiste en convertir un valor numérico continuo en intervalos, esto es debido a que algunos algoritmos de clasificación solo aceptan atributos categóricos, esto reduce el tamaño de los datos para su mejor entendimiento.
                    p Existen varias formas de discretización, pero una de las más conocidas es 
                      em binning 
                      | que consiste en agrupar valores en contenedores 
                      em “bins”
                      | , por ejemplo, se puede agrupar las edades que son valores numéricos continuos en rangos o en grupos de edades como adultos, adulto mayor, bebé, niño, joven, etc.
                .row.justify-content-end(titulo="Normalización")
                  .col-11
                    p Se trata de uniformar los valores de las características no uniformes en rangos diferentes, y de esta forma hacer que los rangos sean consistentes entre las variables y permitan comparación imparcial entre ellas, de esta manera se facilitará algunos análisis estadísticos posteriores.
                .row.justify-content-end(titulo="Formas de normalizar")
                  .col-11
                    p.mb-1 #[b Escalado simple:] se divide cada valor de una característica por el valor máximo de esa característica. Los valores, por tanto, están entre 0 y 1.
                    p.mb-1 #[b Escalado min-max:] a cada valor de una característica se le resta el valor mínimo de todos los datos de la característica y se divide la diferencia entre el valor mínimo y el máximo, los valores estarán entre 0 y 1.
                    p #[b #[em Z-Score] o puntuación estándar:] a cada valor de una característica se le resta la media de la característica y este resultado se divide por la desviación estándar, los resultados tomarán valores negativos y positivos.
                .row.justify-content-end(titulo="Imputación de valores faltantes")
                  .col-11
                    p Es la técnica de rellenar los valores que hacen falta de una variable o característica, se pueden usar medias, medianas, modas para completar los datos. Otra forma es encontrar esos valores usando modelos predictivos, una solución a los valores faltantes puede ser borrar la variable, aunque esto es una medida drástica, otra forma menos drástica puede ser borrar el registro que contiene el dato perdido, pero se puede eliminar información valiosa.
            .col-lg-4.col-9(data-aos="fade-left")
              img(src="@/assets/curso/temas/t2/img2.png", alt="")



</template>

<script>
export default {
  name: 'Tema2',
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

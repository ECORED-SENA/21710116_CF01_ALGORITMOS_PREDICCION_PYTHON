<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.pb-0.p-md-5.pb-md-0.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Métricas de evaluación  

    .row 
      .col-lg-4.mb-4(data-aos="fade-right")
        .bg-9.p-4.h-100
          p.mb-0 Es fundamental medir el rendimiento del modelo entrenado, el modelo generaliza sobre los datos no vistos, es lo que define a los modelos de aprendizaje automático adaptables frente a los no adaptables.
      .col-lg-8.mb-4(data-aos="fade-left")
        .bg-7.p-3.pb-md-0.h-100
          .row.align-items-center
            .col-md-4.mb-3.mb-md-0
              img(src="@/assets/curso/temas/t5/img.svg", alt="")
            .col-md-8
              p.mb-0 Al hacer uso de las diferentes métricas para la evaluación del rendimiento del modelo se tiene la posibilidad de mejorar la predicción del mismo antes de ponerlo en marcha en la producción de los datos no vistos con anterioridad.

    .row 
      .col-lg-4.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/temas/t5/img2.svg", alt="")
      .col-lg-8.mb-4(data-aos="fade-left")
        h5.mb-4 En relación con las métricas de evaluación, tenga presente:
        .row.justify-content-center.mb-4(data-aos="fade-down") 
          .col-md-6.mb-3
            .tarjeta.t-hover.text-center.h-100.p-4 
              img.m-auto.mb-3(src="@/assets/curso/temas/t5/tarj1-img.svg", alt="" style="max-width: 120px;")
              p.mb-0 Si no se realiza una evaluación adecuada del modelo aprendizaje automático utilizando diferentes métricas y se usa solo la precisión puede darse un problema cuando el modelo respectivo se despliega sobre datos no vistos y puede dar lugar a malas predicciones.
          .col-md-6.mb-3
            .tarjeta.t-hover.text-center.h-100.p-4 
              img.m-auto.mb-3(src="@/assets/curso/temas/t5/tarj1-img2.svg", alt="" style="max-width: 120px;")
              p.mb-0 Esto sucede porque los modelos no aprenden, sino que memorizan; por lo tanto, no pueden generalizar bien sobre datos no vistos. 

    .bg-8.br-5.w-fit.px-3.py-2.mb-4(data-aos="fade")
      h4.mb-0 Métricas de evaluación del modelo

    p.mb-4(data-aos="fade") Las métricas de evaluación sirven para medir el rendimiento de un modelo entrenado; lo que se busca es mejorar el poder predictivo del modelo, antes de enviarlo a producción.

    .row.justify-content-center.align-items-end 
      .col-lg-8.mb-4(data-aos="fade-right")
        .bg-5.p-4.mb-4
          p.mb-0 Al no realizar las métricas de evaluación, se corre el riesgo de obtener malas predicciones, lo cual se debe a que el modelo no aprende; en estos casos, solo memoriza. Por lo tanto, no puede generalizar a causa de datos no vistos anteriormente. 
        p(data-aos="fade") Una de las métricas de evaluación más usada es la 
          span.fw-bold.bg-4.p-1 Matriz de confusión.
          |  Se trata de una representación de los resultados de las predicciones; estos resultados son representados en forma de matriz, son obtenidos a través de las pruebas binarias que se utilizan para descubrir el rendimiento del modelo de clasificación y comparados con un conjunto de datos de prueba, de los cuales ya se conocen los valores reales.
        h5 La matriz de confusión se representa de la siguiente manera:
      .col-lg-4.col-10.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/t5/img3.svg", alt="")

    .titulo-sexto.color-acento-contenido.mb-2
      p.mb-0 #[b Tabla 1.] Representación matriz de confusión
    .tabla-a.color-secundario.mb-5 
      table
        thead
          tr.bg-secundario.text-white
            th(colspan="4") Resultado de la predicción
        tbody
          tr
            td.h4.text-center(rowspan="4") Valor actual
          tr
            td 
            td Positivo
            td Negativo
          tr
            td Positivo
            td TN #[br] Verdadero Negativo
            td FP #[br] Falso Positivo
          tr
            td Negativo
            td FN #[br] Falso Negativo
            td TP #[br] Verdadero Positivo 

    h5.mb-4(data-aos="fade") Como se muestra en la anterior figura, las predicciones pueden ser uno de 4 resultados posibles; se basa en si coincide, o no, con el valor real:

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-lg-3.col-md-6.mb-3
        .tarjeta.t-hover.text-center.h-100.p-4 
          img.m-auto.mb-3(src="@/assets/curso/temas/t5/tarj2-img.svg", alt="" style="max-width: 110px;")
          h4 Verdadero Positivo
          p.mb-0 Valor predicho es verdadero y el valor es verdadero en realidad.
      .col-lg-3.col-md-6.mb-3
        .tarjeta.t-hover.text-center.h-100.p-4 
          img.m-auto.mb-3(src="@/assets/curso/temas/t5/tarj2-img2.svg", alt="" style="max-width: 110px;")
          h4 Verdadero Negativo
          p.mb-0 Valor predicho es falso y el valor es falso en la realidad.
      .col-lg-3.col-md-6.mb-3
        .tarjeta.t-hover.text-center.h-100.p-4 
          img.m-auto.mb-3(src="@/assets/curso/temas/t5/tarj2-img.svg", alt="" style="max-width: 110px;")
          h4 Falso Positivo
          p.mb-0 Valor predicho es verdadero y el valor es falso en la realidad.
      .col-lg-3.col-md-6.mb-3
        .tarjeta.t-hover.text-center.h-100.p-4 
          img.m-auto.mb-3(src="@/assets/curso/temas/t5/tarj2-img2.svg", alt="" style="max-width: 110px;")
          h4 Falso Negativo
          p.mb-0 Valor predicho es falso y el valor es verdadero en la realidad.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .bg-7.tarjeta.p-3.p-md-4.mb-4
          .row.align-items-center.justify-content-around
            .col-md-2.col-4.mb-3.mb-lg-0.px-lg-4
              img.px-lg-4(src="@/assets/curso/temas/t5/ico.svg", alt="")
            .col-md-10
              p.mb-0 Para aceptar o rechazar una hipótesis, se debe tener en cuenta: si esta es nula y falsa, debe ser descartada; y si es nula y verdadera, debe ser aceptada. 


    .row.fondo3-tema3.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row

          .bg-8.br-5.w-fit.px-3.py-2.mb-4(data-aos="fade")
            h4.mb-0 Tipos de errores

          p.mb-4(data-aos="fade") Existen dos tipos de errores que pueden ocurrir, se les conoce como errores de 
            span.fw-bold.bg-4.p-1 TIPO I
            |  y errores de 
            span.fw-bold.bg-4.p-1 TIPO II.

          .row.mb-3(data-aos="fade-down") 
            .col-lg-6.mb-4
              .tarjeta.bg-white.bx-sh1.h-100
                img(src="@/assets/curso/temas/t5/tarj3-img.png", alt="")
                .p-4.text-center
                  h4.tc-1 Error de TIPO I
                  p Este error equivale a los falsos positivos (FP), es el rechazo de una hipótesis nula, pero esta es verdadera.
            .col-lg-6.mb-4
              .tarjeta.bg-white.bx-sh1.h-100
                img(src="@/assets/curso/temas/t5/tarj3-img2.png", alt="")
                .p-4.text-center
                  h4.tc-1 Error de TIPO II
                  p Este error equivale a los falsos negativos (FN), consiste en aceptar una hipótesis falsa nula. 

          h5.mb-4(data-aos="fade") Conozca cómo se pueden evaluar este tipo de errores:

          .tarjeta.bg-white.bx-sh3.p-4.mb-4
            LineaTiempoC.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4(titulo="Exactitud")
                .col-md-8.mb-4.mb-md-0
                  h4.tc-1 Exactitud
                  p Esta métrica es usada cuando las clases son aproximadamente iguales en tamaño; se encarga de medir el porcentaje de casos en que el modelo ha acertado:
                  .bg-secundario.br-5.w-fit.p-2.px-3
                    p.mb-0.text-white Exactitud = (TP + TN) / (TP + TN + FP + TP)
                .col-md-2
                  img.px-md-4(src='@/assets/curso/temas/t5/slide-img1.svg', alt='')
              .row.justify-content-center.align-items-center.my-4(titulo="Precisión")
                .col-md-8.mb-4.mb-md-0
                  h4.tc-1 Precisión
                  p.mb-0 Esta métrica es usada para medir la calidad del modelo en tareas de clasificación.
                  p Se usa la siguiente fórmula:
                  .bg-secundario.br-5.w-fit.p-2.px-3
                    p.mb-0.text-white Precisión = TP / (TP + FP) 
                .col-md-2
                  img.px-md-4(src='@/assets/curso/temas/t5/slide-img2.svg', alt='')
              .row.justify-content-center.align-items-center.my-4(titulo="Exhaustividad")
                .col-md-8.mb-4.mb-md-0
                  h4.tc-1 Exhaustividad
                  p.mb-0 Esta métrica es usada para mostrar la cantidad de verdaderos positivos que el modelo es capaz de identificar.
                  p Se usa la siguiente fórmula para calcular la exhaustividad:
                  .bg-secundario.br-5.w-fit.p-2.px-3
                    p.mb-0.text-white Exhaustividad = TP / (TP + FN)
                .col-md-2
                  img.px-md-4(src='@/assets/curso/temas/t5/slide-img3.svg', alt='')
              .row.justify-content-center.align-items-center.my-4(titulo="Puntuación F1")
                .col-md-8.mb-4.mb-md-0
                  h4.tc-1 Puntuación F1
                  p.mb-0 Esta métrica combina la precisión y exhaustividad en un solo valor, comprendido entre 0 y 1, donde la mejor puntuación es 1 y la peor es 0.
                  p Esta métrica se calcula utilizando la fórmula de la media armónica entre la precisión y la exhaustividad:
                  .bg-secundario.br-5.w-fit.p-2.px-3
                    p.mb-0.text-white F1 = 2 *((precisión * exhaustividad) / (precisión + exhaustividad))
                .col-md-2
                  img.px-md-4(src='@/assets/curso/temas/t5/slide-img4.svg', alt='')






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

<style lang="sass"></style>

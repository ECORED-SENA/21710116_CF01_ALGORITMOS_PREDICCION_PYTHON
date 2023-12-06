<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Algoritmos de aprendizaje supervisado

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Los algoritmos de aprendizaje supervisado son importantes en la predicción de la información, específicamente usando algoritmos de regresión y algoritmos de clasificación de datos. En este tipo de aprendizaje los algoritmos trabajan con observaciones, los cuales contienen variables de entrada y variables de salida o etiquetas relacionadas con las variables de entrada. Lo principal es comprender la relación entre las variables de salida y los datos de entrada.
        h5 Estos son los pasos básicos de una máquina de aprendizaje supervisado:
      .col-lg-4.col-9.mb-3.mb-lg-0(data-aos="fade-left")
        img(src="@/assets/curso/temas/t3/img.svg", alt="")
    
    .row.fondo-tema3.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12.col-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade")
              p.mb-0 #[b Figura 1.] Pasos básicos de una máquina de aprendizaje supervisado
            figure.mb-4(data-aos="fade-down")
              img.d-md-block.d-none(src="@/assets/curso/temas/t3/fig1-pc.svg", alt="Esquema de diagrama que enuncia los pasos básicos de la máquina de aprendizaje supervisado.")
              img.d-md-none.d-block(src="@/assets/curso/temas/t3/fig1-mob.svg", alt="Esquema de diagrama que enuncia los pasos básicos de la máquina de aprendizaje supervisado.")

          p(data-aos="fade") Las dos etapas básicas son: el procesamiento y el análisis de los datos y la construcción del modelo supervisado. Pero muchas veces es necesario realizar la extracción y la transformación de las características, selección de las características relevantes y la reducción de las dimensiones, que se usan tanto para los datos de entrenamiento, como para los nuevos datos (para los cuales el modelo va a predecir los resultados).

          p.mb-5(data-aos="fade") Los 
            span.fw-bold.bg-4.p-1 datos de entrenamiento
            |  y los 
            span.fw-bold.bg-4.p-1 datos de prueba
            |  son otros dos conceptos muy importantes en el aprendizaje automático:

          .row(data-aos="fade-down") 
            .col-lg-6.mb-4
              .tarjeta.bg-white.bx-sh1.h-100
                img(src="@/assets/curso/temas/t3/tarj1.png", alt="")
                .p-4.text-center
                  h4.tc-1 Datos de entrenamiento 
                  p Representan la experiencia que el algoritmo usa para aprender. Cada observación consiste de una variable observada y una o más variables de entrada observadas.
            .col-lg-6.mb-4
              .tarjeta.bg-white.bx-sh1.h-100
                img(src="@/assets/curso/temas/t3/tarj2.png", alt="")
                .p-4.text-center
                  h4.tc-1 Datos de prueba
                  p Conjunto de observaciones usadas para evaluar la precisión del modelo usando alguna métrica.  Es importante que las observaciones del set de prueba no contengan datos del set de entrenamiento porque, de lo contrario, será difícil saber si el algoritmo aprendió o simplemente memorizó la información.
          
          p.mb-4(data-aos="fade") El modelo entrenado, por tanto, puede ser utilizado, posteriormente, para predecir las salidas de cualquier conjunto nuevo de datos de entrada. Estas técnicas se definen como  
            span.fw-bold.bg-4.p-1 supervisadas,
            |  puesto que el modelo aprende de la muestra de los datos y de sus salidas en la fase de entrenamiento.
          
          .bg-white.tarjeta.p-3.p-md-4.bx-sh2.mb-4(data-aos="fade-down")
            .row.align-items-center
              .col-md-1.col-4.mb-3.mb-lg-0
                img(src="@/assets/curso/temas/t3/ico.svg", alt="")
              .col-md-11
                p.mb-0 Las técnicas de aprendizaje supervisado contemplan dos clases principales: la 
                  span.fw-bold.tc-1 clasificación 
                  | y la 
                  span.fw-bold.tc-1 regresión
                  | , dependiendo del tipo de problema de aprendizaje automático por resolver.  

          .col-lg-6(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 2.] Aprendizaje supervisado
            figure
              img(src="@/assets/curso/temas/t3/fig2.svg", alt="Esquema que ilustra las formas del aprendizaje supervisado: por clasificación y por regresión.")


    Separador 

    #t_3_1
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 3.1 Algoritmos de regresión
    
    p(data-aos="fade") Uno de los principales objetivos del 
      span.fw-bold.bg-4.p-1 aprendizaje automático
      |  es estimar un valor y esto se puede realizar mediante tareas de regresión. 
    
    h5.mb-4(data-aos="fade") Sobre los algoritmos de regresión, tenga presente:

    .row.fondo2-tema3.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

        .tarjeta--container.row.mb-5(data-aos="fade-down") 
          .col-md.bg-6.text-center.p-4.mb-4
            .row.justify-content-center.mb-4
              .col-7
                img(src='@/assets//curso/temas/t3/ico1.svg', alt='')
            p.text-white Los datos usados en los modelos de regresión usan atributos (características o variables de entrada).
          .col-md.bg-1.text-center.p-4.mb-4
            .row.justify-content-center.mb-4
              .col-7
                img(src='@/assets//curso/temas/t3/ico2.svg', alt='')
            p Estas características o variables de entrada se conocen como variables independientes, explicativas o predictoras.
          .col-md.bg-6.text-center.p-4.mb-4
            .row.justify-content-center.mb-4
              .col-7
                img(src='@/assets//curso/temas/t3/ico3.svg', alt='')
            p.text-white Los respectivos valores de salida numéricos continuos (de estas variables) se conocen como variables de respuesta, dependientes o de resultado.
          .col-md.bg-1.text-center.p-4.mb-4
            .row.justify-content-center.mb-4
              .col-7
                img(src='@/assets//curso/temas/t3/ico4.svg', alt='')
            p Los algoritmos de predicción basados en la regresión hacen uso de esta información y aprenden a relacionar las entradas con sus respectivas salidas.
          .col-md.bg-6.text-center.p-4.mb-4
            .row.justify-content-center.mb-4
              .col-7
                img(src='@/assets//curso/temas/t3/ico5.svg', alt='')
            p.text-white Con este conocimiento, entonces, ya se puede predecir las respuestas de los registros nuevos. 

          p.mb-4(data-aos="fade") Por su parte, la regresión lineal simple es usada para estimar los valores del mundo real, tales como el precio de las casas, el número de llamadas, las ventas totales, etc., basada en las variables continuas. 

          .col-lg-8.mb-4(data-aos="fade-right")
            .bg-white.br-8.p-3.p-md-4.mb-4
              .row.align-items-center
                .col-md-2.col-3.mb-3.mb-lg-0
                  img.px-md-3(src="@/assets/curso/temas/t3/ico6.svg", alt="")
                .col-md-10
                  p.mb-0 El objetivo de la regresión es obtener la mejor ecuación lineal que será el modelo para representar una relación entre variables predictoras y variables dependientes. La línea de mejor ajuste es conocida como línea de regresión.  
            p Una empresa, por ejemplo, podría usar la regresión lineal para conocer si se están disminuyendo las ventas o está creciendo el número de clientes, de manera que para las ventas futuras estas predicciones son útiles porque permiten tomar decisiones en cuanto a las ventas y el crecimiento.
            h5.mb-4 Estos son algunos modelos de regresión y generalidades de los mismos:
            .tarjeta.bg-white.bx-sh2.p-4
              SlyderE(indicadores="derecha" data-aos="fade-down")
                .row.align-items-center.justify-content-around
                  .col-md-9
                    h4.tc-1.mb-4 Modelo de regresión lineal simple
                    p Se caracteriza por establecer la relación entre dos variables mediante una línea recta y una línea recta en el plano cartesiano. Se puede construir con una pendiente y una intersección.
                    p Un término importante es la propiedad #[b coeficiente de correlación de una regresión lineal] que mide el grado de relación entre las variables predictoras y dependientes, las cuales deben ser cuantitativas y continuas.
                  .col-md-2.col-5 
                    img(src="@/assets/curso/temas/t3/slide1.svg", alt="")
                .row.align-items-center.justify-content-around
                  .col-md-9
                    h4.tc-1.mb-4 Modelo de regresión lineal múltiple
                    p Cuando una variable dependiente no se puede explicar con una sola variable dependiente, se puede usar la regresión lineal múltiple: puede ser que se requiera usar varias variables dependientes para explicar la variable dependiente.
                  .col-md-2.col-5 
                    img(src="@/assets/curso/temas/t3/slide2.svg", alt="")
                .row.align-items-center.justify-content-around
                  .col-md-9
                    h4.tc-1.mb-4 Uso de los modelos de regresión
                    p Los modelos de regresión, por ejemplo, lineal múltiple, se pueden usar en muchas aplicaciones, pero hay que tener en cuenta algunos posibles problemas que pueden ocasionar que la regresión no sea un modelo óptimo.
                  .col-md-2.col-5 
                    img(src="@/assets/curso/temas/t3/slide3.svg", alt="")
                .row.align-items-center.justify-content-around
                  .col-md-9
                    h4.tc-1.mb-4 Multicolinealidad o dependencia casi lineal
                    p Se presenta cuando hay una relación suficientemente grande entre las variables predictoras x<sub>i</sub>.
                  .col-md-2.col-5 
                    img(src="@/assets/curso/temas/t3/slide4.svg", alt="")
                .row.align-items-center.justify-content-around
                  .col-md-9
                    h4.tc-1.mb-4 
                    p Al aumentar la variable explicativa se observa mayor variación en la nube de puntos de la variable dependiente.
                  .col-md-2.col-5 
                    img(src="@/assets/curso/temas/t3/slide5.svg", alt="")
          .col-lg-4.col-9.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/temas/t3/img2.svg", alt="")


    Separador 

    #t_3_2
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 3.2 Algoritmos de clasificación 

    p(data-aos="fade") Los algoritmos de clasificación son un campo del aprendizaje supervisado, en el cual el objetivo es predecir etiquetas de salida o variables de naturaleza categórica, relacionadas con lo que el modelo ha aprendido en el entrenamiento. Cada respuesta de salida pertenece a una categoría o clase de tipo discreto.  
    h5.mb-4(data-aos="fade") El siguiente, es un ejemplo de este tipo de algoritmo:

    .row.justify-content-center.mb-4
      .col-lg-8.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[b Figura 3.] Ejemplo algoritmos de clasificación 
        figure
          img(src="@/assets/curso/temas/t3/fig3.svg", alt="Ilustración gráfica de un algoritmo de clasificación.")
      .col-lg-4.mb-4(data-aos="fade-left")
        .tarjeta.bg-5.p-4
          p En el caso de las compras de un cliente potencial el resultado es: sí compra o no compra; el resultado de un tipo de tumor puede ser maligno o benigno; un comportamiento de una transacción puede ser una anómala o no, y un cliente puede pagar un crédito o no. 
          h5 Otros ejemplos de aplicaciones de algoritmos de clasificación son:
          .bg-white.p-4
            ul.lista-ul--color.fa-ul.mb-0
              li.mb-2 
                i.fas.fa-arrow-right
                | La detección de fraudes.
              li.mb-2 
                i.fas.fa-arrow-right
                span.mb-0 La detección de #[em spam].
              li.mb-2 
                i.fas.fa-arrow-right
                | La clasificación de enfermedades.
              li.mb-2 
                i.fas.fa-arrow-right
                | Diagnósticos basados en la edad, el sexo y el azúcar en la sangre.
              li.mb-2 
                i.fas.fa-arrow-right
                | La clasificación de imágenes.
              li.mb-0
                i.fas.fa-arrow-right
                | La identificación de caracteres y la clasificación de posibles clientes. 

    .bg-8.br-5.w-fit.px-3.py-2.mb-4(data-aos="fade")
      h4.mb-0 Regresión logística

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/t3/img3.png", alt="")
      .col-lg-8(data-aos="fade-left")
        .row.align-items-center.mb-4
          .col-md-3.mb-3.mb-lg-0.d-none.d-md-block
            img(src="@/assets/curso/temas/t3/img4.svg", alt="")
          .col-md-9
            .bg-1.br-8.p-4.py-3
              p.mb-0 Es un modelo de clasificación que usa un 
                span.tc-1.fw-bold método de clasificación binaria 
                | o multinomial. Se trata de un método estadístico muy simple y eficiente para resolver problemas de clasificación lineal y es muy usado en la industria. 
        p La respuesta de la regresión logística puede ser una variable dicotómica, es decir, tiene dos respuestas posibles. Por ejemplo, sí o no, ok o no ok, positivo o negativo, etc., cuando la regresión logística es binaria; pero también existe la 
          span.fw-bold.bg-4.p-1 regresión logística multinomial
          |  en la que los valores de salida pueden presentar tres o más categorías de tipo nominal:
        img(src="@/assets/curso/temas/t3/ecuac.svg", alt="Imagen que muestra una ecuación del modelo que predice la probabilidad de cierta clase, dado un conjunto de valores independientes.")

    .bg-8.br-5.w-fit.px-3.py-2.mb-4(data-aos="fade")
      h4.mb-0 Redes neuronales artificiales

    p.mb-4(data-aos="fade") Una neurona es la unidad básica de procesamiento que se va a encontrar dentro de una red neuronal; es similar a una neurona en el cerebro: recibe estímulos a través de conexiones de entrada, con estos valores la neurona realiza un cálculo interno y genera un valor de salida.

    .row.justify-content-center.mb-4
      .col-lg-12 
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[b Figura 4.] Neurona
      .col-lg-8.mb-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/t3/fig4.svg", alt="Esquema gráfico que ejemplifica la unidad básica de procesamiento de la red neuronal.")
      .col-lg-4.mb-4(data-aos="fade-left")
        .br-8.bg-5.p-4.h-100
          img.m-auto.mb-4(src="@/assets/curso/temas/t3/img5.svg", alt="" style="max-width: 135px;")
          .bg-white.p-4
            p.mb-0 Como una sola neurona no puede resolver muchos problemas, entonces, se construyen redes neuronales, una red neuronal se construye en capas y cada capa tiene neuronas.

    p.mb-4(data-aos="fade") Existen capas intermedias llamadas capas ocultas. Los valores de entrada se fijan en la primera capa o capa de entrada y los valores se transportan por todas las capas hasta la capa de salida. Cada unidad de conexión tiene un peso o una ponderación.

    .row.justify-content-center.mb-4
      .col-lg-12 
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[b Figura 5.] Red neuronal 
      .col-lg-8.mb-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/t3/fig5.svg", alt="Ilustración que muestra la estructura básica de una red neuronal.")
      .col-lg-4.mb-4(data-aos="fade-left")
        .br-8.bg-5.p-4.h-100
          img.m-auto.mb-4(src="@/assets/curso/temas/t3/img6.svg", alt="" style="max-width: 90px;")
          .bg-white.p-4
            p.mb-0 Al principio todas las ponderaciones son aleatorias y los resultados pueden ser ilógicos y erróneos, pero la red va aprendiendo a través del entrenamiento, a medida que se entrena la red con datos conocidos, la predicción de la red mejora sustancialmente.

    .row.fondo3-tema3.align-items-center.py-4.pb-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row

          .bg-8.br-5.w-fit.px-3.py-2.mb-4(data-aos="fade")
            h4.mb-0 K-vecinos más cercanos

          .row.mb-2(data-aos="fade-down")
            .col-md-4.px-0.mb-4
              img(src="@/assets/curso/temas/t3/img7.png", alt="")
            .col-md-8.px-0.mb-4
              .bg-7.p-4.px-lg-5.h-100.d-flex.align-items-center
                p.mb-0 Es un método de clasificación que estima la probabilidad de que un dato sea parte de un grupo u otro, basado en que el grupo de este dato es más cercano. Es un método no paramétrico, no tiene en cuenta las distribuciones de los datos, el principal objetivo es determinar a qué grupo de datos pertenece un punto. 
          
          p.mb-4(data-aos="fade") Para entender mejor este tipo de algoritmo revise los siguientes pasos en los que se resaltan algunos ejemplos:

          .tarjeta.bg-white.bx-sh3.p-4
            LineaTiempoC.color-acento-contenido
              .row.justify-content-center.my-4(titulo="Ejemplo 1")
                .col-md-5.mb-4.mb-md-0
                  p Para clasificar una instancia desconocida el algoritmo calcula la distancia entre el punto y los puntos en los datos de entrenamiento. Esta distancia se calcula usando la distancia euclidiana, manhattan, haming, minkowsky. La más usada es la distancia euclidiana.
                .col-md-5
                  img(src='@/assets/curso/temas/t3/slide2-img1.svg', alt='Imagen que muestra representaciones gráficas de distintos tipos de clasificación de distancias: euclidiana, Manhattan, Haming, Minkowsky.')
              .row.justify-content-center.my-4(titulo="Ejemplo 2")
                .col-md-5.mb-4.mb-md-0
                  p Si se desea clasificar el punto amarillo y se escoge k = 2, los dos puntos más cercanos son los puntos verdes, en este caso el punto amarillo se clasifica como verde.
                .col-md-5
                  img(src='@/assets/curso/temas/t3/slide2-img2.svg', alt='Imagen de un plano donde se busca calcular una instancia desconocida.')
              .row.justify-content-center.my-4(titulo="Ejemplo 3")
                .col-md-5.mb-4.mb-md-0
                  p Si se desea clasificar el punto amarillo y se escoge k=3, se observa que los dos puntos más cercanos son verdes y el tercer punto más cercano es rojo; se tienen dos verdes y uno rojo, por tanto, por mayoría, se clasifica el punto desconocido como parte de los verdes.
                .col-md-5
                  img(src='@/assets/curso/temas/t3/slide2-img3.svg', alt='Ilustración que ejemplifica la clasificación de un punto desconocido, según el ejemplo propuesto.')
              .row.justify-content-center.my-4(titulo="Ejemplo 4")
                .col-md-5.mb-4.mb-md-0
                  p La distancia euclídeana para calcular distancias entre puntos es una de las más utilizadas en #[em Machine Learning].
                .col-md-5
                  img(src='@/assets/curso/temas/t3/slide2-img4.svg', alt='Gráfico que muestra la distancia, en línea recta, entre dos puntos (distancia euclideana).')
              .row.justify-content-center.my-4(titulo="Ejemplo 5")
                .col-md-5.mb-4.mb-md-0
                  p Si las variables están en rangos muy diferentes, entonces, no tiene mucho sentido calcular la distancia y se deben normalizar las variables. 
                .col-md-5
                  img(src='@/assets/curso/temas/t3/slide2-img5.png', alt='Imagen que muestra variables en planos diferentes.')


    .bg-8.br-5.w-fit.px-3.py-2.mb-4(data-aos="fade")
      h4.mb-0 Árboles de clasificación

    p(data-aos="fade") Son una técnica de #[em Machine Learning] de aprendizaje supervisado que predice las respuestas mediante las reglas de decisión, así el algoritmo permite segmentar y clasificar los distintos objetos.
    h5.mb-4(data-aos="fade") Para entender su estructura revise, detenidamente, la siguiente información:

    .row 
      .col-lg-4.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/t3/img8.png", alt="")
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-3")
          .row.justify-content-end(titulo="Su estructura")
            .col-11
              p Es similar a un árbol, se inicia por la raíz que representa la base de datos, luego las ramas representan las subdivisiones que son los criterios que permiten dividir la base de datos, luego las hojas del árbol representan las decisiones o los resultados finales.
          .row.justify-content-end(titulo="<em>Data</em>")
            .col-11
              p En muchos casos los datos no están estrictamente separados, por lo que se deben tomar, entonces, muchas decisiones sobre la data.
          .row.justify-content-end(titulo="Modelo")
            .col-11
              p Si se tiene un punto cualquiera se inicia la evaluación como en el modelo, revisando la ordenada y abscisa del punto y descartando opciones. Se presume que un árbol de clasificación es muy fácil de entender e interpretar, se identifican fácilmente variables significativas.  Además, se requiere menos limpieza de los datos y no es sensible a valores atípicos o #[em outliers].






</template>

<script>
export default {
  name: 'Tema3',
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

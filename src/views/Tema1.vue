<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-0.pb-md-0.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conjunto de datos


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/t1/img.svg", alt="")
      .col-lg-8(data-aos="fade-left")
        p En la actualidad, es muy común escuchar el término 
          span.fw-bold.bg-4.p-1 ciencia de datos,
          |  el cual ha surgido a partir de la necesidad de identificar estrategias para manejar grandes volúmenes de información dentro de determinadas organizaciones. 
        .bg-5.p-4.py-md-3
          p La ciencia de datos permite hacer uso de herramientas y técnicas para encontrar patrones en la información, realizar predicciones y clasificar información usando algoritmos de aprendizaje. 
          h5.mb-0 A partir de ello:

    .row.fondo-tema1.align-items-center.py-4.pb-5.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .tarjeta--container.row.mb-5
            .col-md.bg-6.text-center.p-4
              .row.justify-content-center.mb-4
                .col-7
                  img(src='@/assets//curso/temas/t1/ico.svg', alt='')
              p.text-white Han surgido conceptos como #[em big data].
            .col-md.bg-1.text-center.p-4
              .row.justify-content-center.mb-4
                .col-7
                  img(src='@/assets//curso/temas/t1/ico.svg', alt='')
              p #[em Big data] hace referencia a extensos conjuntos de datos.
            .col-md.bg-6.text-center.p-4
              .row.justify-content-center.mb-4
                .col-7
                  img(src='@/assets//curso/temas/t1/ico.svg', alt='')
              p.text-white Tales conjuntos de datos pueden ser estructurados, semiestructurados y no estructurados.
            .col-md.bg-1.text-center.p-4
              .row.justify-content-center.mb-4
                .col-7
                  img(src='@/assets//curso/temas/t1/ico.svg', alt='')
              p Esto porque son demasiado grandes y difíciles de procesar con las bases de datos y el #[em software] tradicional. 

          h5.mb-4(data-aos="fade") Para reconocer cada uno de dichos conjuntos de datos revise con atención la siguiente información: 

          .tarjeta.bg-white.bx-sh1.p-4.py-md-5
            SlyderE(indicadores="derecha" data-aos="fade-down")
              .row.align-items-center.justify-content-around
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t1/slide1.png', alt='')
                .col-md-7
                  h4.tc-1 Datos estructurados
                  p Se refieren a la información organizada. Estos datos se pueden procesar, almacenar y recuperar con un formato establecido desde una base de datos. Entre ellos se encuentran detalles de empleados como salario, cargo, edad, entre otros; detalles de clientes como edad, sexo, capacidad de compra, entre otros; datos de pacientes como edad, sexo, diagnóstico, entre otros; tipos de flores como longitud y ancho del pétalo, longitud y ancho del sépalo.
              .row.align-items-center.justify-content-around
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t1/slide1.png', alt='')
                .col-md-7
                  h4.tc-1 Datos no estructurados
                  p Estos datos carecen de cualquier forma o estructura específica, son complejos de procesar y analizar. Por ejemplo, los videos y el audio o los correos electrónicos, documentos en PDF o Word, etc.
              .row.align-items-center.justify-content-around
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t1/slide1.png', alt='')
                .col-md-7
                  h4.tc-1 Datos semiestructurados
                  p Contienen los dos tipos de datos anteriores tanto estructurados como no estructurados, estos datos se pueden almacenar en alguna base de datos; pero pueden tener etiquetas que hacen referencia a otros datos de la información como HTML, XML o JSON.

    p.mb-4(data-aos="fade") Otro aspecto a tener en cuenta es que el #[em big data] se ha caracterizado por poseer cuatro grandes cualidades: 
      span.fw-bold.bg-4.p-1 volumen, velocidad, variedad y veracidad;
      |  por tanto, dicho concepto se puede puntualizar como:  

    .row.justify-content-center
      .col-lg-10
    
        .bg-7.br-8.p-3.p-md-4.mb-5(data-aos="fade-down")
          .row.align-items-center
            .col-md-2.col-4.mb-3.mb-lg-0
              img.px-md-3(src="@/assets/curso/temas/t1/ico2.svg", alt="")
            .col-md-10
              p.mb-0 Grandes conjuntos de datos 
                span.fw-bold.tc-1 (volumen)
                | , de diversos tipos 
                span.fw-bold.tc-1 (variedad) 
                | que son creados, almacenados y procesados a gran rapidez en tiempo real 
                span.fw-bold.tc-1 (velocidad)
                | , garantizando la fiabilidad de la información recibida 
                span.fw-bold.tc-1 (veracidad).

        p(data-aos="fade") Por otro lado, para entender mejor a qué se hace referencia cuando se habla de un conjunto de datos es importante tener claridad frente a conceptos como población, muestra, unidad de análisis, variables y datos.
        h5.tc-1.mb-4(data-aos="fade") A continuación, se enuncian y explican algunos de ellos:
        
        .row.align-items-center.mb-5
          .col-md-4.mb-3.mb-lg-0(data-aos="fade-right")
            img(src="@/assets/curso/temas/t1/img2.svg", alt="")
          .col-md-8(data-aos="fade-left")
            LineaTiempoD.color-primario
              p(numero="1" titulo="Población") Conjunto de todos los casos que concuerdan con determinadas características y especificaciones, la población puede estar conformada por personas, animales, muestras de laboratorios, registros, etc.
              p(numero="2" titulo="Muestra") Puede considerarse como ese subconjunto de la población que hace parte de la investigación.
              p(numero="3" titulo="Unidad de análisis") Es la entidad principal que un investigador analiza en su estudio.  Esta entidad puede ser persona, grupo de personas, negocios, objetos inanimados, transacciones, etc. 
              p(numero="4" titulo="Variable") Es cualquier característica de una unidad de análisis de una población, por ejemplo, los clientes pueden ser clasificados en hombres o mujeres, esta variable se llama sexo.
              p(numero="5" titulo="Dato") Es el valor que toma una variable de una unidad de análisis.

    p.mb-4(data-aos="fade") Además, es importante puntualizar en los tipos de variables que se pueden medir para realizar cualquier estudio de información; entre ellas se encuentran la variables 
      span.fw-bold.bg-4.p-1 categóricas o cualitativas
      |  y las variables
      span.fw-bold.bg-4.p-1 numéricas o cuantitativas:


    .row.fondo2-tema1.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-8.mb-4(data-aos="fade-right")
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-3")
              .row.justify-content-end(titulo="Variables categóricas o cualitativas ")
                .col-11
                  p Estas se definen por categorías, clases o dimensiones, por ejemplo, estado civil (puede tomar valores como casado, soltero, separado, viudo, etc.), tipo de ocupación (puede tomar valores como empleado, independiente, empleado público, empleado privado, etc.), nivel educativo (primaria, secundaria, profesional, especialización, maestría, etc.).
                  p A su vez, las variables categóricas pueden ser #[b dicotómicas] o binarias de acuerdo con la presencia o ausencia de una determinada característica como, por ejemplo, intención de compra de un producto, el cual puede tomar valor #[b sí] o #[b no].
              .row.justify-content-end(titulo="Variables numéricas o cuantitativas")
                .col-11
                  p Estas variables se expresan por un valor numérico, dentro de esta clasificación existen las variables discretas y las variables continuas:
                  .tarjeta.bg-white.p-4
                    ul.lista-ul.fa-ul
                      li 
                        i.fas.fa-arrow-right
                        | Las variables discretas pueden tomar valores como un simple conteo o por asignación de ciertos números a categorías cualitativas.
                      li 
                        i.fas.fa-arrow-right
                        | Las variables continuas se generan midiendo una variable sobre unidades de análisis tales como duración de una llamada en minutos, nivel de ingresos, altura, edad, peso, temperatura, salario, etc.
          .col-lg-4.col-9.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/temas/t1/img3.png", alt="")

          h5.mb-5(data-aos="fade") Pero, ¿qué grados de medición tienen las variables cualitativas o cuantitativas?

          .col-md-4.mb-3.mb-lg-0(data-aos="fade-right")
            img(src="@/assets/curso/temas/t1/img4.svg", alt="")
          .col-md-8(data-aos="fade-left")
            .tarjeta.bg-white.bx-sh1.p-4.py-md-5
              SlyderE(indicadores="derecha" data-aos="fade-down")
                .row.align-items-center.justify-content-around
                  .col-md-11
                    h4.tc-1.mb-4 Escala nominal
                    p Clasifica la unidad de análisis de acuerdo con una característica cualitativa, por ejemplo, el estado civil de un cliente puede tener las categorías: soltero, casado, viudo, separado y a cada una de estas se puede agregar un valor numérico: soltero puede tomar el valor 1, casado el 2, viudo el 3 y separado el 4.
                .row.align-items-center.justify-content-around
                  .col-md-11
                    h4.tc-1.mb-4 Escala ordinal
                    p Establece una relación de orden entre las distintas variables cualitativas como, por ejemplo, se puede considerar el grado de estudios que tiene una persona 1: puede ser primaria, 2: bachiller, 3: estudios universitarios, 4: si tiene estudios de especialización.
                .row.align-items-center.justify-content-around
                  .col-md-11
                    h4.tc-1.mb-4 Escala de intervalo
                    p A veces es importante medir la diferencia entre dos valores de una variable como, por ejemplo, se pueden tomar los grupos de edades de un paciente, rango de temperaturas en la que un paciente se encuentra, etc.
                .row.align-items-center.justify-content-around
                  .col-md-11
                    h4.tc-1.mb-4 Escala de razón
                    p También denominada de proporción, se usa para medir variables físicas y naturales como velocidad, longitud, aceleración, peso. Se puede realizar conversión entre estas unidades como, por ejemplo, se encuentra el peso en Kg, estatura en cm y bilirrubina en suero mg por litro.

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

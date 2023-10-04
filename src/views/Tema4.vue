<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Algoritmos de aprendizaje no supervisado 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/t4/img.svg", alt="")
      .col-lg-8(data-aos="fade-left")
        p Tienen la misión de descubrir las similitudes, los patrones o uniformidades dentro de los datos de entrada, en este caso no se cuenta con un supervisor que etiquete los datos.  
        .bg-5.br-8.p-3.p-md-4.mb-4
          .row.align-items-center
            .col-md-2.mb-3.mb-lg-0
              img.px-md-4(src="@/assets/curso/temas/t4/ico.svg", alt="")
            .col-md-10
              p.mb-0 Los algoritmos de este tipo de aprendizaje forman clústeres de manera autónoma y asignar observaciones a estos #[em clústeres]. 
        h5 Estos son los pasos básicos de una máquina de aprendizaje no supervisado:

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade")
      p.mb-0 #[b Figura 6.] Pasos básicos de una máquina de aprendizaje no supervisado
    figure.mb-5(data-aos="fade-down")
      img.d-lg-block.d-none(src="@/assets/curso/temas/t4/fig6-pc.svg", alt="Esquema de diagrama que enuncia los pasos básicos de la máquina de aprendizaje no supervisado.")
      img.d-lg-none.d-block(src="@/assets/curso/temas/t4/fig6-mob.svg", alt="Esquema de diagrama que enuncia los pasos básicos de la máquina de aprendizaje no supervisado.")
    
    h5.mb-4(data-aos="fade") Los algoritmos no supervisados se agrupan en problemas de asociación y agrupación, así:

    TabsA.color-acento-botones(data-aos="fade-down")
      .tarjeta.bg-1.p-4.p-lg-5(titulo="Asociación")
        h4 Asociación
        .row
          .col-md-9
            p Trabaja en función de reglas de asociación, que permiten establecer asociaciones entre los datos dentro de bases de datos grandes. Por ejemplo, si un usuario compra un carro nuevo, tiene probabilidades de comprar un seguro contra accidentes.
            p Así los algoritmos combinan los datos basándose en los atributos que se comparten, aquí la idea no es encontrar semejanzas entre ellos, si no encontrar relaciones entre los datos. Un concepto en este tipo de aprendizaje son las reglas de asociación que se usan para extraer conocimiento, estas reglas se obtienen de los datos históricos, identificando relaciones entre los datos.  
          .col-md-3
            img(src="@/assets/curso/temas/t4/tab-img1.svg", alt="")
      .tarjeta.bg-1.p-4.p-lg-5(titulo="Agrupamiento")
        h4 Agrupamiento
        .row
          .col-md-9
            p Se trata de identificar un patrón en datos no categorizados y agrupados en #[em clústeres] o grupos. Se supone que los datos tienen similitudes identificadas por métricas de distancia, tales como la distancia euclídea.  
            p Así, dos registros que tengan una distancia mínima, en comparación con otras distancias, podrían pertenecer al mismo clúster.
          .col-md-3
            img(src="@/assets/curso/temas/t4/tab-img2.svg", alt="")

           
    Separador 

    #t_4_1
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 4.1 Reducción de dimensiones

    p(data-aos="fade")  Una de las técnicas para reducir dimensiones es el análisis de componentes principales o PCA, el cual es un procedimiento estadístico que permite resumir el número de variables o reducir el número de dimensiones; este método es parte del aprendizaje no supervisado.
    h5.mb-4(data-aos="fade")  Sobre la reducción de dimensiones, tenga en cuenta:

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-lg-4.col-md-6.mb-3
        .tarjeta.t-hover.text-center.h-100.p-4 
          img.m-auto.mb-3(src="@/assets/curso/temas/t4/tarj-ico1.svg", alt="" style="max-width: 130px;")
          p.mb-0 Cuando se tienen un conjunto de clientes, usuarios, pacientes etc., lo más común es obtener la media de una de sus variables como la edad o el peso; con un solo número se resumen las observaciones de las variables.
      .col-lg-4.col-md-6.mb-3
        .tarjeta.t-hover.text-center.h-100.p-4 
          img.m-auto.mb-3(src="@/assets/curso/temas/t4/tarj-ico2.svg", alt="" style="max-width: 130px;")
          p.mb-0 De ese conjunto de personas es posible tener muchas variables diferentes, como datos de información personal y transacciones realizadas.
      .col-lg-4.col-md-6.mb-3
        .tarjeta.t-hover.text-center.h-100.p-4 
          img.m-auto.mb-3(src="@/assets/curso/temas/t4/tarj-ico3.svg", alt="" style="max-width: 130px;")
          p.mb-0 Se pueden tener muchas variables obtenidas de las redes sociales y tener esta cantidad abrumadora de variables puede ser un problema a la hora de analizar la información. 

    h5.mb-4(data-aos="fade") La figura que se muestra enseguida, facilita la comprensión del análisis de componentes principales:

    .row.justify-content-center 
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade")
          p.mb-0 #[b Figura 7.] Análisis de componentes principales - PCA
        figure(data-aos="fade-down")
          img(src="@/assets/curso/temas/t4/fig7.svg", alt="Imagen que ilustra el análisis de componentes principales en la reducción de dimensiones.")

           
    Separador 

    #t_4_2
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 4.2 #[em Clustering]

    p.mb-4(data-aos="fade") Uno de los algoritmos más comunes de aprendizaje no supervisado utilizado en ciencia de datos es el 
      span.fw-bold.bg-4.p-1 #[em k-medias]
      |  o 
      span.fw-bold.bg-4.p-1 #[em k-means],
      |  el objetivo es agrupar datos con características similares e identificar patrones que muchas veces no se pueden detectar fácilmente o a simple vista.
    
    .row.justify-content-center.align-items-end 
      .col-lg-5.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[b Figura 8.] #[em Clustering]
        figure
          img(src="@/assets/curso/temas/t4/fig8.svg", alt="Gráfica que muestra la agrupación de datos por características comunes (K-means).")
      .col-lg-7.mb-4(data-aos="fade-left")
        .bg-5.p-4
          .row.align-items-center 
            .col-md-8
              p Una vez que el algoritmo elige una cantidad de centroides para marcar el centro de cada clúster, se actualizan los centroides cambiando su posición al centro de las observaciones asignadas y, nuevamente, cada punto se ubica con su centroide más cercano y así sucesivamente hasta que las asignaciones de #[em clústeres] no cambien o se alcance un número de iteraciones determinado
            .col-md-4
              img(src="@/assets/curso/temas/t4/img2.svg", alt="")

    p.mb-5(data-aos="fade") Una vez que el algoritmo elige una cantidad de centroides para marcar el centro de cada clúster, se actualizan los centroides cambiando su posición al centro de las observaciones asignadas y, nuevamente, cada punto se ubica con su centroide más cercano y así sucesivamente hasta que las asignaciones de clústeres no cambien o se alcance un número de iteraciones determinado.

    .bg-8.br-5.w-fit.px-3.py-2.mb-4(data-aos="fade")
      h4.mb-0 Ventajas de #[em K-means]
    
    p.mb-4(data-aos="fade") Las ventajas de #[em K-means] son:

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-lg-3.col-md-6.mb-3
        .tarjeta.t-hover.text-center.h-100.p-4 
          img.m-auto.mb-3(src="@/assets/curso/temas/t4/tarj2-ico1.svg", alt="" style="max-width: 120px;")
          p.mb-0 Es un algoritmo veloz y eficiente en términos de costo computacional para segmentar los datos.
      .col-lg-3.col-md-6.mb-3
        .tarjeta.t-hover.text-center.h-100.p-4 
          img.m-auto.mb-3(src="@/assets/curso/temas/t4/tarj2-ico2.svg", alt="" style="max-width: 120px;")
          p.mb-0 Es sencillo de implementar y de aplicar.
      .col-lg-3.col-md-6.mb-3
        .tarjeta.t-hover.text-center.h-100.p-4 
          img.m-auto.mb-3(src="@/assets/curso/temas/t4/tarj2-ico3.svg", alt="" style="max-width: 120px;")
          p.mb-0 Produce #[em clústeres] más definidos que el #[em clustering] jerárquico.
      .col-lg-3.col-md-6.mb-3
        .tarjeta.t-hover.text-center.h-100.p-4 
          img.m-auto.mb-3(src="@/assets/curso/temas/t4/tarj2-ico4.svg", alt="" style="max-width: 120px;")
          p.mb-0 Puede manejar grandes datos. 



</template>

<script>
export default {
  name: 'Tema4',
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

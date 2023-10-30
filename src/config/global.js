export default {
  global: {
    componenteFormativo: 'Introducción a la analítica predictiva',
    descripcionCurso:
      'Este componente formativo está enfocado en el reconocimiento de los algoritmos de aprendizaje supervisado, no supervisado y semisupervisado, que serán aplicados al análisis automático de datos. Ello permite, a cualquier organización, tomar decisiones asertivas e implementar soluciones a diferentes problemas identificados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conjunto de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Preprocesamiento de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Algoritmos de aprendizaje supervisado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Algoritmos de regresión',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Algoritmos de clasificación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Algoritmos de aprendizaje no supervisado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Reducción de dimensiones',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: '<em>Clustering</em>',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Métricas de evaluación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '3. Algoritmos de aprendizaje supervisado',
      referencia:
        'SDC LEARNING. (2022). <em>Webinar gratuito Mi primer modelo de Machine Learning en Python</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9HKfqinJJAo',
    },
    {
      tema: '3. Algoritmos de aprendizaje supervisado',
      referencia:
        'AprendeIA con Ligdi González. (2019). <em>Ventajas y desventajas algoritmos de regresión</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TkHO2HHbJDs',
    },
    {
      tema: '3. Algoritmos de aprendizaje supervisado',
      referencia:
        'Parra, F. (2022). <em>Métodos de clasificación</em>. bookdown.org.',
      tipo: 'Página web',
      link: 'https://bookdown.org/content/2274/metodos-de-clasificacion.html',
    },
    {
      tema: '5. Métricas de evaluación',
      referencia:
        'González, L. (2019). <em>Errores modelos clasificación</em>.',
      tipo: 'Página web',
      link:
        'https://aprendeia.com/evaluando-el-error-en-los-modelos-de-clasificacion-machine-learning/',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje automático',
      significado:
        'rama de la inteligencia artificial, cuyo objetivo es implementar técnicas que permitan a los computadores aprender mediante un proceso de inducción del conocimiento.',
    },
    {
      termino: 'Aprendizaje automático no supervisado',
      significado:
        'hace referencia al proceso en el cual el algoritmo identifica patrones y saca conclusiones de los datos que se le proporcionan.',
    },
    {
      termino: 'Aprendizaje automático supervisado',
      significado:
        'hace referencia al proceso en el cual el algoritmo recibe los datos de entrenamiento consistente en los datos etiquetados.',
    },
    {
      termino: 'Entrenamiento',
      significado:
        'proceso que se realiza para que los modelos aprendan de los datos.',
    },
    {
      termino: 'Evaluación',
      significado:
        'análisis de eficiencia con el que el modelo predice los datos, generalmente se contrasta con una colección de pruebas separadas previamente.',
    },
    {
      termino: 'Inteligencia artificial',
      significado:
        'sistemas informáticos que pueden aprender como aprende un ser humano.',
    },
    {
      termino: 'k-<em>means</em>',
      significado:
        'lenguaje de alto nivel, usado para construir todo tipo de aplicaciones y muy usado en la ciencia de datos.',
    },
    {
      termino: 'Matriz de confusión',
      significado:
        'es una métrica para establecer el nivel de error, precisión y otras medidas en los modelos de <em>Machine Learning</em>.',
    },
    {
      termino: 'Predicciones',
      significado:
        'capacidad del modelo para clasificar entradas nuevas, de acuerdo con un entrenamiento previo.',
    },
    {
      termino: 'Preprocesamiento',
      significado:
        'Manipulación que se realiza a los datos con el objetivo de entregarlos al modelo como este lo requiera.',
    },
    {
      termino: '<em>Python</em>',
      significado:
        'Proceso criptográfico que proporciona comunicaciones seguras a través de las redes, haciendo que la información entre extremos se transporte de forma segura mediante el uso de la criptografía.',
    },
  ],
  referencias: [
    {
      referencia:
        'González, L. (2019). <em>Preguntas frecuentes. Regresión lineal y regresión logística</em>. Aprende IA.',
      link:
        'https://aprendeia.com/diferencia-entre-regresion-lineal-y-regresion-logistica-machine-learning/',
    },
    {
      referencia:
        'Kaggle. (2016). <em>SMS Spam Collection Dataset</em>. Kaggle.',
      link: 'https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset',
    },
    {
      referencia:
        'Miller, V. (2018). <em>Explorando algoritmos de aprendizaje automático supervisado</em>. Toptal Engineering Blog.',
      link:
        'https://www.toptal.com/machine-learning/explorando-algoritmos-de-aprendizaje-automatico-supervisado',
    },
    {
      referencia:
        'Roman, V. (2019). <em>Machine Learning: cómo desarrollar un modelo desde cero</em>. Medium.',
      link:
        'https://medium.com/datos-y-ciencia/machine-learning-c%C3%B3mo-desarrollar-un-modelo-desde-cero-cc17654f0d48',
    },
    {
      referencia:
        'Sotaquirá, M. (2021). <em>¿Se requiere SQL para trabajar en Machine Learning?</em> Codificandobits.',
      link: 'https://www.codificandobits.com/blog/sql-machine-learning/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Héctor Henry Jurado Soto',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor metodológico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Robert',
          cargo: 'Correctora de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Yerson Fabián Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

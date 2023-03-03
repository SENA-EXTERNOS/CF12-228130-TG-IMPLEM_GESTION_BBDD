export default {
  global: {
    componenteFormativo: 'Conceptos y estructura de las BD',
    descripcionCurso:
      'En este componente, se aborda una breve historia de la evolución de las bases de datos, donde se especifican los tipos de bases de datos, teniendo como objetivo el modelo relacional. Además, se explica cada uno de los pasos de normalización de los datos, para la obtención del modelo entidad relación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a los sistemas de BD',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño de BD ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos del modelo relacional - tipos de relaciones',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Llaves primarias y foráneas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Etapas del diseño, modelo entidad/relación',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Normalización',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Cardinalidad',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas de modelado de BD',
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
      tema: 'Introducción a sistemas de bases de datos',
      referencia:
        'Gómez, Á. P., Jalca, J. J. R., García, J. G., Sánchez, O. Q., Parrales, K. M., & Merino, J. M. (2017). <em>Fundamentos sobre la gestión de base de datos</em> (Vol. 23). 3Ciencias.',
      tipo: 'Libro',
      link:
        'https://books.google.es/books?hl=es&lr=&id=H0VBDwAAQBAJ&oi=fnd&pg=PA7&dq=fundamentos+de+bases+de+datos&ots=fXjXWGxFXx&sig=1YP_o0q0n07aHlO7fRugedSIatY#v=onepage&q=fundamentos%20de%20bases%20de%20datos&f=false         ',
    },
    {
      tema: 'Introducción a sistemas de bases de datos',
      referencia:
        'Moscoso Alanya, H. M. (2019). BASE DE DATOS RELACIONALES: MS-ACCESS Introducción a las bases de datos (BD), consideraciones generales de las BD, MS-ACCESS',
      tipo: 'Trabajo de grado, especialización',
      link:
        'https://repositorio.une.edu.pe/bitstream/handle/20.500.14039/6280/MONOGRAF%c3%8dA%20-%20MOSCOSO%20ALANYA%20HERMINA%20MONICA%20-%20FAC.pdf?sequence=6&isAllowed=y',
    },
    {
      tema: 'Diseño de bases de datos',
      referencia: 'Mendoza, A., & López, R. (2018). Bases de datos.',
      tipo: 'Artículo',
      link: 'https://repositorio.uchile.cl/handle/2250/151632',
    },
  ],
  glosario: [
    {
      termino: 'Atributo',
      significado:
        'son las propiedades de la entidad que requieren ser almacenadas o guardadas.',
    },
    {
      termino: 'Base de datos',
      significado:
        'conjunto de datos con unas propiedades específicas, no redundancia e integridad y que forman la estructura de información que va a ser consultada y accedida por los usuarios finales.',
    },
    {
      termino: 'Claves',
      significado:
        'es el campo o grupo de campos encargados de identificar a una entidad.',
    },
    {
      termino: 'Dato',
      significado:
        'es la parte más pequeña de información de un proceso, que por sí solo no dice nada, o no da un conocimiento.',
    },
    {
      termino: 'Integridad de datos',
      significado:
        'grado hasta el cual son exactos los datos en cualquier archivo individual.',
    },
    {
      termino: 'Entidad',
      significado:
        'representación del mundo real a través de la clasificación de objeto.',
    },
    {
      termino: 'Objeto',
      significado:
        'es una representación abstracta de una entidad del mundo real que tiene una identidad única dentro de la base de datos.',
    },
    {
      termino: 'SQL',
      significado: 'lenguaje de consulta estructurado.',
    },
    {
      termino: 'SGBD',
      significado:
        'es la herramienta que integra una serie de programas o funciones que permiten crear y mantener una base de datos.',
    },
    {
      termino: 'Tupla',
      significado:
        'una tupla representa el conjunto de información de una fila de registro almacenado de los atributos de una base de datos, ejemplo una tupla es la información de un usuario.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aragón Y., González, C., Hernández, O., & Hernández, E. (2018). Herramienta para el aprendizaje de bases de datos relacionales. <i>Revista Cubana de Ciencias Informáticas</i>.',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S2227-18992018000300012',
    },
    {
      referencia:
        'Beynon-Davies, P. (2018). <i>Sistemas de bases de datos</i>. Editorial Reverté.',
      link:
        'https://books.google.es/books?hl=es&lr=&id=XjbeDwAAQBAJ&oi=fnd&pg=PR5&dq=bases+de+datos&ots=DIBXDRJPGU&sig=8sk6MPk4qc9zwSgjd7tiiFQFw94#v=onepage&q=bases%20de%20datos&f=false',
    },
    {
      referencia:
        'Capacho, J., & Nieto, W. (2017). <i>Diseño de bases de datos</i>. Universidad del Norte.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_jstor_books_j_ctt2050w3s_7',
    },
    {
      referencia:
        'Gómez, Y. (2018). <i>Estudio de seguridad en bases de datos SQL y NOSQL</i>. Universidad Nacional Abierta y a Distancia.',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/21429/52488191.pdf?sequence=4&isAllowed=y',
    },
    {
      referencia:
        'González, J. (2022). <i>Utilización de las bases de datos relacionales en el sistema de gestión y almacenamiento de datos</i>. Editorial Paraninfo.',
      link:
        'https://books.google.es/books?hl=es&lr=&id=hPV2EAAAQBAJ&oi=fnd&pg=PR7&dq=bases+de+datos&ots=ZtVZ5cCbw2&sig=OlE5gCoqw-tpL5RKdAPOpNQ7d0o#v=onepage&q=bases%20de%20datos&f=false',
    },
    {
      referencia:
        'Marqués, M. (2010). <i>Base de Datos</i>. De Universitat Jaume I.',
      link:
        'https://bdigital.uvhm.edu.mx/wp-content/uploads/2020/05/Bases-de-Datos.pdf',
    },
    {
      referencia:
        'Mendoza, A., & López, R. (2018). <i>Bases de datos</i>. Universidad de chile.',
      link: 'https://repositorio.uchile.cl/handle/2250/151632',
    },
    {
      referencia:
        'Millán, M. (2017). <i>Fundamentos de bases de datos</i>. Universidad del Valle. Programa Editorial.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB129060',
    },
    {
      referencia:
        'Muñoz, R., Maldonado, C., Damiano, L., Romero, M., Bueno, M., Quinteros, S. & Arguello, S. (2018). <i>Buenas prácticas en el diseño de estructuras de datos en bases de datos relacionales</i>. Red de Universidades con Carreras en Informática.',
      link: 'http://sedici.unlp.edu.ar/handle/10915/67409',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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

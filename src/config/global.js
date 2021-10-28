export default {
  global: {
    componenteFormativo: 'Propuesta comercial de un producto o servicio',
    descripcionCurso:
      'Una propuesta comercial es un documento presentado al cliente con la información del producto o servicio; describiendo beneficios, plazos de entrega, alcance, formas de pago, entre otros. <br><br> Se abordarán sus principales componentes: identificación de necesidades, descripción del producto, condiciones de la propuesta y formas de presentación. Finalmente, se muestran técnicas de negociación y herramientas para la socialización de la propuesta.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Las necesidades y el deseo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Atributos del producto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Niveles de productos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Clasificación de productos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Características del producto',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Empaque',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Etiqueta',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Envase',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Embalaje',
            hash: 't_2_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.9',
            titulo: 'Portafolio de productos',
            hash: 't_2_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.10',
            titulo: 'Ciclo de vida',
            hash: 't_2_10',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El surtido',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Estructura del surtido',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Dimensiones del surtido',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Clasificación del surtido',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Características',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Cualidades del surtido',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'El lineal',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Implantación',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Atributos del servicio',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Características del servicio',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Tipos de servicio al cliente',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Características',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Etapas de la negociación',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Tipos de negociación',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Aplicabilidad',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Propuesta comercial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Herramientas ofimáticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Clasificación',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Tipos de herramientas',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
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
  referencias: [
    {
      referencia:
        'Amador Araujo, Lourdes, L., Pineda Ayala, E. & Kotler. P. (2017). Fundamentos De Marketing. Decimotercera ed. México: Pearson Prentice Hall. Print. Área: Administración.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4393',
    },
    {
      referencia:
        'Amador Araujo, Lourdes, L., Pineda Ayala, E. & Kotler. P. (2016). Dirección De Marketing. Decimoquinta. Decimotercera ed. México: Pearson Prentice Hall. Print. Área: Administración.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4273',
    },
    {
      referencia:
        'Ávila M., F. (2008). Tácticas para la Negociación Internacional. (2da. Ed.). ISBN: 9682480841. México D.F., México: Editorial Trillas, pp. 29, 195-196.',
    },
    {
      referencia:
        'Díez de Castro, E.C, Landa Bercebal, F.J., Navarro García, A. (2006). Merchandising. Teoría y práctica. Pirámide, Madrid',
    },
    {
      referencia:
        'Lira Mejía, M. C. (2009). ¿Cómo puedo mejorar el servicio al cliente? Técnicas para perfeccionar la actitud en el servicio al cliente.',
      link: 'https://comunidadilgo.org/back/_lib/file/doc/portaldoc453_3.pdf',
    },
    {
      referencia:
        'Muñiz G., R. (2008). Marketing en el siglo XXI. (2da. Ed.). ISBN: 8445410911. España: Centro de estudios Financieros.',
    },
    {
      referencia:
        'Negocios en Tu Mundo, negocios en TM. (2012). Emprendedores a diferenciar sus productos Nada de commodities.',
      link: 'https://www.youtube.com/watch?v=GGAGkqStMJw',
    },
    {
      referencia:
        'Negocios en Tu Mundo, negocios en TM. (2012). Qué es y que no es el valor agregado. (2007). Maslows Hierarchy of Needs.',
      link: 'https://www.simplypsychology.org/maslow.html',
    },
    {
      referencia:
        'Palomares, B. (2009). Merchandising. Teoría, práctica y estrategia. ESIC, Madrid.',
    },
    {
      referencia:
        'Parra, J. B., Santiago, E., Murillo, M. & Atonal, C. (2010). Estrategia para negociaciones exitosas. e-Gnosis, 8.',
    },
    {
      referencia:
        'Solís Buendía, L. (2015). Importancia del surtido en la estrategia minorista: un análisis empírico en el contexto de tiendas de ropa.',
    },
  ],
  glosario: [
    {
      termino: 'Online',
      significado:
        'En español, “en línea”, que se accede mediante una conexión a internet o que se encuentra en internet.',
    },
    {
      termino: 'Proactivo',
      significado:
        'Persona que tiene iniciativa y capacidad para anticiparse a problemas o necesidades futuras.',
    },
    {
      termino: 'Reactivo',
      significado:
        'Persona que actúa reaccionando a las circunstancias externas',
    },
    {
      termino: 'Stock',
      significado:
        'Conjunto de mercancías o productos que se tienen almacenados en espera de su venta o comercialización.',
    },
  ],
  complementario: [
    {
      texto:
        'Amador Araujo, Lourdes, L., Pineda Ayala, E. & Kotler. P. (2017). Fundamentos De Marketing. Decimotercera ed. México: Pearson Prentice Hall. Print. Área: Administración.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4393',
    },
    {
      texto:
        'Amador Araujo, Lourdes, L., Pineda Ayala, E. & Kotler. P. (2016). Dirección De Marketing. Decimoquinta. Decimotercera ed. México: Pearson Prentice Hall. Print. Área: Administración.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4273',
    },
    {
      texto:
        'Negocios en Tu Mundo, negocios en TM. (2012). Emprendedores a diferenciar sus productos Nada de commodities. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GGAGkqStMJw',
    },
    {
      texto:
        'Negocios en Tu Mundo, negocios en TM. (2012). Qué es y que no es el valor agregado. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FpnYS2jtKJk',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Paolo Andrés Cantillo Largo',
        cargo: 'Experto temático',
        centro: 'Centro de comercio Regional Antioquia',
      },
      {
        nombre: 'Zenith Chinchilla Ruedas',
        cargo: 'Diseñador Instruccional',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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

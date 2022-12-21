export default {
  global: {
    componenteFormativo: 'Diseño y elaboración de prótesis fija',
    descripcionCurso:
      'La prótesis parcial fija es un área enfocada a las restauraciones indirectas, solo puede ser removida por el profesional de odontología; es realizada en un laboratorio dental y durante su proceso de elaboración es importante tener conocimientos en el área y cumplir con la prescripción clínica para garantizar el cumplimiento de las necesidades del mercado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [],
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
        titulo: 'Modelo de prótesis fija',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tecnologías mixtas digital y analógico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Protocolo de trabajo digital y/o analógico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Diseño y elaboración de la estructura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Control de calidad',
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
      tema: 'Protocolo de trabajo digital y/o analógico.',
      referencia:
        'ZirconArtDental. (2013). <em>Proceso de diseño de una Prótesis fija con Software CAD/CAM - ZIRCONART.</em> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=N5hTHx1aEOU&ab_channel=ZirconArtDental',
    },
  ],
  glosario: [
    {
      termino: 'Alginato',
      significado:
        'material elástico que sirve para la toma de impresiones dentales, teniendo como objetivo principal obtener una réplica exacta de los tejidos duros y blandos de la cavidad oral.',
    },
    {
      termino: 'Arenar',
      significado:
        'quitar los excesos de revestimiento a las piezas, para ello se usa la máquina arenadora.',
    },
    {
      termino: 'Arista central',
      significado:
        'elevación del esmalte que se encuentra en la cara vestibular más marcado de los caninos y recorre la pieza en su tercio medio desde cervical o incisal.',
    },
    {
      termino: 'Articuladores',
      significado:
        'instrumentos que simulan la relación existente entre los dientes maxilares y los mandibulares y nos permiten reproducir las posiciones y movimientos mandibulares fuera de la boca y sobre la mesa de trabajo.',
    },
    {
      termino: 'ATM',
      significado: 'articulación témporo-mandibular.',
    },
    {
      termino: 'Base',
      significado:
        'parte de la prótesis que contiene los dientes artificiales y que encaja sobre la encía.',
    },
    {
      termino: 'Bruxismo',
      significado:
        'hábito de apretamiento o frotamiento de dientes, diurno o nocturno, con distintos grados de intensidad y persistencia en el tiempo, involuntario y fuera de los movimientos funcionales que tiene la mandíbula.',
    },
    {
      termino: 'CAD-CAM',
      significado:
        '<em>(Computer-Aid-Design-Computer Aid Manufacturing)</em> programa informático de diseño y fabricación asistido por ordenador.',
    },
    {
      termino: 'Cofia dental',
      significado:
        'sistema de toma de impresión dental cuya función es la de obtener una impresión exacta de los pilares tallados.',
    },
    {
      termino: 'Conector',
      significado: 'estructura que une los retenedores con el póntico.',
    },
    {
      termino: 'Cubetas individuales',
      significado:
        'instrumentos que se realizan cuando las cubetas estándar no se adaptan bien al paciente para la toma del registro de la boca.',
    },
    {
      termino: 'Curva de compensación',
      significado:
        'curvatura anteroposterior y lateral en el alineamiento de las superficies oclusales y los bordes incisales de los dientes artificiales, que se emplea para conseguir una oclusión equilibrada durante los movimientos mandibulares.',
    },
    {
      termino: 'Dientes pilares',
      significado: 'dientes remanentes que sirven de soporte al puente.',
    },
    {
      termino: 'Dientes remanentes',
      significado: 'piezas que conserva el paciente.',
    },
    {
      termino: 'Escayola dental metalizada',
      significado:
        'yeso para dados de trabajo sobre los que se harán trabajos de rehabilitación dental como coronas, implantes, postes o prótesis.',
    },
    {
      termino: 'Escayola dental tipo IV',
      significado:
        'yeso tipo 4 tixotrópico extraduro, de alta resistencia. Su tiempo prolongado de trabajo de 8 minutos permite correr hasta 6 arcadas al mismo tiempo.',
    },
    {
      termino: 'Estética',
      significado: 'diseño, en cierta medida, de la cara del paciente.',
    },
    {
      termino: 'Estructura mecanizada presinterizada',
      significado:
        'estructura fresada de zirconita aún no completamente endurecida de la manera indicada.',
    },
    {
      termino: 'Estructura mecanizada sinterizada',
      significado:
        'estructura fresada que ya presenta la dureza y las características recomendadas.',
    },
    {
      termino: 'Fraguado',
      significado: 'endurecimiento del revestimiento.',
    },
    {
      termino: 'Muñón',
      significado:
        'superficie dentaria que queda tras el tallado y que es apta para recibir la corona artificial.',
    },
    {
      termino: 'Oclusión',
      significado: 'contacto entre los dientes superiores e inferiores.',
    },
    {
      termino: 'Oclusión dentaria <em>(angle)</em>',
      significado: 'relación de las arcadas entre sí.',
    },
    {
      termino: 'Odontología',
      significado:
        'una de las ciencias de la salud que se encarga del diagnóstico, tratamiento y prevención de las enfermedades del aparato estomatognático, que incluye los dientes, el periodonto, la articulación temporomandibular, el sistema neuromuscular y todas las estructuras de la cavidad oral como la lengua, el paladar, la mucosa oral y las glándulas salivales.',
    },
    {
      termino: 'Pinza de mosquito',
      significado:
        'instrumental que se usa para sujetar la pieza en la que quieras aplicar el <em>opaque</em> por medio del jito.',
    },
    {
      termino: 'Póntico',
      significado: 'diente postizo que reemplaza al perdido.',
    },
    {
      termino: 'Posición dentaria',
      significado:
        '“posición de equilibrio muscular”, donde los dientes se colocan en la posición donde exista un equilibrio.',
    },
    {
      termino: 'Prótesis dental',
      significado:
        'elemento artificial destinado para suplir la ausencia dentaria, restaurando la anatomía de una o varias piezas.',
    },
    {
      termino: 'Prótesis dental',
      significado:
        'prótesis parcial removible es aquella prótesis que sustituye parcialmente los dientes ausentes del paciente, con la finalidad de restablecer las principales funciones orales, masticación, estética, fonética, prevención de inclinación, estabilización de los dientes debilitados.',
    },
    {
      termino: 'Prueba del bizcocho',
      significado:
        'consiste en la colocación de la corona (no glaseada) en boca del paciente sobre el muñón, para poder comprobar que en el laboratorio han colocado la cerámica correctamente.',
    },
    {
      termino: 'Puente',
      significado: 'prótesis que reemplaza uno o varios dientes ausentes.',
    },
    {
      termino: 'Pulido',
      significado:
        'procedimiento superficial que consiste en un desgaste por frotación o abrasión para conseguir una prótesis totalmente lisa.',
    },
    {
      termino: 'Rebase',
      significado:
        'método de reajuste de la prótesis que consiste en reemplazar parte del material de la base, consiguiendo el ajuste sin modificar la posición de los dientes.',
    },
    {
      termino: 'Rebordes marginales',
      significado:
        'elevación del esmalte que se encuentra en mesial y distal de la cara oclusal de premolares y molares, siendo la zona donde finalizan surcos secundarios.',
    },
    {
      termino: 'Restauración',
      significado:
        'procedimiento que consiste en reemplazar por medios artificiales los dientes o parte de ellos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Esponda, R. (2019). <em>Anatomía dental.</em> Universidad Nacional Autónoma de México (UNAM).',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/187393',
    },
    {
      referencia:
        'García, V. (2017). <em>La enseñanza bimodal en la asignatura "dentaduras parciales removibles" y su incidencia en el rendimiento estudiantil.</em> Universidad Central de Venezuela.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/112051',
    },
    {
      referencia:
        'Matiz, J. (2014). <em>Temas de rehabilitación oral: acrílicos dentales. 1: Clínica-laboratorio.</em> Ecoe Ediciones.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/122433',
    },
    {
      referencia:
        'Navas, E. (2018). <em>Prevención de riesgos laborales, sector sanitario: riesgos específicos del trabajo de protésicos dentales</em> (2a. ed.). Editorial ICB.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/111458',
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
      {
        nombre: 'Daniel L. Toro A.',
        cargo: 'Instructor',
        centro: 'Centro de servicios de salud. Regional Antioquia',
      },
      {
        nombre: 'Paola Alexandra Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios. Regional Norte de Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología.Regional Distrito Capital',
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
        nombre: 'Yerson Fabian Zarate Saavedra',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación Contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Herramientas de modelado de BD
    p.mb-5(data-aos='fade-right') Las herramientas de modelado de las bases de datos, son aquellas que permiten la construcción del modelo entidad/relación, logrando una visión general acerca de cómo están distribuidas cada una de las entidades, los campos correspondientes, las respectivas llaves que lleva cada una de las entidades (tablas), la cardinalidad y por último, las respectivas relaciones entre las diferentes entidades.
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/1.svg', alt='')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris2" )
          div(titulo="Modelo entidad / relación (E/R)")
            p El modelo E/R también llamado modelo conceptual de datos, fue desarrollado por Peter Chen en 1976 y consiste en una práctica dinámica que se caracteriza por una representación gráfica que incorpora información relativa a los datos y sus respectivas relaciones, usado como una vista general de los datos a implementar y la estructura en la organización. Este modelo sirve como guía para el paso siguiente, que es la construcción de la base de datos en un sistema gestor de bases de datos. 
          div(titulo="Elementos de un modelo de entidad / relación")
            ul.lista-ul--color
              li
                i.fas.fa-check
                |Entidades
              li
                i.fas.fa-check
                |Relaciones
              li
                i.fas.fa-check
                |Atributos
              li
                i.fas.fa-check
                |Cardinalidad
              li
                i.fas.fa-check
                |Llaves
          div(titulo="Entidades ")
            p Las entidades se representan gráficamente mediante un rectángulo y en el interior lleva el nombre correspondiente. El nombre de la entidad no se debe repetir, ya que cada una de ellas tiene su propio nombre. 
              br
              br
              |Ejemplo de entidades: profesores, empleados, estudiantes, clientes, proveedores, etc. Cada una con ciertas características que describen y diferencian cada elemento.
          div(titulo="Relaciones")
            p Las relaciones son las asociaciones que se describen entre dos atributos (campos) de dos tablas para compartir información (Aragón, y otros 2018), esas respectivas relaciones entre las entidades, se representan por medio de un rombo describiendo en el interior la acción de la relación.
          div(titulo="Atributos")
            p Una entidad está representada por un grupo de atributos. Estos son los encargados de describir una entidad específica, teniendo en cuenta cada una de sus características o propiedades, se representa por medio de una elipse o un círculo con su nombre correspondiente en el interior. Por ejemplo, la entidad “vehículo” se puede describir con los atributos: marca, modelo, color, placa, número, pasajeros, etc.
          div(titulo="Cardinalidad")
            p Esta cardinalidad dentro del modelo se representa en los extremos de cada relación. La cardinalidad expresa cuántas entidades de un extremo de la relación están relacionadas con cuántas entidades del otro extremo. Pueden ser “uno a uno”', “uno a varios”' o “varios a varios”. (Muñoz et al, 2018)
          div(titulo="Clave en una entidad")
            p Dentro del modelo entidad / relación están representadas las claves primarias y claves foráneas: 
            ul.lista-ul--color
              li
                i.fas.fa-angle-right
                p.mb-0 #[b La clave primaria]: en la entidad la clave primaria es aquel atributo que es único para cada registro, se representa por medio de una línea continua de forma subrayado en el nombre del atributo correspondiente. 
              li
                i.fas.fa-angle-right
                p.mb-0 #[b La clave foránea]: estas claves son las encargadas de demostrar la respectiva relación que se tiene en dos entidades, se representa por una línea subrayada de forma punteada debajo del nombre del atributo candidato de la relación.
    p.mb-5(data-aos='fade-right')  En la siguiente representación gráfica se observan las figuras y lo que cada una representa:
    SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4(style='background-color: #afcee9').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/2.svg' alt='AvatarTop')
        h4.text-center Entidades
      .tarjeta.p-4(style='background-color: #afcee9').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/3.svg' alt='AvatarTop')
        h4.text-center Atributos
      .tarjeta.p-4(style='background-color: #afcee9').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/4.svg' alt='AvatarTop')
        h4.text-center Relaciones
      .tarjeta.p-4(style='background-color: #afcee9').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/5.svg' alt='AvatarTop')
        h4.text-center Conectores
      .tarjeta.p-4(style='background-color: #afcee9').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/6.svg' alt='AvatarTop')
        h4.text-center Llave primaria
      .tarjeta.p-4(style='background-color: #afcee9').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/7.svg' alt='AvatarTop')
        h4.text-center Entidades
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B   ").me-3.mb-0
      h3.mb-0 Ejemplo de modelo entidad relación
    p.mb-5(data-aos='fade-right')  En la siguiente imagen se puede observar un ejemplo  de modelo de Entidad - Relación (E/R): 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        img(src='@/assets/curso/temas/tema3/14.svg' alt='AvatarTop') 
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B   ").me-3.mb-0
      h3.mb-0 Listado de herramientas para modelado de bases de datos
    p.mb-5(data-aos='fade-right') En la actualidad existe una gran variedad de herramientas que son muy útiles al momento de realizar el respectivo modelado de la base de datos. Las herramientas también dependen mucho de la capacidad de 
      em hardware 
      | del equipo donde se desean instalar. También se pueden utilizar herramientas que funcionan perfectamente por medio de un navegador web, permitiendo una gran eficiencia y disponibilidad, al momento de la recuperación de la información.
      br
      br
      |Herramientas en la nube: 
    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/9.png', alt='Texto que describa la imagen')
        h2.text-center Lucidchart
        p.mb-0.text-center Es una herramienta creada para construir y diagramar en red, trabaja en el equipo en tiempo real, es muy versátil y colaborativa. La página oficial de la herramienta es:
        a(href="https://www.lucidchart.com/" target="_blank")
          p.text-center.mt-0 https://www.lucidchart.com/
      
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/10.png', alt='Texto que describa la imagen')
        h2.text-center Draw.io
        p.mb-0.text-center Es una herramienta opensource creada para construir diagramas en la red, facilita la integración con múltiples plataformas y programas. Su funcionamiento es por medio de un navegador web, de fácil funcionamiento y es muy intuitiva, creada por Google. La página oficial es:
        a(href="https://app.diagrams.net/" target="_blank")
          p.text-center.mt-0 https://app.diagrams.net/
    
    p.mb-5(data-aos='fade-right') Es importante visualizar el siguiente video, en donde se explica la construcción Modelo Entidad / Relación por medio de la herramienta Draw.io:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/E9mCcQXpfb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    h4 Herramientas locales (PC):
    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/11.png', alt='Texto que describa la imagen')
        h2.text-center StarUML
        p.mb-0.text-center Es una herramienta para modelado de diagramas bajo el estándar de UML, es multiplataforma, un #[i software] muy versátil que permite un modelo ágil. La página oficial es
        a(href="https://app.diagrams.net/" target="_blank")
          p.text-center.mt-0 https://app.diagrams.net/      
      
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/12.png', alt='Texto que describa la imagen')
        h2.text-center WhiteStarUML
        p.mb-0.text-center Es una herramienta de código abierto creado para la plataforma Windows diseñada especialmente para construir diagramas UML. La página oficial del sitio para su descarga es
        a(href="https://sourceforge.net/projects/whitestaruml/" target="_blank")
          p.text-center.mt-0 https://sourceforge.net/projects/whitestaruml/  

    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B   ").me-3.mb-0
      h3.mb-0 Documentación del modelo de datos
    p.mb-5(data-aos='fade-right') La respectiva documentación del modelado de los datos se realiza por medio del “Diccionario de datos”, es de vital importancia llevar un control de cambios y su respectiva actualización, con el objetivo de mantener alineados todos los procesos en la organización.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris2" )
          div(titulo="Diccionario de datos")
            p Es un conjunto de descripciones que comprende las características lógicas y puntuales de los datos que se van a implementar en el sistema, incluyendo nombre, contenido, alias y organización. Este identifica plenamente dónde se implementan los datos y los sitios donde se requiere el acceso de forma eficiente, se construye durante el análisis del flujo de datos y, sirve de apoyo a los diferentes analistas que participan en los requerimientos del sistema.

              br
              br
              |En un diccionario de datos se encuentra alojado cada uno de los elementos que forman parte del flujo de los datos del sistema. Además, almacena cada detalle y descripción de los diferentes datos implementados.
          div(titulo="Características")
            ul.lista-ul--color
              li
                i.fas.fa-check
                p.mb-0 #[b Registra transacciones:] registra las actividades que realiza la empresa mientras opera el sistema.
              li
                i.fas.fa-check
                p.mb-0 #[b Preguntas:] solicitudes de procesamiento y recuperación de la información para generar una respuesta.
              li
                i.fas.fa-check
                p.mb-0 #[b Bases de datos y archivos:] se detallan las transacciones y registros que son cruciales para la organización.
              li
                i.fas.fa-check
                p.mb-0 #[b Capacidad del sistema:] habilidades del sistema para realizar, almacenar y procesar transacciones y datos.

          div(titulo="Estructura")
            p Contenido de un registro del diccionario; el diccionario contiene dos tipos de descripciones para el flujo de datos del sistema:

            ul.lista-ul--color
              li
                i.fas.fa-check
                p.mb-0 #[b Elemento dato:] son los bloques principales para todos los demás datos del sistema. Se agrupan para dar forma a la estructura de datos.
              li
                i.fas.fa-check
                p.mb-0 #[b Descripción:] cada registro en el diccionario, consiste en un conjunto de detalles que representa la función de cada uno de los datos utilizados o producidos por el sistema.
    h4 Cada registro contiene:
    .row.justify-content-center.mb-5
      .col-lg-2.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/13.svg', alt='Texto que describa la imagen')
      .col-lg-10(data-aos="fade-left") 
        ul.lista-ul--color
          li
            i.fas.fa-check
            p.mb-0 #[b Nombre:] para diferenciar un dato del otro.
          li
            i.fas.fa-check
            p.mb-0 #[b Descripción:] conceptualiza lo que representa en el sistema.
          li
            i.fas.fa-check
            p.mb-0 #[b Alias:] porque un dato por lo general puede recibir varios nombres
          li
            i.fas.fa-check
            p.mb-0 #[b Longitud:] es vital conocer la cantidad de espacio necesario para el dato.
          li
            i.fas.fa-check
            p.mb-0 #[b Valores de los datos:] para saber qué tipo de dato se requiere para el dato.
          li
            i.fas.fa-check
            p.mb-0 #[b Estructura de los datos:] es un grupo de datos que están relacionados con otros y que en conjunto describen un componente del sistema.
    p Ejemplo de diccionario de datos:
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 4
          br
          span.fst-italic Ejemplo de diccionario de datos
        .tabla-a.color-acento-contenido.mb-5
          table
            caption #[b Nota:] tomado de: Ingeniería de <em>software</em> (s/f). Diccionario de datos de un <em>software</em>. https://ingsoftware.weebly.com/diccionario-de-datos-de-un-software.html
            thead
              tr
                th(colspan='2') Nombre de Archivo: BDPlantilla
                th(colspan='2') Fecha de creación: 27/04/2008.
              tr
                th(colspan='4') Descripción: Base de datos que contendrá la plantilla de personal del instituto.
              tr
                th Campo
                th Tamaño
                th Tipo de alto 
                th Descripción 
            tbody
              tr
                td CURP
                td 18
                td Caracter
                td Clave Única de Registro de Población.
              tr
                td cPaterno
                td 30
                td Caracter
                td Apellido paterno del empleado.
              tr
                td cMaterno
                td 30
                td Caracter
                td Apellido materno del empleado.
              tr
                td cNombre
                td 45
                td Caracter
                td Nombre del empleado.
              tr
                td cDomicilio
                td 60
                td Caracter
                td Domicilio actual donde reside el empleado.
              tr
                td cColonia
                td 45
                td Caracter
                td Colonia del domicilio donde reside el empleado.
              tr
                td cCiudad
                td 45
                td Caracter
                td Ciudad donde reside el empleado.
              tr
                td cEstado
                td 45
                td Caracter
                td Entidad federativa de residencia del empleado.
              tr
                td cTelefono
                td 12
                td Caracter
                td Número telefónico del empleado.
              tr
                td nPostal
                td 6
                td Numérico
                td Código postal del domicilio del empleado.
              tr
                td cFamiliar
                td 65
                td Caracter
                td Nombre de un familiar directo del empleado.
              tr
                td  FDomicilio
                td 65
                td Caracter
                td Domicilio de familiar directo del empleado.
              tr
                td FTelefono25
                td 12
                td Caracter
                td Teléfono de familiar directo del empleado.
              tr
                td(colspan='2') Relaciones:
                  br
                  | CURP con BDNomina
                td(colspan='2') Campos Clave:
                  br
                  | CURP, cPaterno, cMaterno
        .cajon.color-acento-contenido(style="background-color:#ffecc1 ").p-4.mb-4
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.   

    
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

<style lang="sass">
.tarjeta--gris2
  background-color: #e8e8e8
</style>

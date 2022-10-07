<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Diseño de BD
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9(data-aos="fade-right")
        .cajon-b.color-acento-contenido.p-3.mb-5.abajo-derecha
          p.mb-0 Una base de datos bien diseñada permite de manera eficiente el acceso a la información actualizada y exacta.  Un correcto diseño es crucial para cumplir con los objetivos definidos en ella.
            br
            br
            |El diseño de la base de datos es un proceso que se rige bajo ciertos principios bien estructurados, partiendo de una base para la obtención del modelo conceptual, seguido de un modelo lógico, donde se deben aplicar unas reglas de normalización y así, en última instancia obtener un modelo físico y proceder a su respectiva implementación.
      .col-lg-3.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/1.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-3.mb-5.bg-gradient
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-10.mb-3.mb-sm-0.text-white
                  h3.mb-1 Anexo
                  p.text-small En la actualidad existen varios modelos de bases de datos, para conocerlos se puede descargar el siguiente documento
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank" type="application/pdf")
                    span(style='color: #12263f') Descargar 
                    i.fas.fa-file-download(style='color: #12263f')
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Conceptos del modelo relacional - tipos de relaciones
    p.mb-5(data-aos='fade-right') A continuación, se presentan los siguientes conceptos:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-up
          .tarjeta-up__imagen
            img(src='@/assets/curso/temas/tema2/3.svg')
          .tarjeta-up__contenido
            .tarjeta-up__contenido__titulo(style="background-color: #FFE1A2").p-3
              h3.text-center.mb-0 Modelo de datos
            .tarjeta-up__contenido__texto(style="background-color: #FFE1A2").p-3.pt-0.h-100
              p Los modelos de datos son el instrumento principal para ofrecer dicha abstracción, a través de su jerarquía de niveles. Un modelo de datos es un conjunto de conceptos que sirven para describir la estructura de una base de datos, es decir, los datos, las relaciones entre los datos y las restricciones que deben cumplirse sobre los datos.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-up
          .tarjeta-up__imagen
            img(src='@/assets/curso/temas/tema2/4.svg')
          .tarjeta-up__contenido
            .tarjeta-up__contenido__titulo(style="background-color: #FFE1A2").p-3
              h3.text-center.mb-0 Estructura de datos relacional
            .tarjeta-up__contenido__texto(style="background-color: #FFE1A2").p-3.pt-0.h-100
              p La estructura de datos del modelo relacional es como su nombre lo expresa, las relaciones que gráficamente se representan mediante una tabla. Teniendo como base la representación gráfica está compuesta por sus propiedades, tipos de relaciones, y sus respectivas claves.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-up
          .tarjeta-up__imagen
            img(src='@/assets/curso/temas/tema2/5.svg')
          .tarjeta-up__contenido
            .tarjeta-up__contenido__titulo(style="background-color: #FFE1A2").p-3
              h3.text-center.mb-0 Relaciones
            .tarjeta-up__contenido__texto(style="background-color: #FFE1A2").p-3.pt-0.h-100
              p El modelo relacional se basa en el concepto matemático de relación, que gráficamente se representa mediante una tabla. Codd, que era un experto matemático, utilizó una terminología perteneciente a las matemáticas, en concreto de la teoría de conjuntos y de la lógica de predicados, según Marqués (2010).
    .row.justify-content-center.mb-5
      .col-lg-9
        .border-dash-rows.p-3
          .bg-gradient.p-4
            .bg-white.p-4
              h3 Propiedades de las relaciones:
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Cada relación tiene un nombre, y este es distinto del nombre de todas las demás.
                li
                  i.fas.fa-check
                  | Los dominios sobre los que se definen los atributos son escalares, por lo que los valores de los atributos son atómicos. De este modo, en cada tupla, cada atributo toma un solo valor. Se dice que las relaciones están normalizadas.
                li
                  i.fas.fa-check
                  | No hay dos atributos que se llamen igual.
                li
                  i.fas.fa-check
                  | El orden de los atributos no importa: los atributos no están ordenados.
                li
                  i.fas.fa-check
                  | Cada tupla es distinta de las demás: no hay tuplas duplicadas.
                li
                  i.fas.fa-check
                  | El orden de las tuplas no importa: las tuplas no están ordenadas.
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B   ").me-3.mb-0
      h3.mb-0 Tipos de relaciones
    p.mb-5(data-aos='fade-right') A continuación, se presentan los siguientes conceptos:
    h4 En un sistema gestor de base de datos SGBD hay dos tipos de relaciones:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/6.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        .cajon.color-primario.p-4.mb-4(style="background-color: #e7f3fe ")
          ul.lista-ul--color
            li
              i.fas.fa-check(style="color: #084a93")
              p.mb-0 #[b Relaciones base:] son relaciones auténticas que llevan su nombre correspondiente, y forman parte en el almacenamiento de la base de datos.
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #ffe4a9 ")
          ul.lista-ul--color
            li
              i.fas.fa-check(style="color: #ffb30b")
              p.mb-0 #[b Vistas:] también son llamadas relaciones virtuales, son relaciones que también llevan su nombre correspondiente y derivadas. Cuando se remite al término derivadas, se refiere a que se obtienen a partir de otras relaciones. Las vistas no poseen sus propios datos, los datos que contienen pertenecen a datos almacenados en relaciones base.
    p.mb-5(data-aos='fade-right') Conceptos del modelo relacional - tipos de relaciones. Es importante conocer los siguientes conceptos al respecto:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        img(src='@/assets/curso/temas/tema2/7.svg', alt='')
    p.mb-5(data-aos='fade-right') De acuerdo a la información anterior, a continuación, se explican los elementos básicos del modelo relacional, el cual es el más determinante en este proceso, como ya se había mencionado:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        TabsA.color-acento-botones.mb-5
          .tarjeta.p-4(titulo="Relacion" style="background-color: #fff4da")
            h4 Es la estructura básica del modelo relacional, está representado por medio de una tabla.
            p Una relación está compuesta por:

            ul.lista-ul--color
              li
                i.fas.fa-check
                | Nombre de la relación.

              li
                i.fas.fa-check
                | Cabecera, conjunto de n-pares atributo-dominio.

              li
                i.fas.fa-check
                | Cuerpo, conjunto de n-tuplas.
              li
                i.fas.fa-check
                | Esquema, representado por el nombre de la relación y la cabecera.
              li
                i.fas.fa-check
                | Estado, constituido por el cuerpo y el esquema.
          .tarjeta.p-4(titulo="Dominio" style="background-color: #fff4da")
            h4 Es el conjunto de posibles valores que toma un atributo. Existe sin depender de ningún otro elemento.
            p Un dominio se identifica por un nombre, tiene un número finito de valores, todos los valores son del mismo tipo y los valores son atómicos respecto al modelo relacional.
              br
              |Los dominios se pueden definir de dos formas:

            ul.lista-ul--color
              li
                i.fas.fa-check
                | Por extensión, expresando todos sus valores. Ejemplo: vocales = {a, e, i, o, u}.
              li
                i.fas.fa-check
                | Intención, mediante un tipo de dato. Ejemplo: altura = decimal.
          .tarjeta.p-4(titulo="Atributo" style="background-color: #fff4da")
            h4 Son las propiedades de una relación, está representado por una columna en la tabla. Representado así:
            p Sintaxis: B = Dom (C) => B es el dominio de C
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Un atributo está siempre asociado a una relación, mientras que el dominio tiene existencia propia.
              li
                i.fas.fa-check
                | Un atributo representa la propiedad de una relación.

              li
                i.fas.fa-check
                | El atributo toma los valores de un dominio.
          .tarjeta.p-4(titulo="Tupla" style="background-color: #fff4da")
            h4 Es la ocurrencia de una relación, está representada por medio de una fila.
      .col-lg-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/8.svg', alt='')
    p.mb-5(data-aos='fade-right') #[b Elementos que conforman una tabla]
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B   ").me-3.mb-0
      h3.mb-0 Tablas
    p.mb-5(data-aos='fade-right') Los datos de una base se guardan en una o varias tablas, según como están relacionados. Las tablas están compuestas por filas y columnas, en las columnas se definen los datos que se requieren almacenar especificando el tipo de dato y, en la fila quedarán los llamados registros (datos).
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        img(src='@/assets/curso/temas/tema2/9.svg', alt='')
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B   ").me-3.mb-0
      h3.mb-0 Tipos de datos
    p.mb-5(data-aos='fade-right') Las bases de datos están compuestas por tablas y estas, a su vez, contienen filas y columnas. Al momento de la creación de la columna hay que especificar, qué tipo de dato va a contener, para cuando se realice la agregación de los datos.
      br
      br
      |Existen los siguientes tipos de datos en las bases de datos:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/10.svg', alt='')
      .col-lg-6
        ul.lista-ul--color
          li
            i.fas.fa-check
            | #[b NULL:] que significa valor vacío o nulo.
          li
            i.fas.fa-check
            | #[b INTEGER:] para almacenar números enteros (1, 2, 3,-1,-5, etc.).
          li
            i.fas.fa-check
            | #[b REAL:] para almacenar valores reales o flotantes (números decimales).
          li
            i.fas.fa-check
            | #[b DATE:] para fechas.
          li
            i.fas.fa-check
            | #[b TEXT:] para especificar los datos tipo texto.
          li
            i.fas.fa-check
            | #[b BOOLEAN:] para almacenar si es falso o verdadero.
    p.mb-5(data-aos='fade-right') A continuación, una breve tabla con los tipos de datos más utilizados en las bases de datos:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2.
          br
          span Los elementos de una tabla
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th USUARIO
                th Varchar(100)
            tbody
              tr
                td BINARY
                td VARBINARY
              tr
                td BIT
                td BOOLEAN, LOGICAL, LOGICAL1
              tr
                td BYTE
                td INTEGER1
              tr
                td COUNTER
                td AUTOINCREMENT
              tr
                td CURRENCY
                td MONEY
              tr
                td DATETIME
                td DATE, TIME, TIMESTAMP
              tr
                td DOUBLE
                td FLOAT, FLOAT8, IEEEDOUBLE
              tr
                td SHORT
                td INTEGER2, SMALLINT
              tr
                td LONG
                td INT, INTEGER, 
              tr
                td LONGTEXT
                td LONGCHAR, MEMO, NOTE
              tr
                td TEXT
                td ALPHANUMERIC, CHAR, CHARACTER, VARCHAR
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Llaves primarias y foráneas
    p.mb-5(data-aos='fade-right') A continuación, se explica en qué consisten cada una de estas llaves y al final se representa a través de un ejemplo cada una de ellas:
    .tarjeta(style="background-color: #f1f8ff ").p-5
      SlyderA(tipo='b')
        .row
          .col-md-4.mb-4.mb-md-0
            h4 Llave primaria
            p Una llave o clave primaria es un campo o grupo de campos que identifican de forma única un registro. Dentro de la tabla cada registro tiene su propia llave primaria, que es única e irrepetible (González, 2022). Esta llave se implementa para identificar al registro dentro de la tabla, para poder tener acceso al registro organizarlo y manipularlo. 
              br
              br
              |#[b Ejemplo:] si se tiene una tabla “usuario” la llave primaria que identificaría a cada registro de forma única sería el campo código de usuario.
          .col-md-8
            .tarjeta.bg-white.p-5
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Tabla 3.
                br
                span Llave primaria 
              img(src='@/assets/curso/temas/tema2/11.svg', alt='')
        .row
          .col-md-4.mb-4.mb-md-0
            h4 Llaves foráneas
            p Una clave foránea es una columna o un conjunto de columnas en una tabla, cuyos valores corresponden a los valores de la clave primaria de otra tabla. Para poder añadir una fila con un valor de clave foránea específico, debe existir una fila en la tabla relacionada con el mismo valor de clave primaria.
              br
              |Se implementa para relacionar dos tablas, los atributos referenciados por medio de esta clave, solo pueden contener valores de la clave principal de la tabla con que esté relacionada.
              br
              |#[b Ejemplo:] se dispone de dos tablas que están relacionadas, una llamada “Alquileres” y otra tabla “Clientes”, se puede observar que la relación es por medio de llave foránea, en este caso la llave foránea se encuentra localizada en la tabla “Alquiler” por medio del campo “cod_cliente”, donde a su vez, debe ser clave primaria en la otra tabla con la que está relacionada.
          .col-md-8
            .tarjeta.bg-white.p-5
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Tabla 4.
                span Llaves foráneas
              img(src='@/assets/curso/temas/tema2/12.svg', alt='')
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Etapas del diseño, modelo entidad relación
    .row.mb-4
      .col-lg-8(data-aos="fade-right")
        p Para empezar a entender el modelo entidad–relación, se deben revisar primero los conceptos básicos, qué es un modelo, cuáles modelos existen y demás temas pertinentes.
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #fff4da ")
          p.mb-0 #[b Vistas:] también son llamadas relaciones virtuales, son relaciones que también llevan su nombre correspondiente y derivadas. Cuando se remite al término derivadas, se refiere a que se obtienen a partir de otras relaciones.
        p.mb-5(data-aos='fade-right') Las vistas no poseen sus propios datos, los datos que contienen pertenecen a datos almacenados en relaciones base.
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/13.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-3.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/14.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Un modelo de datos puede representar la organización conceptual o lógica de los datos que van a soportar todas las operaciones que se ejecutan en un determinado sistema o negocio. Dicho modelo es el encargado de dar una representación gráfica del mundo real al que se asocia, mostrando así, los elementos que lo componen. Para responder al avance rápido de la tecnología, los modelos de datos también han evolucionado y se han clasificado en tres grupos:
        ol.lista-ol--cuadro
          li
          .lista-ol--cuadro__vineta(style='background-color: #084a93')
            span 1
          | Modelos lógicos basados en objetos
          li
          .lista-ol--cuadro__vineta(style='background-color: #084a93')
            span 2
          | Modelos lógicos basados en registros
          li
          .lista-ol--cuadro__vineta(style='background-color: #084a93')
            span 3
          | Modelos físicos de datos
    div(style="background-color: #fff4da; border-left: 20px solid #ffb30b" data-aos="zoom-in").p-5.mb-5
      h4 Modelos de Datos
      p Cuando se habla de modelo de datos se refiere a una colección de herramientas utilizadas para la descripción de los datos, las formas como se relacionan y la semántica asociada a ellos, además de sus restricciones de consistencia.
        br
        br
        |El MER (como se denominará al modelo entidad – relación en adelante), fue un modelo introducido originalmente por Peter Chen un estudioso de las ciencias de la computación en el año 1976 a través de su artículo modelo ER, el cual ha sido nombrado en todas las investigaciones y avances de análisis y diseño de sistemas.
        br
        br
        |La base del MER está en identificar los elementos o entes importantes del sistema, los datos que componen cada una de estas entidades y cómo sería la relación o interacción entre entidades.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 5. 
      br
      span Modelo de datos
    .tabla-a.color-acento-contenido.mb-5.text-center
      table
        thead
          tr
            th(colspan='3' style='border-bottom: 1px solid #c1c1c1') Ventas
          tr
            th Código #[br] Vendedor
            th Cédula #[br] Cliente
            th Valor de #[br] Venta
        tbody
          tr
            td 125 
            td 12586956
            td 250000
          tr
            td 125
            td 5698748
            td 1250986
          tr
            td 125
            td 1054875963
            td 970000
    .tabla-a.color-acento-contenido.mb-5.text-center
      table
        thead
          tr
            th(colspan='3' style='border-bottom: 1px solid #c1c1c1') Cliente
          tr
            th Cédula #[br] Cliente
            th Nombre #[br] Cliente
            th Código #[br] Almacén
        tbody
          tr
            td 12586956
            td Alberto Corzo
            td 6
          tr
            td 5698748
            td Leidy Díaz
            td 3
          tr
            td 1054875963
            td Carlos Baron
            td 3
          tr
            td 37485789
            td Silvia Garcia
            td 2
          tr
            td 13457859
            td Luis Pardo
            td 2
          tr
            td 1001254789
            td Pedro Gil
            td 1
    .tabla-a.color-acento-contenido.mb-5.text-center
      table
        thead
          tr
            th(colspan='2' style='border-bottom: 1px solid #c1c1c1') Almacén
          tr
            th Cédula #[br] Cliente
            th Ubicación #[br] Almacén
        tbody
          tr
            td 6
            td Bogotá
          tr
            td 3
            td Cali
          tr
            td 3
            td Cali
          tr
            td 2
            td Medellin 
          tr
            td 2
            td Medellin
          tr
            td 1
            td Bucaramanga
    .tabla-a.color-acento-contenido.mb-5.text-center
      table
        thead
          tr
            th(colspan='2' style='border-bottom: 1px solid #c1c1c1') Vendedor
          tr
            th Código #[br] Vendedor
            th Nombre #[br] Vendedor
        tbody
          tr
            td 125
            td Oscar Pedrozo
          tr
            td 229
            td Laura Parra
    p.mb-5(data-aos='fade-right') A continuación, se explica en qué consisten cada una de estas llaves y al final se representa a través de un ejemplo cada una de ellas:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        img(src='@/assets/curso/temas/tema2/15.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/16.svg', alt='')
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Identificar las entidades") En este paso inicial se requiere identificar los elementos u objetos de los cuales, según el negocio, se necesita mantener información. Además, reconocer qué operaciones se pueden realizar con estos elementos o sobre ellos, y con eso podrán aparecer más entidades, pero solo deben quedar las que estén directamente relacionadas con el proceso a modelar, o sea, con el negocio. Los nombres de las entidades, como buena práctica, se deben escribir en mayúscula y en singular.
          p.text-small(numero="2" titulo="Identificar las relaciones") La relación es la interacción entre las entidades y se define, teniendo en cuenta que debe existir un análisis en cada sentido de la relación, es decir, de una entidad a la otra y viceversa para definir adecuadamente la cardinalidad (uno a uno, uno a muchos, muchos a muchos).
            br
            br
            |Un error común en el diseño de un modelo entidad – relación, o en general en un modelo de base de datos, es intentar relacionar todas las entidades entre sí, para evitar ese error, se debe pensar en las relaciones evidentes entre las entidades y si sale más de un camino, evaluar cuáles son redundantes y desecharlo para dejar uno solo, es decir, el correcto.
          p.text-small(numero="3" titulo="Identificar los atributos") Los atributos describen a cada entidad, son las características de cada una de ellas, que tengan relevancia con el negocio, porque no todos los atributos de una entidad deben ser almacenados. Por ejemplo, si se encuentra en la entidad "Cliente”, se pueden ver atributos como: color de ojos, edad, fecha de nacimiento, color de piel, estatura, etc.
            br
            br
            |Todos esos atributos forman parte de la entidad "Cliente”, pero no son relevantes para el negocio y, por ende, no se deben diseñar, ni plasmar en ninguna parte del modelo de datos. Es importante tener definido a qué tipo de dato pertenece el atributo y si su valor es obligatorio u opcional. Para cada una de estas características de los atributos, existe una manera grafica de representarlo, de acuerdo con la notación utilizada en el modelo.
          p.text-small(numero="4" titulo="Depurar el modelo") Al tener definido un modelo inicial, se deben revisar las características y operaciones de una entidad, desde la perspectiva de sus datos.
    .bloque-derecha.mb-5(data-aos="zoom-in")
      .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img.d-flex.align-items-center( style="background-color: #f6f6f6").p-4
          img(src='@/assets/curso/temas/tema2/17.svg', alt='' style='width: 427px').m-auto
        .bloque-texto-g__texto--border.p-2.d-inline-block
          .bloque-texto-g__texto.p-4
            p.mb-5 La seguridad de las bases de datos se enfoca en los siguientes ítems:
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Unicidad de ocurrencias: no deben existir dos filas o registros con la misma información.
              li
                i.fas.fa-check
                | Múltiples atributos: las entidades deben tener más de un atributo, se deben evitar entidades de solo una ocurrencia.
              li
                i.fas.fa-check
                | Múltiples ocurrencias: complementando la anterior característica, se deben tener mínimo dos atributos en cada entidad.
              li
                i.fas.fa-check
                | Exclusividad de ocurrencias y de atributos: las entidades deben tener exclusividad en sus ocurrencias, es decir, no pueden estar contenidas en otra entidad.
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Normalización 
    p.mb-5(data-aos='fade-right') Cuando se comienza el proceso de diseño de una base de datos, no es suficiente con conocer y tener experticia en el diccionario de datos; el reto está en poder diseñar una base de datos con una estructura estable y lógica tal que:

    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B   ").me-3.mb-0
      h3.mb-0 Cada registro contiene:
    .row.justify-content-center.mb-5
      .col-lg-1.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/18.svg', alt='')
      .col-lg-11(data-aos="fade-right")
        ul.lista-ul--color
          li
            i.fas.fa-check
            | El sistema de base de datos mantenga la integridad de los datos y no sufra de anomalías o fallos de almacenamiento.
          li
            i.fas.fa-check
            | El modelo lógico pueda modificarse fácilmente para admitir nuevos requerimientos.
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4(style="background-color: #e7f3fe")
          p.mb-0 Por lo anterior, se hace hincapié, en que lo más importante de un sistema de base de datos es su diseño, ya que, de este depende su ciclo de vida. Una base de datos implementada sobre un buen diseño, tiene más alta probabilidad de durar en un mundo con requerimientos cambiantes, que una base de datos con un diseño pobre. De esta forma, un buen proceso de diseño tendrá un rendimiento proporcional, aunque aumente su tamaño y será lo suficientemente flexible para incorporar nuevos requerimientos o características adicionales.
        p Por otra parte, la inconsistencia de datos es el concepto más cotidiano y se refiere a tener información en una base de datos, donde debería ser igual y no lo es. Un ejemplo sería un estudiante de una universidad, que en una parte de la base de datos aparece como no aprobado en Calculo I, y en otra ubicación, de la misma base de datos, aparece como aprobado.
          br
          br
          |Teniendo en cuenta lo anterior, un paso importante en el diseño de una base de datos, es el proceso de normalización.
      .col-lg-3.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/19.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/20.svg', alt='')
      .col-lg-7(data-aos="fade-right")
        h5 La normalización se lleva a cabo por tres razones:
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Estructurar los datos de forma que se puedan representar las relaciones pertinentes entre los datos.
          li
            i.fas.fa-check
            | Permitir la recuperación sencilla de los datos en respuesta a las solicitudes de consultas y reportes.
          li
            i.fas.fa-check
            | Simplificar el mantenimiento de los datos al ser actualizados, insertados o eliminados.
        br
        h5 Una mirada rápida a la normalización es a través de los siguientes pasos:
        p #[b 1.] Descomponer todos los grupos de datos en registros bidimensionales.
          br
          |#[b 2.] Eliminar todas las relaciones en la que los datos no dependan completamente de la llave primaria del registro. 
          br
          |#[b 3.] Eliminar todas las relaciones que contengan dependencias transitivas.
    .border-dash.p-5.mb-5
      .row.justify-content-center
        .col-lg-7(data-aos="fade-right")
          p #[b La normalización es un proceso de varias, formas normales], con una totalidad de cinco, para un buen diseño de base de datos es indispensable cumplir con las condiciones de las tres primeras formas normales.
            br
            |La teoría de normalización tiene como fundamento el concepto de formas normales; se dice que una relación está en una determinada forma normal si satisface un conjunto de restricciones.
            br
            br
            |#[b Basado en lo anterior y como ejemplo], la siguiente figura muestra un reporte de venta de la empresa Opus, la empresa no ha realizado el proceso de requerimientos, pero necesita una base de datos para su proceso de venta y envía este reporte, donde se evidencia toda la información que domina este proceso de negocio, la cual se debe almacenar en una base de datos:
        .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/21.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 6.
          br
          span Reporte de ventas
        .tabla-a.color-acento-contenido.mb-5.text-center
          table
            thead
              tr
                th Código #[br] Vendedor
                th Nombre #[br] Vendedor
                th Cédula #[br] Cliente
                th Nombre #[br] Cliente
                th Códgo #[br] Almacen
                th Ubicación #[br] Almacén
                th Valor de #[br] Venta
            tbody
              tr
                td 125
                td Oscar Pedrozo
                td 12586956
                  br
                  |5698748
                  br
                  |1054875963
                td Alberto Corzo
                  br
                  |Leidy Díaz
                  br
                  |Carlos Baron
                td 6
                  br
                  |3
                  br
                  |3
                td Bogotá
                  br
                  |Cali
                  br
                  |Cali
                td 250000
                  br
                  |1250986
                  br
                  |970000 
              tr
                td 229
                td Laura Parra
                td 37485789
                  br
                  |13457859
                  br
                  |1001254789
                td Silvia Garcia
                  br
                  |Luis Pardo
                  br
                  |Pedro Gil
                td 2
                  br
                  |2
                  br
                  |1
                td Medellin
                  br
                  |Medellin
                  br
                  |Bucaramanga
                td 356800
                  br
                  |785000
                  br
                  |1350000
    .cajon-b.color-acento-contenido.p-3.mb-5.abajo-derecha
      p.mb-0 De acuerdo a la anterior imagen, si se aplican unos conceptos básicos de diccionario de datos y se listan dichos datos se encontrarán grupos repetitivos, lo que indica que esa lista o ese reporte como insumo o diccionario de datos no está normalizado.
        br
        br
        |Un mismo dato almacenado en distintas filas, implica ineficiencia en el uso de los medios de almacenamiento “¿Por qué es un inconveniente almacenar múltiples veces el mismo dato?”, acarrea serios inconvenientes en el procesamiento de altas, bajas y modificaciones; por ende, de aquí parte el proceso de normalización.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-3.mb-5.bg-gradient
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-10.mb-3.mb-sm-0.text-white
                  h3.mb-1 Anexo
                  p.text-small A través del siguiente documento se pueden conocer las cinco formas normales:
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank" type="application/pdf")
                    span(style='color: #12263f') Descargar 
                    i.fas.fa-file-download(style='color: #12263f')    
    Separador  
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.5. Cardinalidad
    p.mb-5(data-aos='fade-right') La cardinalidad es la cantidad de entidades con las cuales, otra determinada entidad se puede asociar mediante una relación, la cardinalidad puede ser:
    .row.justify-content-center.mb-5
      .col-lg-10
        TabsA.color-acento-botones.mb-5
          .tarjeta.p-4(titulo="Uno a Uno (1:1)" style="background-color: #fff4da")
            .tarjeta.bg-white.p-4
              img(src='@/assets/curso/temas/tema2/22.svg', alt='')
          .tarjeta.p-4(titulo="Uno a muchos (1:M)" style="background-color: #fff4da")
            .tarjeta.bg-white.p-4
              img(src='@/assets/curso/temas/tema2/23.svg', alt='')
          .tarjeta.p-4(titulo="Muchos a muchos (N:M)" style="background-color: #fff4da")
            .tarjeta.bg-white.p-4
              img(src='@/assets/curso/temas/tema2/24.svg', alt='')
          .tarjeta.p-4(titulo="Muchos a uno (N:1)" style="background-color: #fff4da")
            .tarjeta.bg-white.p-4
              img(src='@/assets/curso/temas/tema2/25.svg', alt='')






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

<style lang="sass">
.cajon-b.color-acento-contenido:before
  opacity: 0.2
.tarjeta-up
  position: relative
  overflow: hidden
  &__contenido
    position: absolute
    height: 100%
    bottom: 0
    left: 0
    width: 100%
    transform: translateY(80%)
    transition: transform 0.3s ease-in-out
  &:hover
    .tarjeta-up__contenido
      transform: translateY(0%)
</style>

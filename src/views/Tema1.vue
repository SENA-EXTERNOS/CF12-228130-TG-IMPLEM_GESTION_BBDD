<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a los sistemas de BD
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right").mb-lg-0.mb-3
        p Una de las grandes metas de las organizaciones a nivel mundial, en el mercado internacional, es mostrar competitividad y eficiencia para sostenerse y así alcanzar el crecimiento mercantil. Para conseguir esta meta se debe tener en cuenta la gran demanda de datos y la necesidad de gestionarlos; es así como, la implementación del sistema de gestión de bases de datos (SGBD), se convierte en una herramienta imprescindible para el respetivo manejo de los datos, evidenciando un crecimiento en la gestión de los mismos y mejorando la eficiencia para su utilización en la toma de decisiones.
          br
          br
          | Las bases de datos son activos intangibles muy importantes para la organización, en ellas se almacena la gran mayoría de la información obtenida de los resultados del negocio en términos de costos, márgenes del mercado, ventas, clientes, rentabilidad y proveedores, etc. Estas disponen de información estratégica, que además es protegida por la ley; es por ello que, la disponibilidad de dicha información sin control, podría provocar sanciones y la pérdida de credibilidad ante los clientes.
      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/1.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #ffecc1 ")
          p.mb-0 En la actualidad la información operativa y estratégica de la que dispone una empresa, se encuentra estructurada en bases de datos. Teniendo en cuenta que estos sistemas de gestión manipulan, operan y administran cada uno de los datos e información valiosa de la organización, gran parte del presupuesto se invierte en BD, tanto en copias de seguridad, actualizaciones, mejoraras del rendimiento, accesibilidad, como en el cuidado de la calidad de los datos. Un objetivo crucial para el CEO de la compañía es garantizar la gestión en las bases de datos, ya que es primordial para ejecutar el rol de soporte de las diferentes infraestructuras y procesos que garantizan sus activos.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Conceptos generales sobre BD
    p.mb-4(data-aos='fade-right') Como primera medida debe definirse el término “base de datos”, este es un conjunto de datos clasificados metódicamente y correlaciones entre ellos, con el propósito de lograr una eficiencia y valor de esos datos. “Una base de datos es un conjunto de datos almacenados en memoria externa que están organizados mediante una estructura de datos” (Marqués, 2010).
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B   ").me-3.mb-0
      h3.mb-0 Origen bases de datos
    p.mb-5(data-aos='fade-right') A continuación, se explica cronológicamente el origen de las bases de datos:
    .tarjeta(style="background-color: #edf7fe").p-4.mb-5
      LineaTiempoC.color-primario(text-small)
        .row.justify-content-center(titulo="Orígenes")
          .col-md-6.mb-4.mb-md-0
            p Los orígenes de las bases de datos provienen de la antigüedad, normalmente se manejaban en especies de bibliotecas y registros, que eran utilizados, en gran parte, para recolectar información de las cosechas y censos. Sin embargo, el método empleado era tedioso e ineficaz y el proceso era muy lento, ya que el trabajo se realizaba de forma manual porque no existían máquinas para ello.
              br
              br
              |Luego se utilizaron sistemas de ficheros para acceder a la información. Estos sistemas fueron en su momento una novedad, reemplazando los archivadores manuales y proporcionando una forma más eficaz de acceder a los datos almacenados.   
              br
              br
              |La implementación de bases de datos surgió gracias al requisito de almacenar grandes volúmenes de información, es así como, este concepto ha permanecido ligado a la informática.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/2.jpg', alt='' style='border-radius: 20px')
        .row.justify-content-center(titulo="Década de 1950")
          .col-md-6.mb-4.mb-md-0
            p En el año 1884 se creó una máquina, que además de ser automática utilizaba tarjetas perforadas, su creador fue Herman Hollerith quien fue nombrado el primer ingeniero estadístico de la historia. Esta máquina contribuyó al manejo de la información en los censos, que antes eran manuales.
              br
              br
              |Como consecuencia de lo anterior, a mediados de la época de los años 50 se dio origen a las famosas cintas magnéticas, su función primordial era la automatización de la información y crear sus respectivos respaldos. Esto surgió para suplir la necesidad de las grandes industrias.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/3.jpg', alt='' style='border-radius: 20px')
        .row.justify-content-center(titulo="Década de 1960")
          .col-md-6.mb-4.mb-md-0
            p Para esta época las máquinas ya funcionaban por medio de discos, lo cual se hizo popular porque se podía realizar consultas directamente en la información, esta forma era más sencilla y no se necesitaba conocer la ubicación de los datos para hacer la búsqueda.   
              br
              br
              |Posteriormente, en esta época aparecieron las primeras generaciones de bases de datos jerárquicas y las bases de datos de red, aportando un gran beneficio en los métodos de guardar estructuras de datos.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/4.jpg', alt='' style='border-radius: 20px')
        .row.justify-content-center(titulo="Década de 1970")
          .col-md-6.mb-4.mb-md-0
            p El científico informático inglés Edgar Frank Codd, popular por sus grandes contribuciones a la teoría de bases de datos relacionales, determinó y difundió para los sistemas de datos una serie de normas plasmadas en su artículo, bajo el modelo relacional. Este gran aporte del científico Codd, generó el nacimiento de la segunda generación de los sistemas gestores de bases de datos. 
              br
              br
              |En consecuencia, Larry Ellison, partiendo de los avances de Edgar F. Codd sobre los sistemas de bases de datos relacionales, fomentó el #[em Relational Software System], donde actualmente se distingue como Oracle Corporation, fabricando un sistema de gestor de bases de datos relacional manteniendo como identificador el nombre de la organización Oracle.
              br
              br
              |Hoy en día el gestor de base de datos de Oracle es considerado el mejor, gracias a todas las funcionalidades, cobertura, seguridad y soporte; ya que brinda un buen servicio por medio de paquetes que se ajustan a las necesidades de las organizaciones. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/5.jpg', alt='' style='border-radius: 20px')
        .row.justify-content-center(titulo="Década de 1980")
          .col-md-6.mb-4.mb-md-0
            p Empezó la comercialización de los sistemas relacionales, SQL comenzó a ser el estándar en la industria, gracias a su fácil programación y manejo. Cabe resaltar que las bases de datos relacionales compuestas por tablas (filas y columnas) pudieron competir con los sistemas de base de datos jerárquicas y de red.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/6.jpg', alt='' style='border-radius: 20px')
        .row.justify-content-center(titulo="Década de 1990")
          .col-md-6.mb-4.mb-md-0
            p En esta época la investigación dio un cambio hacia las bases de datos orientadas a objetos, las cuales han tenido un gran desempeño en el manejo de datos complejos. El desarrollo de las herramientas como Access del paquete de Microsoft Office, creó el inicio de las bases de datos orientadas a objetos. De esta forma se originó la tercera generación de sistemas gestores de bases de datos.
              br
              br
              |Como consecuencia, surgieron varios cambios en el lenguaje SQL, agregando nuevas funcionalidades como lo fueron: expresiones regulares, consultas recursivas, #[em triggers], etc.
              br
              br
              |Por otra parte, en el auge de la década de los noventa sería es el nacimiento del World Wide Web, lo cual fue una gran ayuda, ya que a través de este se mejora la consulta a bases de datos.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/7.jpg', alt='' style='border-radius: 20px')
        .row.justify-content-center(titulo="Siglo XXI")
          .col-md-6.mb-4.mb-md-0
            p Las industrias que dominan el mercado en sistemas de gestores de bases de datos son:
              br
              br
              |•	IBM
              br
              |•	Microsoft
              br
              |•	Oracle
              br
              br

              |Estas son bases de datos con el lenguaje SQL, pero están surgiendo las bases de datos NoSQL (bases de datos no relacionales), que, gracias al manejo de un gran volumen de información con un flujo constante, como lo son las redes sociales, dio pie a grandes industrias que implementaron este tipo de bases de datos, como son: Facebook y Twitter, etc.  Algunas de estas bases de datos NoSQL son: Cassandra, MongoDB, HBase, etc.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/8.jpg', alt='' style='border-radius: 20px')
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Características de un sistema de BD  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Un sistema de bases de datos es un conjunto de programas que permiten su gestión. En pocas palabras, permite realizar las operaciones de almacenar, modificar, listar y eliminar la información de estas. Su principal función es permitir la conectividad entre las bases de datos y los usuarios finales, o programas correspondientes; estructurando los datos y permitiendo su acceso.
          br
          br
          |Las principales características de un SGBD (sistema gestor de bases de datos) son:
    SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/10.svg' alt='AvatarTop' style='width: 135px')
        .tarjeta.w-100(style="background-color:#c3e2fd ").p-4
          .text-center.mt-4
            p Permite la accesibilidad de los datos de una forma eficiente y eficaz.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/11.svg' alt='AvatarTop' style='width: 135px')
        .tarjeta.w-100(style="background-color:#c3e2fd ").p-4
          .text-center.mt-4
            p Gestiona estructuradamente los datos para una óptima conectividad entre los usuarios finales o programas.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/12.svg' alt='AvatarTop' style='width: 135px')
        .tarjeta.w-100(style="background-color:#c3e2fd ").p-4
          .text-center.mt-4
            p Dispone de un lenguaje de programación que permite la manipulación de los datos, mediante la implementación de diferentes operaciones. 
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/13.svg' alt='AvatarTop' style='width: 135px')
        .tarjeta.w-100(style="background-color:#c3e2fd ").p-4
          .text-center.mt-4
            p Proporciona integridad y seguridad en los datos.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/14.svg' alt='AvatarTop' style='width: 135px')
        .tarjeta.w-100(style="background-color:#c3e2fd ").p-4
          .text-center.mt-4
            p Dispone de API´s intuitivas que permiten un fácil manejo para gestionar los datos.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/15.svg' alt='AvatarTop' style='width: 135px')
        .tarjeta.w-100(style="background-color:#c3e2fd ").p-4
          .text-center.mt-4
            p El sistema de gestión de almacenamiento de las bases de datos es totalmente independiente de los clientes o usuarios finales (programas).
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/16.svg' alt='AvatarTop' style='width: 135px')
        .tarjeta.w-100(style="background-color:#c3e2fd ").p-4
          .text-center.mt-4
            p Permite gestionar diferentes tipos de bases de datos, ya sean bases de datos orientadas a objetos o bases de datos relacionales. 
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/17.svg' alt='AvatarTop' style='width: 135px')
        .tarjeta.w-100(style="background-color:#c3e2fd ").p-4
          .text-center.mt-4
            p Posibilita la multiplicidad de acceso a los datos.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Arquitectura de los sistemas de BD
    p.mb-5(data-aos='fade-right') Generalmente cuando se aborda el tema de arquitectura de un SGBD, se habla de una arquitectura de esquemas, encontrando:
    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/18.svg', alt='Texto que describa la imagen')
        h2.text-center Esquema conceptual:
        p.text-center Su principal objetivo es ocultar detalles de la estructura física del almacenamiento, concentra su funcionalidad en las entidades, restricciones, tipos de datos y las relaciones.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/19.svg', alt='Texto que describa la imagen')
        h2.text-center Esquema interno:
        p.text-center Es el encargado de describir la estructura física del almacenamiento en la base de datos.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/20.svg', alt='Texto que describa la imagen')
        h2.text-center Esquema externo:
        p.text-center Describe las bases de datos para los diferentes usuarios.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in"): img(src='@/assets/curso/temas/tema1/21.svg', alt='')
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 Tipos de BD (relacional - no relacional)
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B   ").me-3.mb-0
      h3.mb-0 Bases de datos Relacional
    .bloque-derecha.mb-5(data-aos="zoom-in")
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img.d-flex.align-items-center( style="background-color: #FEE3A8").p-4
          img(src='@/assets/curso/temas/tema1/23.svg', alt='' style='width: 427px').m-auto
        .bloque-texto-g__texto--border.p-2.d-inline-block
          .bloque-texto-g__texto.p-4
            p.mb-0 Son una colección de elementos conformados por datos debidamente organizados y estructurados en un conjunto de tablas relacionadas entre sí. Donde se puede tener acceso a los datos, de forma fácil y de varias maneras diferentes, sin tener que afectar a la organización de las distintas tablas que conforman la base de datos (Mendoza y López, 2018). La interfaz estándar e intuitiva al usuario y su aplicación a la base de datos, se hace por medio del lenguaje de consultas estructuradas (SQL). Los diferentes comandos SQL se emplean para la manipulación de los datos, como realizar diferentes consultas para obtener información de la base de datos, eliminar datos, editar y la recopilación de datos para informes.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #d9faff ")
          p.mb-0 Las bases de datos relacionales tienen como objetivo organizar la información en partes pequeñas, que se relacionan mediante identificadores. Además, son bases de datos más robustas, tienen una gran capacidad de almacenamiento, contienen menos vulnerabilidad ante posibles fallas; todas estas son unas de sus principales características.
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B   ").me-3.mb-0
      h3.mb-0 Bases de datos No Relacional
    .row.justify-content-center.mb-5
      .col-lg-3.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/24.svg', alt='')
      .col-lg-9(data-aos="fade-left")
        div(style="background-color: #00defc").p-3
          .border-dash.p-2
            .bg-white.p-4
              p.mb-0 Este tipo de bases de datos no relacional es ideal para construir aplicaciones modernas, gracias a que está conformada por esquemas flexibles y diseñadas específicamente para modelos de datos especiales. Son reconocidas en el desarrollo de software, al ser de fácil construcción y manejo, permiten una gran escalabilidad y funcionalidad en el rendimiento. Este tipo de bases de datos usan una gran variedad de modelos de datos conformados por: documentos, clave – valor, grafos, en-memoria y búsqueda.
                br
                br
                |Las bases de datos no relacionales son también llamadas bases de datos NoSQL, no disponen de un identificador que sirve para relacionar entre un conjunto de datos y otro. La información se organiza generalmente mediante documentos, es una base de datos muy práctica cuando no se tiene claridad en el esquema de datos que se va implementar.
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        div(style="background-color: #00defc").p-3
          .border-dash.p-2
            .bg-white.p-4
              p.mb-0 Un tipo de bases de datos no relacional es la que implementa clave – valor, es una de las más prácticas en cuanto a su funcionalidad. Cada elemento dentro de la base de datos está identificado por una llave única, que la hace más eficiente al momento de recuperar la información, habitualmente la información es almacenada como un objeto binario #[em (BLOB)], se caracterizan en su eficacia al momento de escribir o leer la información.
      .col-lg-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/25.svg', alt='')
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.5 Ventajas y desventajas
    p.mb-5(data-aos='fade-right') A continuación, se muestra un comparativo entre las ventajas y desventajas de estas dos bases de datos:
    //- .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
    //-   i.fas.fa-square(style="color: #FFB30B   ").me-3.mb-0
    //-   h3.mb-0 Ventajas y desventajas de las bases de datos relacionales
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/ventajas.svg', alt='')

        h2.text-center Ventajas de las bases de datos relacionales
        ul.lista-ul--color
          li
            i.fas.fa-check(style='color: #084a93')
            | Una de las ventajas es la #[b sencillez], es muy fácil trabajar en ella permitiendo la creación y la accesibilidad al momento de ampliar la base de datos.
          li
            i.fas.fa-check(style='color: #084a93')
            | La #[b uniformidad] de los datos, favoreciendo que no exista la duplicidad en los registros.
          li
            i.fas.fa-check(style='color: #084a93')
            | La #[b accesibilidad], ya que permite que varios usuarios accedan a la base de datos al mismo tiempo, también implementa un sistema de bloqueos a los usuarios al momento de la actualización de los datos, para evitar posibles conflictos entre usuarios.
          li
            i.fas.fa-check(style='color: #084a93')
            | La #[b atomicidad], donde define si una operación fue terminada o no, para que, en caso de fallas en el sistema, determinada operación no quede a medias.
          li
            i.fas.fa-check(style='color: #084a93')
            | El #[b rendimiento], son bases de datos que mantienen un buen rendimiento en cuanto a la diversidad de herramientas que contiene y así como, una rápida experiencia de usuario.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/desventajas.svg', alt='')
        h2.text-center Desventajas de las bases de datos no relacionales
        ul.lista-ul--color
          li
            i.fas.fa-check(style='color: #01c2e8')
            | El costo de #[b mantenimiento], la gran mayoría de las empresas tienen un crecimiento muy dinámico, y los registros almacenados en las bases de datos van a tener muchas modificaciones y un volumen en su crecimiento.
          li
            i.fas.fa-check(style='color: #01c2e8')
            | Espacio #[b limitado], a medida que crece el volumen de los datos, va a requerir de más espacio.
    //- .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
    //-   i.fas.fa-square(style="color: #FFB30B   ").me-3.mb-0
    //-   h3.mb-0 Ventajas y desventajas de las bases de datos No relacionales (NoSQL)
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/ventajas.svg', alt='')

        h2.text-center Ventajas de las bases de datos No relacionales (NoSQL):
        p La forma de almacenamiento de la información presenta ciertas ventajas a comparación de las bases de datos relacionales:
        ul.lista-ul--color
          li
            i.fas.fa-check(style='color: #084a93')
            | #[b Se ejecutan en máquina con poco recurso.]
          li
            i.fas.fa-check(style='color: #084a93')
            |  #[b Escalabilidad horizontal], en busca de un mejor rendimiento se pueden añadir nuevos nodos, indicándole al sistema los nodos que están disponibles.
          li
            i.fas.fa-check(style='color: #084a93')
            | #[b Manejan gran cantidad de datos], debido a que implementan una estructura distribuida, en varios casos mediante tablas hash.

          li
            i.fas.fa-check(style='color: #084a93')
            | #[b No generan cuellos de botella], el principal problema de los sistemas SQL, es que se requiere trascribir cada sentencia que se va a ejecutar, y cada sentencia al ser más compleja necesita de un nivel de ejecución aún más complejo, donde muchas peticiones pueden volver lento al sistema. 
          li
            i.fas.fa-check(style='color: #084a93')
            | Algunos tipos de almacén de bases de datos NoSQL incluyen diferentes tipos de almacenes como por ejemplo el almacén de columnas, de documentos, de key-value store, de gráficos, de objetos, de XML y otros modos de almacén de datos.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/desventajas.svg', alt='')
        h2.text-center Desventajas de las bases de datos No relacionales (NoSQL):
        ul.lista-ul--color
          li
            i.fas.fa-check(style='color: #01c2e8')
            | En este tipo de bases de datos #[b no se admiten funciones de fiabilidad.]
          li
            i.fas.fa-check(style='color: #01c2e8')
            | #[b Complejidad en el sistema] para incrementar el grado de características de las bases de datos, ya que, el desarrollador debe implementar su propio código.
          li
            i.fas.fa-check(style='color: #01c2e8')
            | #[b Incompatibilidad con consultas SQL], significa que se necesita construir su propio lenguaje para ejecutar las diferentes consultas.
          li
            i.fas.fa-check(style='color: #01c2e8')
            | #[b No son transaccionales.]
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1.
          br
          span Uso SQL y de NOSQL
        .dots-editados
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/26.svg', alt='Texto que describa la imagen')
            .tarjeta.color-acento-contenido.p-3(x="14%" y="70%" numero="+")
              .bg-white.p-2
                .h5.mb-2.text-center SQL
                p Cuando el volumen de los datos no crece o crece moderadamente.
                  br
                  |Cuando las necesidades del proceso se pueden realizar en un solo servidor.
                  br
                  br
                  |Cuando no tenemos picos de uso del sistema por parte de los usuarios finales.

            .tarjeta.color-primario.p-3(x="84%" y="70%" numero="+")
              .h5.mb-2.text-center NoSQL 
              p Cuando el volumen de los datos crece rápidamente en momentos puntuales.
                br
                |Cuando las necesidades del proceso no se pueden prever.
                br
                br
                |Cuando tenemos picos en el uso del sistema por parte de los usuarios en múltiples ocasiones.












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

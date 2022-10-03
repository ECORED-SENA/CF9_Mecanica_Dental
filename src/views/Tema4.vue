<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Diseño y elaboración de la estructura
    
    .d-flex.flex-wrap.align-items-center.mb-5(data-aos="fade-right")
      img.col-md-2.mb-2.mb-md-0(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 85px;")
      p.ps-md-4.col-md.mb-0 Cuando se van a hacer modelos físicos con escayola dental tipo IV, con posibilidad de revestimiento (con materiales refractarios), o escayola dental metalizada, resinas epóxicas (para impresoras 3D), existen tratamientos específicos para mejorar la dureza superficial del modelo, mediante sistemas de templado, barnizado y metalizado. A renglón seguido, se presentan algunas técnicas para los modelos.
    
    SlyderB.mb-5(:datos="datosSlyder" data-aos="fade-left")

    .d-flex.flex-wrap.align-items-center.mb-5(
      style="padding: 3rem; background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(229,241,248,1) 20%, rgba(229,241,248,1) 80%, rgba(255,255,255,1) 100%); margin-left: -3rem; margin-right: -3rem; min-width: calc(100% + 6rem);"
    )
      .col-xl-8.mx-auto.order-2.order-xl-1.pe-xl-4
        .title-edit.mb-3(data-aos="fade-right")
          span(style="background-color: #0082EF; width: 21px; height: 21px;")
          h4 Técnicas metal-cerámica:
        p(data-aos="fade-right") La prótesis fija de metal cerámica sobre implantes dentales es una prótesis que combina unas pequeñas piezas de metal con una capa de cerámica que se adapta para la preparación del diente. Este tipo de prótesis es la que más parecido tiene al esmalte dental. #[b(style="color: #0273BC") Esta técnica se caracteriza por:]
        ul.lista-ul
          li(data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #0273BC; font-size: 20px")
            P #[b(style="color: #0273BC") Encerados:] se encera la corona o puente y se ponen los jitos (son estructuras a través de la cual va a pasar el metal colado), para llevarlo a la cámara de rechupado. En los jitos, a veces se pueden poner estructuras complementarias para la expulsión de gases. Es muy importante el encerado para obtener un buen colado (se emplearán aleaciones preciosas o titanio, etc.).
          li(data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #0273BC; font-size: 20px")
            P #[b(style="color: #0273BC") Técnicas de colado:] se pone el encerado en el cilindro de revestimiento, se expande el revestimiento en el horno, se cuela el metal, se elimina el revestimiento y, por último, se repasa y pule el metal para eliminar los jitos y demás).
          li(data-aos="fade-right")
            ul.lista-ul
              li
                span(style="background-color: #0082EF; min-width: 8px; height: 8px; width: 8px; border-radius: 50%; margin-right: .5rem; margin-top: .4rem;")
                | Es muy importante poner el encerado en el centro del cilindro, porque si no, habrá alteraciones en el colado.
              li
                span(style="background-color: #0082EF; min-width: 8px; height: 8px; width: 8px; border-radius: 50%; margin-right: .5rem; margin-top: .4rem;")
                | Los cilindros, una vez fraguados, se meten al horno a una temperatura y presión determinadas. La temperatura se encargaba de que la cera desapareciera y de que se produjera una expansión.
              li
                span(style="background-color: #0082EF; min-width: 8px; height: 8px; width: 8px; border-radius: 50%; margin-right: .5rem; margin-top: .4rem;")
                | Antes se realizaba el colado mediante un soplete, hoy día se realiza por inducción, con un aparato que nos indica la temperatura y presión adecuadas. Cuando se alcanza, se dispara el metal, que es “chupado” por el cilindro.
              li
                span(style="background-color: #0082EF; min-width: 8px; height: 8px; width: 8px; border-radius: 50%; margin-right: .5rem; margin-top: .4rem;")
                | Una vez obtenida la estructura, se pule y se repasa. Esta estructura se debe probar en boca.
          li(data-aos="fade-right")
              i.fas.fa-angle-right(style="color: #0273BC; font-size: 20px")
              P #[b(style="color: #0273BC") Soldadura en prótesis fija:] la ventaja del láser es que la microestructura de la soldadura es la misma que la del resto de la restauración. La convencional utiliza otro metal.
          li(data-aos="fade-right")
              i.fas.fa-angle-right(style="color: #0273BC; font-size: 20px")
              P #[b(style="color: #0273BC") Recubrimientos:] hoy día suelen ser cerámicos (feldespáticas). Las estructuras cerámicas completas usan cerámica aluminosa o circoniosa, revestidas por feldespática.
      .col-xl-4.mx-auto.mb-4.mb-xl-0.order-1.order-xl-2
        img(src="@/assets/curso/temas/tema4/img-6.png" data-aos="fade-left" style="max-width: 400px;")
    .title-edit.mb-5(data-aos="fade-right")
      span(style="background-color: #0082EF; width: 21px; height: 21px;")
      h4 Prótesis fija cerámica: 
    p.mb-5(data-aos="fade-right") Consta de dos partes: cofia (estructura cerámica) + revestimiento. La cofia puede ser de cerámica feldespática reforzada, pero normalmente son de óxido de alúmina o circonio.

    .col-xl-8.mb-5.mx-auto(data-aos="fade-right")
      img(src="@/assets/curso/temas/tema4/img-7.jpg" style="max-width: 820px;")
    p.mb-5(data-aos="fade-right") En la siguiente figura se describen esos pasos importantes que se llevan a cabo en la fabricación de la prótesis fija en cerámica.

    LineaTiempoD.color-primario.mb-5
      .row.pt-3(numero="1" titulo="Recubrimientos" data-aos="fade-right")
        .col-md-6.mb-4.mb-md-0
          p Se usa en manchas blancas, pigmentaciones superficiales, etc. Los pigmentos que se usan son de todos los colores, y suelen estar formados por óxidos metálicos.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-8.png')
      .row.pt-3(numero="2" titulo="Composites y acrílicos" data-aos="fade-right")
        .col-md-6.mb-4.mb-md-0
          p Se usan en provisionales, de larga duración, por sus características de adaptación y resistencia. Se le pueden aplicar refuerzos de fibra de vidrio o fibra <em>Kevlar</em>.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-9.png')
      .row.pt-3(numero="3" titulo="Colocación del <em>opaquer</em>" data-aos="fade-right")
        .col-md-6.mb-4.mb-md-0
          p Se utiliza para no ver el color del metal. El #[em opaquer] se usa en función de las capas que se vayan a hacer. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-10.png')
      .row.pt-3(numero="4" titulo="Maquillaje" data-aos="fade-right")
        .col-md-6.mb-4.mb-md-0
          p Puede usarse en cerámicas, composites y acrílicos.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-11.png')
      .row.pt-3(numero="5" titulo="Maquillaje cerámica" data-aos="fade-right")
        .col-md-6.mb-4.mb-md-0
          p Se usa en coronas, puede ser superficial o en profundidad (es más complejo).
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-12.png')
      .row.pt-3(numero="6" titulo="Maquillaje superficial" data-aos="fade-right")
        .col-md-6.mb-4.mb-md-0
          p Se usa en manchas blancas, pigmentaciones superficiales, etc. Los pigmentos que se usan son de todos los colores, y suelen estar formados por óxidos metálicos.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-13.png')
      .row.pt-3(numero="7" titulo="Maquillaje en profundidad" data-aos="fade-right")
        .col-md-6.mb-4.mb-md-0
          p Cambia tonalidades más complejas de realizar; se suele usar para carillas.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-14.png')
    p.mb-5(data-aos="fade-right") Para profundizar sobre el diseño y fabricación de prótesis fijas de manera analógica, se invita a ver este video. 

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .title-edit.mb-5(data-aos="fade-right")
      span(style="background-color: #0082EF; width: 21px; height: 21px;")
      h4 Técnicas de CAD-CAM:

    p.mb-5(data-aos="fade-left") Esta técnica permite la realización de restauraciones indirectas, prótesis fijas unitarias y plurales, #[em inlay-cores], carillas, prótesis fijas peri implantares (pegadas o atornilladas) e incluso prótesis provisionales. #[b(style="color: #0273BC") En el siguiente recurso se pueden ver sus principales etapas.]
    
    SlyderB.mb-5(:datos="datosSlyder2" data-aos="fade-right")    
    
    p.mb-5(data-aos="fade-right") En el siguiente video se profundiza. sobre el diseño y fabricación de prótesis fijas de manera digital.
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Modelo con muñones independientes',
        texto:
          'Técnica hidrocoloide, modelo completo de la arcada,  troqueles independientes.',
        imagen: require('@/assets/curso/temas/tema4/img-1.jpg'),
      },
      {
        titulo:
          'Modelo elaborado con técnicas de ensamblaje <em>(Di-Lock)</em>',
        texto:
          'En una cubeta molde se instala el modelo, se realiza el corte de cada pilar y queda separado cada uno.',
        imagen: require('@/assets/curso/temas/tema4/img-2.jpg'),
      },
      {
        titulo:
          'Modelo elaborado con técnica de poste telescópico <em>(Pindex)</em>',
        texto:
          'El sistema instala una espiga en la base del pilar, la confección de zócalo se seguetea e independiza.',
        imagen: require('@/assets/curso/temas/tema4/img-3.jpg'),
      },
      {
        titulo: 'Modelo con encías desmontables',
        texto:
          'Mejoran la confección de modelos facilitando la consecución de idóneos espesores cervicales y perfiles de emergencia de las prótesis fijas, mejorando la estética.',
        imagen: require('@/assets/curso/temas/tema4/img-4.jpg'),
      },
      {
        titulo: 'Modelos digitales',
        texto:
          'Digitalización intraoral o a través de una impresión, cuyos datos se envían por internet. Es necesario tener un escáner intraoral para registrar la impresión lo que permite diseñar la prótesis mediante programas informáticos.',
        imagen: require('@/assets/curso/temas/tema4/img-5.jpg'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Impresión de los modelos:',
        texto: 'Llegada de la impresión virtual o convencional de los modelos.',
        imagen: require('@/assets/curso/temas/tema4/img-15.jpg'),
      },
      {
        titulo: 'Escaneado de modelo:',
        texto:
          'Pueden ser digitales, u ópticas (luces LED, láser o videos 3D).',
        imagen: require('@/assets/curso/temas/tema4/img-16.jpg'),
      },
      {
        titulo: 'Diseño de la prótesis y estructura:',
        texto:
          'En función de las características que tenga, buscaremos diferentes grosores y demás. Se debe conferir resistencia a la restauración.',
        imagen: require('@/assets/curso/temas/tema4/img-17.jpg'),
      },
      {
        titulo: 'Confección de la estructura',
        texto:
          'Son estructuras de circonio, pueden ser sinterizadas o presinterizadas (producen contracción de 35-40%), hay que tener mayor cuidado que las sinterizadas.',
        imagen: require('@/assets/curso/temas/tema4/img-18.jpg'),
      },
      {
        titulo: 'Estructuras de circonio: ',
        texto: `<p class="mb-3"> Son más fáciles de tallar y pulir que las sinterizadas. Los materiales que se usan son de: metales, cerámicas, acrílicos, etc., puede ser en dos sitios:</p>
          <ul class="lista-ul">
            <li class="d-flex">
              <span style="background-color: #0082EF; min-width: 8px; height: 8px; width: 8px; border-radius: 50%; margin-right: .5rem; margin-top: .4rem;"></span>
              <p><b style="color: #0273BC"> En el propio laboratorio: </b> se envían las estructuras al laboratorio, y de ahí vienen a la clínica. Se coloca posteriormente el recubrimiento estético con cerámica, o se puede hacer con otros materiales.</p>
            </li>
            <li>
              <span style="background-color: #0082EF; min-width: 8px; height: 8px; width: 8px; border-radius: 50%; margin-right: .5rem; margin-top: .4rem;"></span>
              Envío a un centro de confección de estructuras por fresado o sinterizado.
            </li>
          </ul>`,
        imagen: require('@/assets/curso/temas/tema4/img-19.jpg'),
      },
      {
        titulo: 'Terminación de la prótesis:',
        texto:
          'Pulido y adaptado y demás en clínica para que quede perfectamente integrada.',
        imagen: require('@/assets/curso/temas/tema4/img-20.jpg'),
      },
    ],
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
.slyder-b
  .horizontal-scroll__wrapper
    .slyder__btn
      background-color: #CCE3F2
      i
        color: #0273BC
      &:hover
        background-color: #0273BC
        i
          color: white
.title-edit
  display: flex
  h4
    margin-left: .5rem
    position: relative
    &::after
      content: ''
      position: absolute
      height: 2px
      width: 100%
      background-color: #0082EF
      bottom: -.3rem
      left: 0
</style>

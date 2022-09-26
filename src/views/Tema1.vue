<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normativa nacional para laboratorios de mecánica dental
    
    .d-flex.flex-wrap.mb-5
      .col-xl-7.order-2.order-xl-1
        p.mb-4 El éxito de la prótesis parcial fija depende de una buena planificación y ejecución de cada una de las etapas que se requieren para su construcción y lograr una articulación de las piezas dentales; una de esas etapas es el procedimiento de impresión final.
        .cajon.color-primario.p-4.mb-4
          p El principal objetivo de la toma de impresión es producir un negativo exacto y dimensionalmente estable, que permita obtener un modelo de trabajo para la confección de restauraciones con alta precisión marginal, por eso, debe conseguirse copiar todos los detalles de la preparación con el empleo de un material de impresión adecuado.
        p.mb-4 El modelo de prótesis fija es una réplica obtenida de una impresión de los dientes preparados, áreas de la cresta alveolar, dientes vecinos y tejidos adyacentes; en otras palabras, #[b(style="color: #0273BC") es la réplica que se obtiene de una impresión definitiva.] Esta réplica debe abarcar toda la arcada, además de verse perfectamente los dientes vecinos, porque hay que montar en articulador, se tiene que ver la cresta alveolar y el tejido blando hasta el fondo de vestíbulo, para que esta impresión funcione y sirva para hacer la prótesis fija. 
      .col-xl-5.order-1.order-xl-2.ps-xl-4.mb-4.mb-xl-0.mx-auto
        img(src="@/assets/curso/temas/tema1/img-1.png")
    img(src="@/assets/curso/temas/tema1/img-2.png")
    .d-flex.flex-wrap.mb-5.px-md-4.py-3(style="background-color: #97D9FD")
      img.col-md-2(src="@/assets/curso/temas/tema1/decorador.svg" style="max-width: 50px;")
      p.ps-md-4.col-md.mb-0 En la obtención de los modelos de trabajo o definitivos para la elaboración de la prótesis fija, es importante tener en cuenta que son la reproducción fiel de la información precisa de los dientes preparados por el profesional de la odontología para realizar las restauraciones indirectas que solicitan a través de la orden de trabajo, por lo tanto, la información que el odontólogo determine en boca será la misma que se conseguirá en el modelo.
    p.mb-5 Para profundizar sobre estos modelos, a continuación se presenta el siguiente video. 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .d-flex.flex-wrap.mb-5
      img.col-md-2(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 85px;")
      p.ps-md-4.col-md.mb-0 La función principal del modelo de trabajo es confeccionar sobre él las restauraciones definitivas y los materiales elegidos para su elaboración deben cumplir ciertos requisitos, puesto que los modelos están sujetos a muchos cambios durante los procedimientos de laboratorio que se realizan. En el siguiente video se observan los diferentes modelos.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Protocolo de trabajo digital y/o analógico
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-md-2.mb-2.mb-md-0(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 85px;")
      p.ps-md-4.col-md.mb-0 El uso de las impresoras 3D se observa desde hace ya algunos años y los resultados obtenidos son cada vez más sorprendentes. En la actualidad, el sector dental se encuentra inmerso en una auténtica revolución tecnológica gracias a la impresión 3D de prótesis dentales; #[b(style="color: #0273BC") a continuación, se presenta un resumen del proceso.]
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-md-2.mb-2.mb-md-0(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 85px;")
      p.ps-md-4.col-md.mb-0 Los sistemas digitales abiertos ofrecen, tanto al odontólogo como al técnico dental, nuevas posibilidades de tratamiento y confección. La interconexión cruzada de diversos escáneres intraorales a las posibilidades de diseño y confección posibilita un gran número de nuevos conceptos de tratamiento y restauración. #[b(style="color: #0273BC") A continuación, se presenta un video del protocolo de trabajo de la prótesis fija.] 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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

<style lang="sass"></style>

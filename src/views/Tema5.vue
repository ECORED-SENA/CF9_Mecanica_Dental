<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Control de calidad
  
    .d-flex.flex-wrap.align-items-center(
      style="padding: 3rem; background: linear-gradient(180deg, rgba(255,255,255,1) 70%, rgba(222,236,250,1) 100%); margin-left: -3rem; margin-right: -3rem; margin-bottom: -3rem; min-width: calc(100% + 6rem);"
    )
      .col-xl-8.order-2.order-xl-1.pe-xl-4
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #C3F1F2" data-aos="fade-right")
          p.mb-0 El control de calidad es un tema bastante importante en la fabricación de los diferentes dispositivos dentales, y la prótesis fija no es la excepción, ya que, desde la recepción, tanto de la impresión como del registro de mordida y el modelo antagonista, se hace necesaria la desinfección de estos para iniciar con la elaboración del producto solicitado por el profesional de la odontología.
        .d-flex.flex-wrap.align-items-center.mb-5(data-aos="fade-right")
          img.col-md-2.mb-2.mb-md-0(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 85px;")
          p.ps-md-4.col-md.mb-0 Una vez realizada esta acción, se debe verificar que en cada área del laboratorio se cumpla con los estándares de calidad establecidos en cada espacio de trabajo, esto conlleva a permitir la entrega de un producto en óptimas condiciones, además de no generar retrocesos en la producción de los dispositivos y pérdidas al laboratorio dental.
        p(data-aos="fade-right") Finalmente, después de la fabricación, los criterios de calidad de una prótesis fija para el paciente son: 
        img(src="@/assets/curso/temas/tema5/img-2.png" data-aos="fade-right" style="max-width: 820px;")
      .col-xl-4.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto
        img(src="@/assets/curso/temas/tema5/img-1.png" data-aos="fade-left" style="max-width: 400px;")
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

<template>
  <section>
    <h1>INSERTAR DATOS</h1>
    <input class="campos" type="text" placeholder="Nombre" v-model="$store.state.nombre">
    <input class="campos" type="text" placeholder="Apellido" v-model="$store.state.apellido">
    <input class="campos" type="text" placeholder="Edad" v-model="$store.state.edad">
    <button id="btn" class="campos" @click="addPerson()">Insertar</button>
  </section>
</template>

<script>
export default {
    name: 'InsertView',
    methods: {
      addPerson(){
        this.$store.dispatch('accionAddPerson')
      }
    }
}
</script>

<style lang="sass">
  section
    margin-top: 1rem 
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    width: 100%
    // @include flex
    h1
      margin-bottom: 1rem
    .campos
      padding: .6rem
      margin: 1rem 0
      width: 80%
      border: 1px solid gray
      background: #fff
      font-family: 'Rubik', sans-serif
    #btn
      border: 2px solid tomato
      font-size: 20px
      
</style>
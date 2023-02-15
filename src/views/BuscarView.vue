<template>
  <section>
    <h1>BUSCAR</h1>
    <div>
      <input class="campos" type="text" placeholder="Nombre, apellido o edad" v-model="$store.state.busqueda">
      <button class="campos" id="btn" @click="searchPerson()">Buscar</button>
    </div>
    <div class="lista">
      <ul v-for="persona in $store.state.resultado" :key="persona">
        <li>Nombre: {{ persona.nombre }}</li>
        <li>Apellido: {{ persona.apellido }}</li>
        <li>Edad: {{ persona.edad }}</li>
        <hr>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
    name: 'SearchView',
    methods: {
      searchPerson(){
        this.$store.dispatch('accionSearchPerson')
        
      }
    }
}
</script>

<style lang="sass">
  .lista
    // border: 1px solid black
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    text-align: center
    overflow: scroll
    overflow-x: hidden
    &::-webkit-scrollbar
      width: 5px
      border-radius: 10px
    &::-webkit-scrollbar-thumb
      background: gray
    hr
      margin: .5rem 0
      width: 100%
      background: red
    ul
      // margin: 1rem
      padding: 1rem
      width: 100%
      li
        list-style: none
        line-height: 23px
    


</style>
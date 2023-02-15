<template>
  <div>
    <nav>
      <router-link to="/">Insertar</router-link>
      <router-link to="/buscar">Buscar</router-link>
      <router-link to="/mostrar">Mostrar</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    let data = localStorage.getItem('Personas')
    if (data!=null){
      this.$store.state.personas = JSON.parse(data)
    }
  },
}
</script>

<style lang="sass">
  @mixin flex
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
  #app
    width: 100%
    font-family: 'Rubik', sans-serif
  *
    margin: 0
    padding: 0
    box-sizing: border-box
  div
    background: #fafafa
    @include flex
    width: 100%
    nav
      margin: 3rem 0 
      display: flex
      justify-content: space-around
      width: 100%
      a
        font-size: 20px
        font-weight: bold
        // padding: 0 2rem
        text-decoration: none
        color: #000
</style>

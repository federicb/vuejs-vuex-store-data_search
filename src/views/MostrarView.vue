<template>
  <section>
    <h1>DATOS</h1>
    <div class="lista">
      <ul v-for="persona in $store.state.personas" :key="persona">
        <hr>
        <li>Nombre: {{persona.nombre}}</li>
        <li>Apellido: {{persona.apellido}}</li>
        <li>Edad: {{persona.edad}}</li>
        <hr>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
    name: 'ShowView',
}
</script>

<style lang="sass">

</style>
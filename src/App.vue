<template>
  <div id="app">
    <food></food>
  </div>
</template>

<script>
import Food from './components/Food';

export default {
    name: 'app',
    components: {
        Food
    }
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Heebo')
@import 'sass/_ven.normalize.sass'

html,
body
    height: 100%

body
    display: flex
    justify-content: center
    height: 100%
    font-family: 'Heebo', Tahoma, sans-serif

#app
    width: 900px
    background: #F4F3F5
    margin: 0px auto
    padding: 10px 30px

</style>

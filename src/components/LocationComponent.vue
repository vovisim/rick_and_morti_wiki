<template>
  <div class="container">
    {{name}}<br>
    Тип - {{type}}
  </div>
</template>

<script>
export default {
  name: 'LocationComponent',
  props: {
    name: String,
    type: String
  }
}
</script>

<style lang="scss" scoped>
  div{
    width: 369px;
    height: 111px;
    border: solid #1A9DB3 1.5px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    &{
      margin: 10px;
      margin-left: 100px;
    }
  }
  a {
    text-decoration: none; /* Убирает подчеркивание */
    color: inherit; /* Устанавливает цвет текста такой же, как у родителя */
  }
</style>

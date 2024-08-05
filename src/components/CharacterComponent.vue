<template>
  <div class="Character container-">
    <img :src="image" alt="" class=""/>
    <div>{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: 'CharacterComponent',
  props: {
    name: String,
    image: String
  }
}
</script>

<style lang="scss" scoped>
.Character {
  width: 258px;
  height: 401px;
  border: #1A9DB3 solid 1.3px;
  border-radius: 12px;
  padding: 25px;

  > img {
    width: 200px;
    border: #1A9DB3 solid 1.3px;
    border-radius: 12px;
    margin-bottom: 10px;
  }

  > div {
    font-size: 32px;
  }
}
</style>

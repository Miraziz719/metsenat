<template>
  <div class="tool_bar_full">
    <div class="container tool_bar">
        <NuxtLink to="/admin">
            <Icon name="arrow-back"/>
        </NuxtLink>
        <h2 class="titleH2">Talaba qo‘shish</h2>
    </div>
     


  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.tool_bar_full {
  background-color: white;
}
.tool_bar {
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.titleH2 {
  margin-left: 16px;
}

</style>
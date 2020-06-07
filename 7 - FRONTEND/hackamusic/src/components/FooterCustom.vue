<template>
  <div>
    <footer class="footer">
      <p>{{ copyright }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterCustom",
  data() {
    return {
      copyright: "©️ Víctor Tojeiro, A Coruña, 2020"
    };
  }
};
</script>

<style scoped>
</style>

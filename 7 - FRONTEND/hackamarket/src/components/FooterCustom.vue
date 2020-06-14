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
      copyright: "HACK A MARKET  ©️ Víctor Tojeiro, A Coruña, 2020"
    };
  }
};
</script>

<style scoped>
footer {
  padding: 1rem;
}
p {
  color: red;
  font-size: 1rem;
  font-weight: bolder;
  padding: 1rem;
}
</style>

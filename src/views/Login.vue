<template>
  <div class="Login">
    <div class="logForm">
      <img src="../assets/block.png" />
      <h1>
        <b>Administrador</b>
      </h1>

      <form>
        <input type="password" placeholder="Senha do Administrador" />
        <br />
        <button type="submit" class="btn-login">Login</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {},
  methods: {}
};
</script>

<style scoped>
.btn-login {
  background: rgb(33, 163, 44);
  color: #fff;
  height: 30px;
  min-width: 17%;
  border-block: none;
}

.logForm {
  margin: auto;
}
</style>
<template>
  <div class="notFound">
    <div class="art">
      <h1>404 Not Found</h1>
      <br />
      <img src="../assets/sick.png" alt srcset />
    </div>
    <div class="msg">
      <h3>
        <b>Desculpe não foi possível localizar a página solicitada!</b>
      </h3>
      <p>
        <router-link to="/login">
          <u>Fazer Login</u>
        </router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "404err"
};
</script>
<style scoped>
.art {
  margin-top: 60px;
}
.msg {
  margin-top: 30px;
  color: crimson;
}
.msg p {
  color: darkblue;
}
</style>
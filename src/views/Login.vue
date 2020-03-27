<template>
  <div class="Login">
    <div class="logForm">
      <img src="../assets/block.png" />
      <h1>
        <b>Administrador</b>
      </h1>
      <input type="text" placeholder="Email" />
      <br />
      <input type="password" placeholder="Senha" />
      <br />
      <div class="btn-login">
        <button>Login</button>
      </div>
      <p>
        <span>
          <router-link to="/registrar">Ainda não tenho conta</router-link>
        </span>
      </p>
      <!-- <form action="home">
        <input class="input-pass" type="password" placeholder="Senha do Administrador" />
        <br />
        <button type="submit" class="btn-login">Login</button>
      </form>-->
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    home: () => {
      this.$router.replace("home");
    }
  }
};
</script>

<style scoped>
.Login {
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.logForm {
  width: 300px;
  height: 300px;
  background: rgb(20, 99, 156);
  padding-top: 12px;
  border-radius: 4px;
}
.input-pass {
  border: none;
}
.btn-login button {
  background: rgb(33, 163, 44);
  color: #fff;
  height: 30px;
  min-width: 17%;
  border-block: none;
}
</style>
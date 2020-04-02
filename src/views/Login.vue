<template>
  <div class="login">
    <div class="imgLgn">
      <img src="../assets/block.png" alt="Login" />
      <h2>Login Administrador</h2>
    </div>
    <input type="text" placeholder="Email" v-model="email" />
    <br />
    <input type="password" placeholder="Senha" v-model="senha" />
    <br />
    <div class="btn-login">
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      senha: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.senha)
        .then(
          () => {
            this.$router.replace("home");
            alert("Bem Vindo, " + this.email);
          },
          err => {
            alert("Não foi possível realizar o login. " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.imgLgn {
}
.login {
  margin-top: 100px;
  border-radius: 10px;
  background: #ddd;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
  background: #fff;
}
button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>


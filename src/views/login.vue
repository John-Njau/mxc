<template>
  <div class="login">
    <div class="login-box">
      <div class="brand-name">
        <div>
          <span class="is-light"> MATRIX </span>
          <br />
          <span> FOR CRM </span>
        </div>
      </div>
      <form action="">
        <div class="form-group">
          <input
            type="email"
            class="form-control input is-small m-1"
            id="exampleInputEmail1"
            v-model="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <input
            class="input is-small m-1"
            type="password"
            id="exampleInputPassword1"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="form-group">
          <input
            type="button"
            class="input signIn-btn button is-small m-1"
            value="Sign In"
          />
          <p>
            <a href="#" class="help has-text-dark">Forgot Password?</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "loginView",
  components: { },
  mounted() {
    document.title = "Accounts";
  },
};
</script>
<style scoped>
.login {
  background-color: #1e3d73;
  height: 100vh;
}

.login-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin:auto;
  background-color: aliceblue;

  width: 50%;
  /* height: 50%; */
  /* border-radius: 10px; */
}
.brand-name {
  color: #181515;
  font-size: 1.2rem;
  font-weight: bold;
}

.signIn-btn{
  background-color: rgb(72,199,132);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
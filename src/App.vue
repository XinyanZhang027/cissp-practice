<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">cissp</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <router-link to="/profile" class="nav-link">Profile</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <button class="btn btn-link nav-link" @click="handleLogout">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    // Check if the user is already logged in
    const user = localStorage.getItem("user");
    if (user) {
      this.isLoggedIn = true;
    }
  },
  methods: {
    handleLogout() {
      localStorage.removeItem("user");
      this.isLoggedIn = false;
      this.$router.push("/");
    },
  },
};
</script>

<style>
.navbar {
  margin-bottom: 20px;
}
</style>

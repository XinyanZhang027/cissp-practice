<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const data = { username: this.username, password: this.password };
        const response = await axios.post('http://localhost:3000/login', data);
        localStorage.setItem('token', response.data.token);
        this.$router.push('/');
      } catch (error) {
        console.log(error);
        alert('Invalid username or password');
      }
    },
  },
};
</script>


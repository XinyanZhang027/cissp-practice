<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username">
        <span v-if="errors.username">{{ errors.username }}</span>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="text" id="email" v-model="email">
        <span v-if="errors.email">{{ errors.email }}</span>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password">
        <span v-if="errors.password">{{ errors.password }}</span>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
  <div class="register-panel">
    <!-- ...其他代码... -->
    <div class="login-link">
      <router-link to="/login">已有账号？点击登录</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      errors: {},
    };
  },
  methods: {
    async registerUser() {
      // Clear previous errors
      this.errors = {};

      // Validate the form
      if (!this.username) {
        this.errors.username = 'Please enter a username';
      }
      if (!this.email) {
        this.errors.email = 'Please enter an email';
      }
      if (!this.password) {
        this.errors.password = 'Please enter a password';
      }
      if (Object.keys(this.errors).length > 0) {
        return;
      }

      // Send the registration request
      try {
        const response = await axios.post('http://localhost:3000/register', {
          username: this.username,
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
        // Handle the success response
      } catch (error) {
        console.error(error.response.data);
        // Handle the error response
      }
    },
  },
};
</script>



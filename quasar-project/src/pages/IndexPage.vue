<template>
  <q-page>
    <div
      class="row d-flex justify-center align-center"
      style="min-height: 100vh"
    >
      <div class="col-12 col-md-4 col-lg-4">
        <div class="text-center">
          <q-img class="icon" src="../assets/location-hunter.png" />
        </div>
        <div class="text-center q-mt-sm">Lütfen hesabınıza giriş yapın.</div>
        <div class="column">
          <q-input
            class="q-mt-sm"
            label="Ad"
            outlined
            v-model="form.firstName.value"
            :error="form.firstName.error"
            :error-message="form.firstName.msg"
          >
          </q-input>
          <q-input
            class="q-mt-sm"
            label="Soyad"
            outlined
            v-model="form.lastName.value"
            :error="form.lastName.error"
            :error-message="form.lastName.msg"
          >
          </q-input>
          <q-input
            class="q-mt-sm"
            label="E-mail"
            outlined
            v-model="form.email.value"
            :error="form.email.error"
            :error-message="form.email.msg"
          >
          </q-input>
          <q-input
            type="password"
            class="q-mt-sm"
            label="Şifre"
            outlined
            v-model="form.password.value"
            :error="form.password.error"
            :error-message="form.password.msg"
          >
          </q-input>
        </div>
        <div class="column q-mt-sm">
          <q-btn color="green" @click="submitLogin"> Kaydol </q-btn>
        </div>
      </div>
      <!-- <div class="col-12 col-md-8 col-lg-8 container-logo text-center">
        <q-img class="logo" src="../assets/location-hunter.png" />
      </div> -->
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const getAllUsersURL = "https://localhost:7217/api/Users/GetAllUsers";

const form = ref({
  firstName: {
    value: "",
    required: true,
  },
  lastName: {
    value: "",
    required: true,
  },
  email: {
    value: "",
    email: true,
    required: true,
  },
  password: {
    value: "",
    required: true,
  },
});
const submitLogin = async () => {
  try {
    const response = await axios.get(getAllUsersURL);
    form.firstName.value = response.data;
  } catch (error) {
    console.error(error);
  }
};
// import { defineComponent } from 'vue'

// export default defineComponent({
//   name: 'IndexPage'
// })
</script>
<style>
.icon {
  width: 150px;
  height: 150px;
  border-radius: 40%;
}
.logo {
  border-radius: 10%;
  width: 400px;
  height: 400px;
}
</style>

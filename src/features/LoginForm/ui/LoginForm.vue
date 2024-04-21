<script setup lang="ts">
import {  ref } from "vue";
import { loginUser } from "../api/LoginService";
import { useRouter } from "vue-router";
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";


interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = ref<FormState>({
  username: "",
  password: "",
  remember: false,
});

const router = useRouter();

const loginHandler = async () => {
  const { data, status } = await loginUser(
    formState.value.username,
    formState.value.password,
  );

  if (status === 200) {
    localStorage.setItem('oggettoToken', data.data.token)
    router.push('/personal_cabinet')
  }
};

// const goloogoloo = async(token: string) => {
//   const { data, status } = await gooloogoolooLogin(token)
//   if (status === 200) {
//     console.log(data);
//   }
// }

// handle success event
const handleLoginSuccess = (response: CredentialResponse) => {

  // goloogoloo(credential)
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>
<template lang="html">
  <a-form
    :model="formState"
    name="basic"
    autocomplete="off"
    @finish="loginHandler"
    class="flex flex-col items-center w-full"
  >
    <a-form-item
      name="username"
      :rules="[{ required: true, message: 'Введите логин' }]"
      class="w-fit mx-auto"
    >
      <a-input
        v-model:value="formState.username"
        placeholder="Логин"
        class="w-[300px]"
      />
    </a-form-item>

    <a-form-item
      name="password"
      :rules="[{ required: true, message: 'Введите пароль' }]"
      class="w-fit mx-auto"
    >
      <a-input-password
        v-model:value="formState.password"
        placeholder="Пароль"
        class="w-[300px]"
      />
    </a-form-item>

    <a-form-item name="remember" class="w-full">
      <a-checkbox v-model:checked="formState.remember"
        >Запомнить меня</a-checkbox
      >
    </a-form-item>

    <a-form-item class="w-full">
      <a-button type="primary" ghost style="width: 100%" @click="loginHandler"
        >Войти</a-button>
        <h3 class="mx-auto w-fit">или</h3>

        <div class="mx-auto w-fit">
          <GoogleSignInButton
          @success="handleLoginSuccess"
          @error="handleLoginError"
        ></GoogleSignInButton>
        </div>
    </a-form-item>
  </a-form>
</template>
<style lang="scss"></style>
@//shared/model/store/userStore

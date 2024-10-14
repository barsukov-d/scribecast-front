<template>
  <h4 class="text-h4 pb-4">Login</h4>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <q-input
      filled
      v-model="email"
      label="Your e-mail *"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type your e-mail']"
    />

    <q-input
      filled
      type="password"
      v-model="password"
      label="Your password *"
      lazy-rules
      :rules="[
        (val) => (val !== null && val !== '') || 'Please type your password',
        (val) => (val > 0 && val < 100) || 'Please type a real password',
      ]"
    />

    <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

    <div>
      <q-btn label="Submit" type="submit" color="primary" />
      <!-- <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          /> -->
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

defineOptions({
  name: 'LoginPage',
});

const $q = useQuasar();

const email = ref(null);
const password = ref(null);
const accept = ref(false);

const onSubmit = () => {
  if (accept.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'You need to accept the license and terms first',
    });
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted',
    });
  }
};

const onReset = () => {
  email.value = null;
  password.value = null;
  accept.value = false;
};
</script>

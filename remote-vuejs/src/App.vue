<!--helloVue/src/App.vue-->
<template>
  <div class="mt-10 text-xl mx-auto max-w-6xl">
    <h1>Remote App #3: VueJS</h1>
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return { message: "Hello Vue!" };
  },
};
</script>

<template>
  <el-color-picker v-bind="$attrs" v-on="$listeners" show-alpha :predefine="colors"></el-color-picker>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "color-picker",
  data() {
    return {
      colors: [
        "#fff",
        "#FFF5F5",
        "#EDF2F6",
        "#FFFAF0",
        "#FFFFF0",
        "#F0FFF4",
        "#E6FFFA",
        "#EBF8FF",
        "#EBF4FF",
        "#FAF5FF"
      ]
    };
  }
};
</script>

<style>
</style>

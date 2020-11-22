<template>
  <el-dropdown trigger="click">
    <slot></slot>
    <template v-slot:dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="icon in icons"
          :key="icon"
          @click.native="onClick(icon)"
          class="flex justify-center items-center h-8 w-24"
          :class="{'bg-blue-200': value === icon}"
        >
          <i :class="icon" class="text-gray-700 text-2xl text-center"/>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script>
export default {
  name: "IconSelect",
  props: {
    value: String
  },
  data() {
    return {
      icons: [
        "fas fa-award",
        "fas fa-retweet",
        "fas fa-fingerprint",
        "fas fa-check",
        "fas fa-bell",
        "fas fa-book-open",
        "fas fa-heart"
      ]
    };
  },
  methods: {
    onClick(icon) {
      this.$emit("input", icon);
      console.log("icon", icon);
    }
  }
};
</script>

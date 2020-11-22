<template>
  <el-tooltip content="Click to edit" placement="top" :open-delay="400" :hide-after="1500">
    <component
      :is="htmlTag"
      :autosize="{ minRows: 2, maxRows: 20}"
      ref="inputRef"
      v-bind="$attrs"
      v-on="$listeners"
      @click="onClick"
      @blur="onBlur"
      type="textarea"
      class="cursor-pointer"
    >{{$attrs.value}}</component>
  </el-tooltip>
</template>
<script>
export default {
  inheritAttrs: false,
  name: "TextEdit",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  data() {
    return {
      componentType: this.tag
    };
  },
  computed: {
    htmlTag() {
      if (this.componentType === "el-input") {
        return "el-input";
      }
      return this.tag;
    },
    isEditMode() {
      return this.componentType === "el-input";
    }
  },
  methods: {
    onClick() {
      if (this.componentType !== "el-input") {
        this.componentType = "el-input";
        this.$nextTick(this.focusInput);
      }
    },
    focusInput() {
      if (this.$refs.inputRef && this.$refs.inputRef.focus) {
        this.$refs.inputRef.focus();
      }
    },
    onBlur() {
      if (this.componentType === "el-input") {
        this.componentType = this.tag;
      }
    }
  }
};
</script>

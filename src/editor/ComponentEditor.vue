<template>
  <div class="relative">
    <div
      v-show="active"
      class="z-0 h-full w-full absolute"
      :class="{'border-4 border-teal-400 ': active}"
    >
      <div class="flex justify-between w-full mt-3 px-2">
        <div>
          <ColorPicker v-model="selectedColor" @active-change="onColorChange"></ColorPicker>
        </div>
        <div>
          <button
            v-if="index < total - 1"
            @click="emitAction('move-down')"
            class="text-xs font-semibold inline-block py-2 px-3 uppercase rounded text-teal-600 bg-teal-200 mr-2 focus:bg-teal-600 focus:text-white"
          >
            <i class="fas fa-arrow-down" aria-hidden="true"></i>
          </button>
          <button
            v-if="index > 0"
            @click="emitAction('move-up')"
            class="text-xs font-semibold inline-block py-2 px-3 uppercase rounded text-teal-600 bg-teal-200 mr-2 focus:bg-teal-600 focus:text-white"
          >
            <i class="fas fa-arrow-up" aria-hidden="true"></i>
          </button>
          <button
            @click="emitAction('delete')"
            class="text-xs font-semibold inline-block py-2 px-3 uppercase rounded text-red-600 bg-red-200 mr-2 focus:bg-red-600 focus:text-white"
          >
            <i class="fas fa-trash" aria-hidden="true"></i>
          </button>
          <button
            @click="emitAction('close')"
            class="text-xs font-semibold inline-block py-2 px-3 uppercase rounded text-gray-600 bg-gray-200 ml-16 focus:bg-gray-600 focus:text-white"
          >
            <i class="fas fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import ColorPicker from "./content/ColorPicker";
export default {
  components: {
    ColorPicker
  },
  props: {
    active: Boolean,
    component: Object,
    index: Number,
    total: Number
  },
  data() {
    return {
      selectedColor: this.component.props.backgroundColor
    };
  },
  methods: {
    emitAction(actionName, data = {}) {
      this.$emit("action", {
        name: actionName,
        component: this.component,
        data
      });
    },
    onColorChange(color) {
      this.emitAction("color-change", {
        value: color
      });
    }
  }
};
</script>

<style>
</style>

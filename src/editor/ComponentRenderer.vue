<template>
  <component :is="component.name"
              v-bind="component.props"
              :style="componentStyles"/>
</template>

<script>
import Features from "../components/Features";
export default {
  components: {
    Features,
  },
  props: {
    component: Object
  },
  computed: {
    componentStyles() {
      let validStyles = ["backgroundColor"];
      let styles = {};
      validStyles.forEach(property => {
        if (this.component.props[property]) {
          styles[property] = this.component.props[property];
        }
      });
      console.log(styles);
      return styles;
    }
  }
};
</script>

<style>
</style>

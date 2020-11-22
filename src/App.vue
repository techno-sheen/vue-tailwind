<template>
  <div id="app" class="min-h-screen w-full bg-gray-200">
    <main class="flex flex-col">
      <ComponentEditor
        v-for="(component, index) in page.components"
        :key="component.name + index"
        :active="component.name === activeComponentName"
        :component="component"
        :index="index"
        :total="page.components.length"
        @action="handleEditorAction"
      >
        <component-renderer
          :component="component"
          @click.native="toggleActiveComponent(component)"
        />
      </ComponentEditor>
    </main>
  </div>
</template>

<script>
import ComponentEditor from "./editor/ComponentEditor";
import ComponentRenderer from "./editor/ComponentRenderer";
import { page } from "./editor/pageStateUtils";
export default {
  name: "App",
  components: {
    ComponentEditor,
    ComponentRenderer
  },
  data() {
    return {
      activeComponentName: "",
      page
    };
  },
  methods: {
    toggleActiveComponent(component) {
      this.activeComponentName = component.name;
    },
    handleEditorAction(action) {
      const { name, component, data } = action;
      const oldIndex = this.page.components.findIndex(
        c => c.name === component.name
      );
      let newIndex = oldIndex;
      if (name === "close") {
        this.activeComponentName = "";
      } else if (name === "move-down") {
        newIndex = oldIndex + 1;
        this.reOrderComponent(oldIndex, newIndex);
      } else if (name === "move-up") {
        newIndex = oldIndex - 1;
        this.reOrderComponent(oldIndex, newIndex);
      } else if (name === "delete") {
        this.page.components.splice(oldIndex, 1);
      } else if (name === "color-change") {
        this.$set(component.props, "backgroundColor", data.value);
      }
    },
    reOrderComponent(oldIndex, newIndex) {
      if (oldIndex === newIndex) {
        return;
      }
      const tempComponent = this.page.components[newIndex];
      const componentToMove = this.page.components[oldIndex];
      this.page.components.splice(newIndex, 1, componentToMove);
      this.page.components.splice(oldIndex, 1, tempComponent);
    }
  }
};
</script>

<style>
</style>

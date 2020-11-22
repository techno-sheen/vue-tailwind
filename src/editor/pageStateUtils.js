import set from "lodash/set";
import get from "lodash/get";
let localStoragePage = getFromStorage();
export let page = localStoragePage || {
  components: [
    {
      name: "Features",
      props: {
        id: 4,
        feature1: {
          title: "Awarded Agency",
          icon: "fas fa-award",
          description:
            "Divide details about your product or agency work into parts. A paragraph describing a feature will be enough."
        },
        feature2: {
          title: "Free revisions",
          icon: "fas fa-retweet",
          description:
            "Keep your user engaged by providing meaningful information. Remember that by this time, the user is curious"
        },
        feature3: {
          title: "Verified Company",
          icon: "fas fa-fingerprint",
          description:
            "Write few lines about each one. A paragraph describing a feature will be enough. Keep your user engaged!"
        },
        work: {
          icon: "fas fa-book-open",
          title: "Working with us is a pleasure",
          description: `Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript. The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript.`,
          checkText: "Check tailwind starter kit",
          imageTitle: "Top Notch Services",
          imageDescription:
            "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens."
        }
      }
    }
  ]
};

saveToLocalStorage();
export function setComponentProperty(componentId, path, value) {
  const componentIndex = page.components.findIndex(
    c => c.props.id === componentId
  );
  const fullPath = `components[${componentIndex}].props.${path}`;
  set(page, fullPath, value);
  saveToLocalStorage();
  return page;
}

export function saveToLocalStorage() {
  localStorage.setItem("page-state", JSON.stringify(page));
}

export function getFromStorage() {
  return JSON.parse(localStorage.getItem("page-state"));
}

export function getComponentProperty(component, path) {
  return get(component, path, "");
}

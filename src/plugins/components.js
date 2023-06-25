import MyDataTable from "@/components/MyDataTable.vue";
import MyToast from "@/components/MyToast.vue";

export function registerComponents (app) {
  app.component("my-data-table", MyDataTable);
  app.component("my-toast", MyToast);
}

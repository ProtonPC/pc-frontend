import MyDataTable from "@/components/MyDataTable.vue";
import Toast from "@/components/Toast.vue";

export function registerComponents (app) {
  app.component("my-data-table", MyDataTable);
  app.component("my-toast", Toast);
}

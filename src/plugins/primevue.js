//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import PrimeVue from 'primevue/config';

console.log(`loaded`)

export function registerPrimeVue(appRef){
  appRef.use(PrimeVue);

  appRef
  .component('DataTable', DataTable)
  .component('Column', Column)
  .component('ColumnGroup', ColumnGroup)
  .component('Row', Row)

  return appRef
}

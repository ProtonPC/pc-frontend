<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip text="Go back" location="top">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" @click="$router.push('/quotes')" color="primary" variant="text"
            icon="mdi-arrow-left"></v-btn>
        </template>
      </v-tooltip>
      {{ $route.params.id === 'new' ? 'Add' : 'Edit' }} quote
    </h3>

    <v-form>
      <v-sheet :elevation="5" color="sheet_card" rounded border class="pa-5">
        <div class="pb-2 text-h6">
          INITIAL VALUES
        </div>
        <v-row>
          <v-col cols="4">
            <v-text-field v-model="quote.total_weight" type="number" label="Total Weight"
              bg-color="light_grey"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="quote.fob_pricing_mt" :prepend-inner-icon="'mdi-currency-usd'" type="number"
              label="Fob Pricing MT" bg-color="light_grey"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="quote.heating_pad" type="number" label="Heating PAD"
            bg-color="light_grey"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="quote.date" type="date" label="Quote Date"
            bg-color="light_grey"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="total_mts" type="number" label="Total MTs" readonly></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="fob_price" :prepend-inner-icon="'mdi-currency-usd'" type="number" label="FOB PRICE"
              readonly></v-text-field>
          </v-col>
        </v-row>
      </v-sheet>
      <v-divider class="py-3"></v-divider>
      <v-sheet elevation="5">
        <v-card>
          <v-tabs next-icon="mdi-arrow-right-bold-box-outline" prev-icon="mdi-arrow-left-bold-box-outline" show-arrows
            v-model="tab" bg-color="primary">
            <v-tab value="one">FOB, CFR, CIF, Duties</v-tab>
            <v-tab value="two">Import, Warehouse, DDP</v-tab>
            <v-tab value="three">Storage, Cross-dock and Misc</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <v-divider class="py-3"></v-divider>
                <v-sheet :elevation="5" color="sheet_card" rounded border class="pa-5">
                  <div class="pb-2 text-h6">
                    CFR PRICE
                  </div>
                  <v-row>
                    <v-col cols="4">
                      <v-text-field v-model="quote.discount_more_than_500_mts" :prepend-inner-icon="'mdi-currency-usd'"
                        type="number" label="Discount More than 500 MT" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="quote.total_freight" type="number" label="Total Freight"
                        :prepend-inner-icon="'mdi-currency-usd'" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_freight_divided_by_number_of_metric_tons" type="number"
                        :prepend-inner-icon="'mdi-currency-usd'" label="Total MTs" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="cfr_price_mt" type="number" label="CFR price MT" readonly
                        :prepend-inner-icon="'mdi-currency-usd'"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="cfr_price_usd" type="number" label="CFR price USD" readonly
                        :prepend-inner-icon="'mdi-currency-usd'"></v-text-field>
                    </v-col>
                  </v-row>
                </v-sheet>
                <v-divider class="py-3"></v-divider>
                <v-sheet :elevation="5" color="sheet_card" rounded border class="pa-5">
                  <div class="pb-2 text-h6">
                    CIF PRICE
                  </div>
                  <v-row>
                    <v-col cols="4">
                      <v-text-field v-model="quote.insurance_per_mt" type="number" label="Insurance per MT"
                        :prepend-inner-icon="'mdi-currency-usd'" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="cif_price_mt" type="number" label="CIF PRICE MT" readonly
                        :prepend-inner-icon="'mdi-currency-usd'"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="cif_price_usd" type="number" label="CIF PRICE USD" readonly
                        :prepend-inner-icon="'mdi-currency-usd'"></v-text-field>
                    </v-col>
                  </v-row>
                </v-sheet>
                <v-divider class="py-3"></v-divider>
                <v-sheet :elevation="5" color="sheet_card" rounded border class="pa-5">
                  <div class="pb-2 text-h6">
                    TOTAL DUTIE
                  </div>
                  <v-row>
                    <v-col cols="6">
                      <v-text-field :append-inner-icon="'mdi-percent'" v-model="quote.duty_per_fob_pricing_usd_percent"
                        type="number" label="Duty Per FOB Pricing USD (PERCENT)" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field :prepend-inner-icon="'mdi-currency-usd'" v-model="quote.duty_per_kgs_exact_value"
                        type="number" label="Duty Per KG's (EXACT VALUE)" bg-color="light_grey"></v-text-field>
                    </v-col>

                    <v-col cols="4">
                      <v-text-field v-model="total_duty_per_fob_pricing" type="number" label="Total duty per Fob Pricing" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_duty_per_kgs" type="number" label="Total duty per KGs" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_dutie" type="number" label="Total Dutie" readonly></v-text-field>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-window-item>

              <v-window-item value="two">
                <v-divider class="py-3"></v-divider>
                <v-sheet :elevation="5" color="sheet_card" rounded border class="pa-5">
                  <div class="pb-2 text-h6">
                    TOTAL IMPORT
                  </div>
                  <v-row>
                    <v-col cols="4">
                      <v-text-field v-model="quote.merchandise_processing_fee" type="number"
                        label="Merchandise Processing Fee" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="quote.harbor_maintenance" type="number" label="Harbor Maintenance"
                        bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="quote.broker_cost" type="number" label="Broker Cost"
                        bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="total_import" type="number" label="Total Import" readonly></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="total_import_by_mt" type="number" label="Total Import  BY MT"
                        readonly></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="ddp_price_mt" type="number" label="DDP Price MT" readonly></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="ddp_price" type="number" label="DDP Price" readonly></v-text-field>
                    </v-col>
                  </v-row>
                </v-sheet>

                <v-divider class="py-3"></v-divider>
                <v-sheet :elevation="5" color="sheet_card" rounded border class="pa-5">
                  <div class="pb-2 text-h6">
                    TOTAL WAREHOUSE COST (Container)
                  </div>
                  <v-row>
                    <v-col cols="3">
                      <v-text-field v-model="quote.container_unload_floor_loaded" type="number"
                        label="Container Unload Floor Loaded" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.container_unload_pallet_roll_off" type="number"
                        label="Container Unload Pallert Roll Off" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.receipt_processing" type="number" label="Receipt Processing"
                        bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="total_warehouse_cost_container" type="number"
                        label="Total Warehouse Cost (Container)" readonly></v-text-field>
                    </v-col>
                  </v-row>
                </v-sheet>

                <v-divider class="py-3"></v-divider>
                <v-sheet :elevation="5" color="sheet_card" rounded border class="pa-5">
                  <div class="pb-2 text-h6">
                    TOTAL WAREHOUSE COST (Pallets)
                  </div>
                  <v-row>
                    <v-col cols="3">
                      <v-text-field v-model="quote.pallet_cost" type="number"
                        label="Pallet Cost" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.tote_cost" type="number"
                        label="Tote Cost" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.testing" type="number"
                        label="Testing" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.labour" type="number"
                        label="Labour" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.slip_sheets_per_pallet_floor_load_only" type="number"
                        label="Slip Sheets Per Pallet (Floor Load Only)" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.stretch_wrap_per_pallet_floor_load_only" type="number"
                        label="Stretch Wrap Per Pallet (Floor Load Only)" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.banding_floor_loaded_drums" type="number"
                        label="Banding (Floor loaded drums)" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.loose_drum_handling_floor_loaded_drums" type="number"
                        label="Loose drum handling (Floor loaded drums)" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="quote.pallet_handling_in_out_1" type="number"
                        label="Pallet Handling (in & out) 1" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="quote.pallet_handling_in_out_2" type="number"
                        label="Pallet Handling (in & out) 2" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="quote.pallet_handling_in_out_3" type="number"
                        label="Pallet Handling (in & out) 3" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_warehouse_costs_pallets" type="number" label="Total Warehouse Costs (Pallets)" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_warehouse" type="number" label="Total Warehouse" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_warehouse_mt" type="number" label="Total Warehouse MT" readonly></v-text-field>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-window-item>

              <v-window-item value="three">
                <v-divider class="py-3"></v-divider>
                <v-sheet :elevation="5" color="sheet_card" rounded border class="pa-5">
                  <div class="pb-2 text-h6">
                    STORAGE
                  </div>
                  <v-row>
                    <v-col cols="12">
                      <v-switch
                      v-model="quote.has_storage"
                      inset
                      :label="`Has Storage: ${quote.has_storage ? 'Yes' : 'No'}`"
                      color="success"
                      hide-details
                      ></v-switch>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.months_on_hand" min="0" type="number"
                        label="Months on hand" bg-color="light_grey" :disabled="!quote.has_storage"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.initial_storage_ambient" type="number"
                        label="Initial Storage Ambient" bg-color="light_grey" :disabled="!quote.has_storage"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.recurring_storage_ambient" type="number"
                        label="Recurring Storage Ambient" bg-color="light_grey" :disabled="!quote.has_storage"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.initial_storage_temp_controlled" type="number"
                        label="Initial Storage Temp Controlled" bg-color="light_grey" :disabled="!quote.has_storage"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.recurring_storage_temp_controlled" type="number"
                        label="Recurring Storage Temp Controlled" bg-color="light_grey" :disabled="!quote.has_storage"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.initial_storage_reefer" type="number"
                        label="Initial Storage Reefer" bg-color="light_grey" :disabled="!quote.has_storage"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.recurring_storage_reefer" type="number"
                        label="Recurring Storage Reefer" bg-color="light_grey" :disabled="!quote.has_storage"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field v-model="quote.total_pallets_per_container" type="number"
                        label="Total Pallets per Container" bg-color="light_grey" :disabled="!quote.has_storage"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="recurring_months" type="number" label="Recurring Months" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="initial_storage_ambient_total" type="number" label="Initial Storage Ambient Total" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="recurring_storage_ambient_total" type="number" label="Recurring Storage Ambient Total" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="initial_storage_temp_controlled_total" type="number" label="Initial Storage Temp Controlled Total" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="recurring_storage_temp_controlled_total" type="number" label="Recurring Storage Temp Controlled Total" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="initial_storage_reefer_total" type="number" label="Initial Storage Reefer Total" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="recurring_storage_reefer_total" type="number" label="Recurring Storage Reefer Total" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_storage" type="number" label="Total Storage" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_storage_by_mt" type="number" label="Total Storage by MT" readonly></v-text-field>
                    </v-col>
                  </v-row>
                </v-sheet>

                <v-divider class="py-3"></v-divider>
                <v-sheet :elevation="5" color="sheet_card" rounded border class="pa-5">
                  <div class="pb-2 text-h6">
                    CROSS DOCK AND MISC
                  </div>
                  <v-row>
                    <v-col cols="4">
                      <v-text-field v-model="quote.cross_dock_fee_temp_controlled" type="number"
                        label="Cross-dock fee Temp-Controlled" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="quote.cross_dock_fee_ambient" type="number"
                        label="Cross-dock fee Ambient" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="quote.dray_freight_to_warehouse" type="number"
                        label="Dray Freight to Warehouse" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field v-model="quote.misc_1" type="number"
                        label="Misc 1" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field v-model="quote.misc_2" type="number"
                        label="Misc 2" bg-color="light_grey"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_dray" type="number" label="Total Dray" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_misc" type="number" label="Total Misc" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_dray_mt" type="number" label="Total Dray MT" readonly></v-text-field>
                    </v-col>
                  </v-row>
                </v-sheet>

                <v-divider class="py-3"></v-divider>
                <v-sheet :elevation="5" color="sheet_card" rounded border class="pa-5">
                  <div class="pb-2 text-h6">
                    TOTAL COSTS
                  </div>
                  <v-row>
                    <v-col cols="4">
                      <v-text-field v-model="total_cost_usd" type="number" label="Total Cost USD" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_cost_by_mt" type="number" label="Total Cost by MT" readonly></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_cost_by_lb" type="number" label="Total Cost by LB" readonly></v-text-field>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-window-item>
            </v-window>
            <v-divider class="py-3"></v-divider>
            <v-btn @click="submit()" color="primary" class="mt-2">Submit</v-btn>
            <v-btn @click="submitAndCreateNew()" color="secondary" class="ms-5 mt-2">Save and add another</v-btn>
            <v-btn @click="submitAndEdit()" color="secondary" class="ms-5 mt-2">Save and continue editing</v-btn>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-form>

    <v-sheet class="mx-auto">
    </v-sheet>
  </div>
</template>
<script>
import { saveQuote } from "@/services/quotes";
import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';

export default {
  data() {
    return {
      quote: {},
      tab: null,
    };
  },
  async mounted() {
    await this.loadData();
  },
  computed: {
    isUpdate() {
      return this.$route.params.id !== 'new'
    },
    total_mts() {
      return this.quote.total_weight / 1000;
    },
    fob_price() {
      return this.total_mts * Number.parseFloat(this.quote.fob_pricing_mt) 
        + Number.parseFloat(this.quote.heating_pad);
    },
    total_freight_divided_by_number_of_metric_tons() {
      return Number.parseFloat(this.quote.total_freight) / Number.parseFloat(this.total_mts);
    },
    cfr_price_mt() {
      return Number.parseFloat(this.quote.fob_pricing_mt) +
        Number.parseFloat(this.total_freight_divided_by_number_of_metric_tons) -
        Number.parseFloat(this.quote.discount_more_than_500_mts);
    },
    cfr_price_usd() {
      return Number.parseFloat(this.cfr_price_mt) * Number.parseFloat(this.total_mts);
    },
    cif_price_mt() {
      return Number.parseFloat(this.cfr_price_mt) + Number.parseFloat(this.quote.insurance_per_mt);
    },
    cif_price_usd() {
      return Number.parseFloat(this.cif_price_mt) * Number.parseFloat(this.total_mts);
    },
    total_duty_per_fob_pricing() {
      return Number.parseFloat(this.quote.duty_per_fob_pricing_usd_percent)
        * Number.parseFloat(this.total_mts)
        * Number.parseFloat(this.quote.fob_pricing_mt);
    },
    total_duty_per_kgs() {
      return Number.parseFloat(this.quote.duty_per_kgs_exact_value) * Number.parseFloat(this.quote.total_weight);
    },
    total_dutie() {
      return Number.parseFloat(this.total_duty_per_fob_pricing) + Number.parseFloat(this.total_duty_per_kgs);
    },
    total_import() {
      return Number.parseFloat(this.quote.broker_cost) 
        + Number.parseFloat(this.quote.merchandise_processing_fee)
        + Number.parseFloat(this.quote.harbor_maintenance)
        + Number.parseFloat(this.total_dutie);
    },
    total_import_by_mt() {
      return Number.parseFloat(this.total_import) / Number.parseFloat(this.total_mts);
    },
    ddp_price_mt() {
      return Number.parseFloat(this.total_import_by_mt) + Number.parseFloat(this.cif_price_mt);
    },
    ddp_price() {
      return Number.parseFloat(this.ddp_price_mt) * Number.parseFloat(this.total_mts);
    },
    total_warehouse_cost_container() {
      return (Number.parseFloat(this.quote.container_unload_floor_loaded) 
        + Number.parseFloat(this.quote.container_unload_pallet_roll_off)) 
        + Number.parseFloat(this.quote.receipt_processing);
    },
    total_warehouse_costs_pallets() {
      return Number.parseFloat(this.quote.pallet_cost)
        + Number.parseFloat(this.quote.tote_cost)
        + Number.parseFloat(this.quote.testing)
        + Number.parseFloat(this.quote.labour)
        + Number.parseFloat(this.quote.slip_sheets_per_pallet_floor_load_only)
        + Number.parseFloat(this.quote.stretch_wrap_per_pallet_floor_load_only)
        + Number.parseFloat(this.quote.banding_floor_loaded_drums)
        + Number.parseFloat(this.quote.loose_drum_handling_floor_loaded_drums)
        + Number.parseFloat(this.quote.pallet_handling_in_out_1)
        + Number.parseFloat(this.quote.pallet_handling_in_out_2)
        + Number.parseFloat(this.quote.pallet_handling_in_out_3);
    },
    total_warehouse() {
      return Number.parseFloat(this.total_warehouse_costs_pallets) 
        + Number.parseFloat(this.total_warehouse_cost_container);
    },
    total_warehouse_mt() {
      return Number.parseFloat(this.total_warehouse) / Number.parseFloat(this.total_mts);
    },
    recurring_months() {
      return Number.parseFloat(this.quote.months_on_hand) > 0 
        ? Number.parseFloat(this.quote.months_on_hand) - 1 
        : 0;
    },
    initial_storage_ambient_total() {
      return Number.parseFloat(this.quote.initial_storage_ambient) 
        * Number.parseFloat(this.quote.total_pallets_per_container);
    },
    recurring_storage_ambient_total() {
      return Number.parseFloat(this.quote.recurring_storage_ambient) 
        * Number.parseFloat(this.quote.total_pallets_per_container)
        * Number.parseFloat(this.recurring_months);
    },
    initial_storage_temp_controlled_total() {
      return Number.parseFloat(this.quote.initial_storage_temp_controlled) 
        * Number.parseFloat(this.quote.total_pallets_per_container);
    },
    recurring_storage_temp_controlled_total() {
      return Number.parseFloat(this.quote.recurring_storage_temp_controlled) 
        * Number.parseFloat(this.quote.total_pallets_per_container)
        * Number.parseFloat(this.recurring_months);
    },
    initial_storage_reefer_total() {
      return Number.parseFloat(this.quote.initial_storage_reefer) 
        * Number.parseFloat(this.quote.total_pallets_per_container);
    },
    recurring_storage_reefer_total() {
      return Number.parseFloat(this.quote.recurring_storage_reefer) 
        * Number.parseFloat(this.quote.total_pallets_per_container)
        * Number.parseFloat(this.recurring_months);
    },
    total_storage() {
      return this.quote.has_storage 
        ? Number.parseFloat(this.initial_storage_ambient_total) 
          + Number.parseFloat(this.recurring_storage_ambient_total)
          + Number.parseFloat(this.initial_storage_temp_controlled_total)
          + Number.parseFloat(this.recurring_storage_temp_controlled_total)
          + Number.parseFloat(this.initial_storage_reefer_total)
          + Number.parseFloat(this.recurring_storage_reefer_total)
        : 0 
      },
      total_storage_by_mt() {
        return Number.parseFloat(this.total_storage) / Number.parseFloat(this.total_mts);
      },
      total_dray() {
        return Number.parseFloat(this.quote.cross_dock_fee_temp_controlled) 
          + Number.parseFloat(this.quote.cross_dock_fee_ambient)
          + Number.parseFloat(this.quote.dray_freight_to_warehouse);
      },
      total_misc() {
        return Number.parseFloat(this.quote.misc_1) 
          + Number.parseFloat(this.quote.misc_2);
      },
      total_dray_mt() {
        return Number.parseFloat(this.total_dray) 
          + Number.parseFloat(this.total_misc);
      },
      total_cost_usd() {
        return Number.parseFloat(this.ddp_price) 
          + Number.parseFloat(this.total_warehouse_cost_container)
          + Number.parseFloat(this.total_warehouse_costs_pallets)
          + Number.parseFloat(this.total_storage)
          + Number.parseFloat(this.total_dray) // or total_dutie ????
          + Number.parseFloat(this.total_misc);
      },
      total_cost_by_mt() {
        return Number.parseFloat(this.total_cost_usd) 
          / Number.parseFloat(this.total_mts);
      },
      total_cost_by_lb() {
        return Number.parseFloat(this.total_cost_usd) 
          / (Number.parseFloat(this.total_weight) * 0.22);
      },
  },
  methods: {
    async loadData() {
      if (this.isUpdate) {
        this.quote = await this.getQuote(this.$route.params.id)
      }
      this.quote.heating_pad = this.quote.heating_pad ? this.quote.heating_pad : 0;
      this.quote.insurance_per_mt = this.quote.insurance_per_mt ? this.quote.insurance_per_mt : 0;
      this.quote.duty_per_fob_pricing_usd_percent = this.quote.duty_per_fob_pricing_usd_percent ? this.quote.duty_per_fob_pricing_usd_percent : 0;
      this.quote.duty_per_kgs_exact_value = this.quote.duty_per_kgs_exact_value ? this.quote.duty_per_kgs_exact_value : 0;
    },
    async getQuote(id) {
      return await httpClient.get(apiRoutes.getQuote(id));
    },
    async save() {
      return await saveQuote(this.quote);
    },
    async submit() {
      await this.save()
      this.$router.push('/quotes');
    },
    async submitAndCreateNew() {
      await this.save()
      this.$router.push('/quotes/new')
        .then(() => {
          window.location.reload();
        })
    },
    async submitAndEdit() {
      const response = await this.save()
      this.$router.push(`/quotes/${response.id}`);
    },
    changeTab(tabindex) {
      this.tab = `tab-${tabindex}`;
    },
  }
};
</script>

<style>.cursorPointer:hover {
  cursor: pointer;
}</style>

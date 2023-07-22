<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip text="Go back" location="top">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            @click="$router.push('/quotes')"
            color="primary"
            variant="text"
            icon="mdi-arrow-left"
          ></v-btn>
        </template>
      </v-tooltip>
      {{ $route.params.id === 'new' ? 'Add' : 'Edit' }} quote
    </h3>

    <v-form>
      <v-sheet
        :elevation="5"
        color="sheet_card"
        rounded
        border
        class="pa-5"
      >
        <div class="pb-2 text-h6">
          INITIAL VALUES
        </div>
        <v-row>
          <v-col cols="4">
            <v-text-field v-model="quote.total_weight" type="number" label="Total Weight"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="quote.fob_pricing_mt"  type="number" label="Fob Pricing MT"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="total_mts" type="number" label="Total MTs" disabled></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="quote.heating_pad" type="number" label="Heating PAD" required></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="fob_price" type="number" label="FOB PRICE" disabled></v-text-field>
          </v-col>
        </v-row>
      </v-sheet>
      <v-divider class="py-3"></v-divider>
      <v-sheet elevation="5">
        <v-card>
          <v-tabs
            next-icon="mdi-arrow-right-bold-box-outline"
            prev-icon="mdi-arrow-left-bold-box-outline"
            show-arrows
            v-model="tab"
            bg-color="primary"
          >
            <v-tab value="one">Item One</v-tab>
            <v-tab value="two">Item Two</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <v-divider class="py-3"></v-divider>
                <v-sheet
                  :elevation="5"
                  color="sheet_card"
                  rounded
                  border
                  class="pa-5"
                >
                  <div class="pb-2 text-h6">
                    CFR PRICE
                  </div>
                  <v-row>
                    <v-col cols="4">
                      <v-text-field v-model="quote.discount_more_than_500_mts"  type="number" label="Discount More than 500 MT"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="quote.total_freight" type="number" label="Total Freight"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_freight_divided_by_number_of_metric_tons" type="number" label="Total MTs" disabled></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="cfr_price_mt"  type="number" label="CFR price MT" disabled></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="cfr_price_usd"  type="number" label="CFR price USD" disabled></v-text-field>
                    </v-col>
                  </v-row>
                </v-sheet>
                <v-divider class="py-3"></v-divider>
                <v-sheet
                  :elevation="5"
                  color="sheet_card"
                  rounded
                  border
                  class="pa-5"
                >
                  <div class="pb-2 text-h6">
                    CIF PRICE
                  </div>
                  <v-row>
                    <v-col cols="4">
                      <v-text-field v-model="quote.insurance_per_mt" type="number" label="Insurance per MT"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="cif_price_mt" type="number" label="CIF PRICE MT" disabled></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="cif_price_usd"  type="number" label="CIF PRICE USD" disabled></v-text-field>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-window-item>
              
              <v-window-item value="two">
                <v-sheet
                  :elevation="5"
                  color="sheet_card"
                  rounded
                  border
                  class="pa-5"
                >
                  <div class="pb-2 text-h6">
                    TOTAL DUTIE
                  </div>
                  <v-row>
                    <v-col cols="4">
                      <v-text-field v-model="quote.total_weight" type="number" label="Total Weight"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_mts" type="number" label="Total MTs" disabled></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="quote.fob_pricing_mt"  type="number" label="Fob Pricing MT"></v-text-field>
                    </v-col>
                  </v-row>
                </v-sheet>
                <v-divider class="py-3"></v-divider>
                <v-sheet
                  :elevation="5"
                  color="sheet_card"
                  rounded
                  border
                  class="pa-5"
                >
                  <div class="pb-2 text-h6">
                    TOTAL IMPORT
                  </div>
                  <v-row>
                    <v-col cols="4">
                      <v-text-field v-model="quote.total_weight" type="number" label="Total Weight"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_mts" type="number" label="Total MTs" disabled></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="quote.fob_pricing_mt"  type="number" label="Fob Pricing MT"></v-text-field>
                    </v-col>
                  </v-row>
                </v-sheet>
                <v-divider class="py-3"></v-divider>
                <v-sheet
                  :elevation="5"
                  color="sheet_card"
                  rounded
                  border
                  class="pa-5"
                >
                  <div class="pb-2 text-h6">
                    TOTAL WAREHOUSE COST (CONTAINER)
                  </div>
                  <v-row>
                    <v-col cols="4">
                      <v-text-field v-model="quote.total_weight" type="number" label="Total Weight"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_mts" type="number" label="Total MTs" disabled></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="quote.fob_pricing_mt"  type="number" label="Fob Pricing MT"></v-text-field>
                    </v-col>
                  </v-row>
                </v-sheet>
                <v-divider class="py-3"></v-divider>
                <v-sheet
                  :elevation="5"
                  color="sheet_card"
                  rounded
                  border
                  class="pa-5"
                >
                  <div class="pb-2 text-h6">
                    TOTAL WAREHOUSE COST (PALLETS)
                  </div>
                  <v-row>
                    <v-col cols="4">
                      <v-text-field v-model="quote.total_weight" type="number" label="Total Weight"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="total_mts" type="number" label="Total MTs" disabled></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="quote.fob_pricing_mt"  type="number" label="Fob Pricing MT"></v-text-field>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-window-item>
            </v-window>
            <v-divider class="py-3"></v-divider>
            <v-btn @click="submit()" color="primary" class="mt-2">Submit</v-btn>
            <v-btn @click="submitAndCreateNew()" color="secondary" class="ms-5 mt-2"
              >Save and add another</v-btn
            >
            <v-btn @click="submitAndEdit()" color="secondary" class="ms-5 mt-2"
              >Save and continue editing</v-btn
            >
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
      return this.total_mts * Number.parseFloat(this.quote.fob_pricing_mt) + Number.parseFloat(this.quote.heating_pad);
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
  },
  methods: {
    async loadData() {
      if (this.isUpdate) {
        this.quote = await this.getQuote(this.$route.params.id)
      }
      this.quote.heating_pad = this.quote.heating_pad ? this.quote.heating_pad : 0;
      this.quote.insurance_per_mt = this.quote.insurance_per_mt ? this.quote.insurance_per_mt : 0;
    },
    async getQuote(id) {
      return await httpClient.get(apiRoutes.getQuote(id));
    },
    async save(){
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

<style>
.cursorPointer:hover {
  cursor: pointer;
}
</style>

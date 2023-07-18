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

    <v-sheet elevation="6">

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
          <v-form>
            <v-window v-model="tab">
              <v-window-item value="one">
                <v-sheet
                  :elevation="1"
                  color="light_grey"
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
                <v-sheet
                :elevation="1"
                color="light_grey"
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
                  :elevation="1"
                  color="light_grey"
                  rounded
                  border
                  class="pa-5"
                >
                  <div class="pb-2 text-h6">
                    CIF PRICE
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
              
              <v-window-item value="two">
                <v-sheet
                  :elevation="1"
                  color="light_grey"
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
                  :elevation="1"
                  color="light_grey"
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
                  :elevation="1"
                  color="light_grey"
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
                  :elevation="1"
                  color="light_grey"
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
          </v-form>
        </v-card-text>
      </v-card>
    </v-sheet>

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
      quote: {
        // heating_pad: 0,
      },
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
    }
  },
  methods: {
    async loadData() {
      if (this.isUpdate) {
        this.quote = await this.getQuote(this.$route.params.id)
      }
      this.quote.heating_pad = !!this.quote.heating_pad ? this.quote.heating_pad : 0;
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

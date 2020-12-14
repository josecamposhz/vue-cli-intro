<template>
  <v-container>
    <v-layout md12>
      <v-text-field
        v-model="search"
        append-icon="mdi-search"
        placeholder="Buscar"
        single-line
      />
    </v-layout>
    <v-layout v-if="isLoading" md12 class="justify-center my-8">
      <v-progress-circular :size="70" :width="7" color="purple" indeterminate />
    </v-layout>
    <v-layout wrap md12>
      <v-flex
        v-for="(country, index) in countriesFilter"
        :key="index"
        :search="search"
        class="mb-5"
        min-width="300px"
        md3
        sm4
        xs12
        px-2
      >
        <v-card>
          <v-img class="white--text" height="180px" v-bind:src="country.flag">
            <v-card-title>{{ country.name }} </v-card-title>
          </v-img>
          <v-card-text>
            <div class="subtitle-1">Continente: {{ country.region }}</div>
            <div class="subtitle-1">Capital: {{ country.capital }}</div>
            <div class="subtitle-1">
              Población: {{ populationFormat(country.population) }}
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import restCountries from "@/services/api.service";
export default {
  data() {
    return {
      countries: [],
      search: "",
      isLoading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.getCountries();
    }, 500);
  },
  computed: {
    countriesFilter() {
      return this.countries.filter((e) => {
        return e.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
      });
    },
  },
  methods: {
    getCountries() {
      restCountries
        .get()
        .then((response) => {
          this.isLoading = false;
          this.countries = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    populationFormat(population) {
        // Expresión regular utilizada para agregar un punto cada 3 números
      return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
<template>
  <div>
    <!-- Lista Itens {{ tipo }}
    <hr />
    {{ itens }} -->
    <div v-if="tipo == 'socorristas'">
      <select class="form-control form-control-sm" v-model="turno">
        <option value="">Todos</option>
        <option value="manhã">Manhã</option>
        <option value="tarde">Tarde</option>
        <option value="noite">Noite</option>
      </select>
    </div>

    <item
      v-for="(item, indice) in itens"
      :key="indice"
      :dados="item"
      :tipo="tipo"
    />

    <div v-if="tipo == 'socorristas'">
      Total: {{ totalSocorristasPorTurno(turno) }}
    </div>
    <div v-if="tipo == 'enfermeiros'">Total: {{ totalEnfermeiros }}</div>
    <div v-if="tipo == 'medicos'">Total: {{ totalMedicos }}</div>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "ListaItens",
  components: {
    Item,
  },
  data() {
    return {
      turno: "",
    };
  },
  props: {
    tipo: String,
  },
  computed: {
    /*
      enfermeiros() {
      return this.$store.state.enfermeiros;
    },
    socorristas() {
      return this.$store.state.socorristas;
    },
    medicos() {
      return this.$store.state.medicos;
    },
    */

    ...mapState({
      enfermeiros: (state) => state.enfermeiros,
      // socorristas: (state) => state.socorristas,
      medicos: (state) => state.medicos,
      carros: (state) => state.equipamentos.carros,
      telefones: (state) => state.equipamentos.telefones,
      kitsDeReanimacao: (state) => state.equipamentos.kitsDeReanimacao,
    }),

    // ...mapGetters(["socorristasPorTurno", "totalSocorristasPorTurno"]),
    ...mapGetters({
      socorristasPorTurno: "socorristasPorTurno",
      totalSocorristasPorTurno: "totalSocorristasPorTurno",
      totalEnfermeiros: "totalEnfermeiros",
      totalMedicos: "totalMedicos",
    }),

    itens() {
      switch (this.tipo) {
        case "enfermeiros":
          return this.enfermeiros;
        case "socorristas":
          // return this.socorristas;
          return this.socorristasPorTurno(this.turno);
        case "medicos":
          return this.medicos;
        case "carros":
          return this.carros;
        case "telefones":
          return this.telefones;
        case "kits-de-reanimacao":
          return this.kitsDeReanimacao;
      }
      return [];
    },
  },
};
</script>

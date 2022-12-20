<template>
  <div>
    <div class="row">
      <div class="col">
        <!-- <h5><i class="bi-boxes me-2"></i>Configuração da equipe</h5> -->
        <h5 :class="corTitulo">
          <i class="bi-boxes me-2"></i>{{ tituloCustomizadoLocal }}
        </h5>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <!-- Forma Simples com interpolação -->
        <!-- <p>Enfermeiro: {{ $store.state.equipe.enfermeiro }}</p>
        <p>Socorrista: {{ $store.state.equipe.socorrista }}</p>
        <p>Médico: {{ $store.state.equipe.medico }}</p>
        <p>Carro: {{ $store.state.equipe.carro }}</p>
        <p>Telefone: {{ $store.state.equipe.telefone }}</p>
        <p>Kit de reanimação: {{ $store.state.equipe.kitDeReanimacao }}</p> -->

        <!-- Forma Simples com mapState([]) -->
        <!-- <p>Enfermeiro: {{ equipe.enfermeiro }}</p>
        <p>Socorrista: {{ equipe.socorrista }}</p>
        <p>Médico: {{ equipe.medico }}</p>
        <p>Carro: {{ equipe.carro }}</p>
        <p>Telefone: {{ equipe.telefone }}</p>
        <p>Kit de reanimação: {{ equipe.kitDeReanimacao }}</p> -->

        <!-- Forma colocando apelidos com mapState({}) -->
        <!-- <p>Enfermeiro: {{ xyz.enfermeiro }}</p>
        <p>Socorrista: {{ xyz.socorrista }}</p>
        <p>Médico: {{ xyz.medico }}</p>
        <p>Carro: {{ xyz.carro }}</p>
        <p>Telefone: {{ xyz.telefone }}</p>
        <p>Kit de reanimação: {{ xyz.kitDeReanimacao }}</p> -->

        <!-- Forma colocando nome para cada objeto com mapState({}) -->
        <p>Enfermeiro: {{ enfermeiro }}</p>
        <p>Socorrista: {{ socorrista }}</p>
        <p>Médico: {{ medico }}</p>
        <p>Carro: {{ carro }}</p>
        <p>Telefone: {{ telefone }}</p>
        <p>Kit de reanimação: {{ kitDeReanimacao }}</p>

        <!-- <h2>Teste do Dimas: {{ teste }}</h2> -->
      </div>
      <div class="col-4 text-center">
        <div class="row">
          <div class="col">
            <img
              class="img-fluid"
              :src="require('@/assets/ambulancias/indefinida.png')"
            />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button type="button" class="btn btn-primary">Montar equipe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ConfiguracaoEquipe",

  data() {
    return {
      titulo: "Configuração da equipe",
    };
  },

  // computed: {
  //   equipe() {
  //     return this.$store.state.equipe;
  //   },
  // },

  // computed: mapState(["equipe"]),

  // computed: mapState({
  //   xyz: (state) => state.equipe,
  // }),

  // computed: mapState({
  //   enfermeiro: (state) => state.equipe.enfermeiro,
  //   socorrista: (state) => state.equipe.socorrista,
  //   medico: (state) => state.equipe.medico,
  //   carro: (state) => state.equipe.carro,
  //   telefone: (state) => state.equipe.telefone,
  //   kitDeReanimacao: (state) => state.equipe.kitDeReanimacao,
  //   // teste: (state) => state.titulo,
  //   tituloCustomizadoLocal(state) {
  //     return `${this.titulo} - ${state.equipe.carro}`;
  //   },
  // }),

  computed: {
    ...mapState({
      enfermeiro: (state) => state.equipe.enfermeiro,
      socorrista: (state) => state.equipe.socorrista,
      medico: (state) => state.equipe.medico,
      carro: (state) => state.equipe.carro,
      telefone: (state) => state.equipe.telefone,
      kitDeReanimacao: (state) => state.equipe.kitDeReanimacao,
      // teste: (state) => state.titulo,
      tituloCustomizadoLocal(state) {
        return `${this.titulo} - ${state.equipe.carro}`;
      },
    }),

    corTitulo() {
      let testeLogico = true;
      if (testeLogico) {
        return "text-danger";
      }
      return "text-primary";
    },
  },
};
</script>

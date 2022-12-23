import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    titulo: "Emergências Médicas",
    equipe: {
      enfermeiro: "",
      socorrista: "",
      medico: "",
      carro: "",
      telefone: "",
      kitDeReanimacao: "",
    },
    enfermeiros: [],
    socorristas: [],
    medicos: [],
    equipamentos: {
      carros: [],
      telefones: [],
      kitsDeReanimacao: [],
    },
  },
  getters: {
    totalEnfermeiros(state) {
      return state.enfermeiros.length;
    },
    socorristasPorTurno(state) {
      //closure
      return (turno) => {
        if (!turno) {
          return state.socorristas;
        }
        return state.socorristas.filter((s) => s.turno === turno);
      };
      // return state.socorristas.filter(s => s.turno === 'manhã')
    },
    totalSocorristas: (state) => state.socorristas.length,
    totalSocorristasPorTurno: (state, getters) => {
      return (turno) => getters.socorristasPorTurno(turno).length;
    },
  },
  mutations: {
    setItemEquipe: (state, item) => {
      // setItemEquipe: (state, payload) => {

      // let item = payload.item

      let t = item.tipo;
      let d = item.dados;

      if (t == "enfermeiros") state.equipe.enfermeiro = d.nome;
      if (t == "socorristas") state.equipe.socorrista = d.nome;
      if (t == "medicos") state.equipe.medico = d.nome;
      if (t == "carros") state.equipe.carro = d.placa;
      if (t == "telefones") state.equipe.telefone = d.telefone;
      if (t == "kits-de-reanimacao") state.equipe.kitDeReanimacao = d.kit;
    },
    setEnfermeiros: (state, payload) => {
      state.enfermeiros = payload;
      // console.log('Estamos em uma mutation: ', payload)
    },
    setSocorristas: (state, payload) => {
      state.socorristas = payload;
    },
    setMedicos: (state, payload) => {
      state.medicos = payload;
    },
    setCarros: (state, payload) => {
      state.equipamentos.carros = payload;
    },
    setTelefones: (state, telefones) => {
      state.equipamentos.telefones = telefones;
    },
    setKitsDeReanimacao: (state, payload) => {
      state.equipamentos.kitsDeReanimacao = payload;
    },
  },
  actions: {
    fetchEquipamentos(context) {
      fetch("http://localhost:3001/equipamentos")
        .then((response) => response.json())
        .then((dados) => {
          console.log(dados);
          // this.$store.dispatch("adicinarEquipamentos", dados);

          context.commit("setCarros", dados.carros);
          //poderia ter aqui um processamento assíncrono

          context.commit("setTelefones", dados.telefones);
          //poderia ter aqui um processamento assíncrono e diversar regras de negócio

          context.commit("setKitsDeReanimacao", dados.kitsDeReanimacao);
        });
    },
    fetchProfissionais(context) {
      fetch("http://localhost:3001/enfermeiros")
        .then((response) => response.json())
        .then((dados) => context.commit("setEnfermeiros", dados));

      fetch("http://localhost:3001/socorristas")
        .then((response) => response.json())
        .then((dados) => context.commit("setSocorristas", dados));

      fetch("http://localhost:3001/medicos")
        .then((response) => response.json())
        // .then((dados) => this.$store.commit("setMedicos", dados));
        .then((dados) => context.commit("setMedicos", dados));
    },
  },
});

import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        titulo: 'Emergências Médicas',
        equipe: {
            enfermeiro: "Nome do enfermeiro",
            socorrista: "Nome do socorrista",
            medico: "Nome do médico",
            carro: "Placa do carro",
            telefone: "+55 11 00000-0000",
            kitDeReanimacao: "Kit 0001"


        }
    }
})
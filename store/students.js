export const state = () => ({
    students: [
        {id: 1, name: 'Alimov Abror Xabibullayevich', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', money_gained: 14000000, money_needed: 30000000 },
        {id: 2, name: 'Saimov Rustam Saimjonovich', degree: 'Magistr', university: 'O’zbekiston milliy universiteti', money_gained: 28000000, money_needed: 28000000 },
        {id: 3, name: 'Alimov Abror Xabibullayevich', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', money_gained: 14000000, money_needed: 30000000 },
        {id: 4, name: 'aziz', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', money_gained: 14000000, money_needed: 30000000 },
        {id: 5, name: 'aziz', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', money_gained: 14000000, money_needed: 30000000 },
        {id: 5, name: 'aziz', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', money_gained: 14000000, money_needed: 30000000 },
        {id: 5, name: 'aziz', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', money_gained: 14000000, money_needed: 30000000 },
        {id: 5, name: 'aziz', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', money_gained: 14000000, money_needed: 30000000 },
        {id: 5, name: 'aziz', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', money_gained: 14000000, money_needed: 30000000 },
        {id: 5, name: 'aziz', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', money_gained: 14000000, money_needed: 30000000 },
        {id: 5, name: 'aziz', degree: 'Bakalavr', university: 'Toshkent shahridagi INHA Universiteti', money_gained: 14000000, money_needed: 30000000 },
    ],
    filters: {
        degree: '',
        university: '',
        name: ''
    }
})

export const mutations = {
    setStudents(state, students) {
        state.students = students
    },
    setFilters(state, filterObj) {
        state.filters = {...state.filters, ...filterObj}
    },
    clearFilters (state){
        state.filters = {...state.filters, university: '', degree: ''}
    }
}

export const actions = {
    async fetch({commit}) {
        try {
            const students = await this.$axios.$get('http://192.168.101.107:8000/students')
            commit('setStudents', students.results)
        } catch (error) {
            console.log(error)
        }
        
    }
} 

export const getters = {
    students: s => s.students,
    filters: s => s.filters,
}
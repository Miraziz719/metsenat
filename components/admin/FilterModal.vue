<template>
  <div class="emptyBox">
    <div class="modal_box flex-shrink">
      <div class="modal_header">
        <h2 class="titleH2">Filter</h2>
        <button @click="closeModal"><Icon name="x" /></button>
      </div>

      <div class="modal_content">
        <div class="formControl">
          <label>Talabalik turi</label><br />
          <select
            name="degree"
            :value="filters.degree" 
            @change="updateFilter"
            class="inputText"
          >
            <option value="">Barchasi</option>
            <option value="Bakalavr">Bakalavr</option>
            <option value="Magistr">Magistr</option>
          </select>
        </div>

        <div class="formControl">
          <label for="name">OTM</label><br />
          <select 
            name="university"
            :value="filters.university" 
            @change="updateFilter"
            class="inputText"
          >
            <option value="">Barchasi</option>
            <option value="dhg">1</option>
          </select>
        </div>
      </div>
      <div class="action_box">
        <button class="my_button">
          <Icon name="eye_white" />
          <span>Natijalarni ko‘rish</span>
        </button>
        <button @click="handleClear" class="my_button my_button_white">
          <Icon name="clear" />
          <span>Tozalash</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    filters() { return this.$store.getters["students/filters"]},

    // degree: {
    //   get() {
    //     return this.$store.state.students.degree
    //   },
    //   set(value) {
    //     this.$store.commit("students/setFilters", { degree: value });
    //   },
    // },
    
  },
  methods: {
    closeModal() {
      this.$store.commit("hideModal");
    },
    updateFilter(e) {
      this.$store.commit("students/setFilters", { [e.target.name]: e.target.value });
    },
    handleClear() {
      this.$store.commit("students/clearFilters")
    }
  },
};
</script>

<style scoped>
.emptyBox {
  position: fixed;
  padding: 0 16px 0 16px;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal_box {
  width: 586px;
  max-width: 586px;
  background: #ffffff;
  border-radius: 12px;
  padding: 28px;
}
.modal_header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 28px;
  margin-bottom: 28px;
  border-bottom: 2px solid #f5f5f7;
}

.action_box button:last-child {
  margin-right: 16px;
}
</style>
<template>
  <div class="tool_bar_full">
    <div class="container tool_bar">
      <div class="tool_bar_leftBox">
        <div class="btnGroup">
          <button
            v-for="item of ['Dashbord', 'Homiylar', 'Talabalr']"
            :key="item"
            @click.stop="listType = item"
            :class="{ active: listType === item }"
          >
            {{ item }}
          </button>
        </div>
      </div>
      <div class="tool_bar_rightBox">
        <div class="searchBox">
          <input 
            name="name"
            :value="filters.name" 
            @input="updateFilter" 
            placeholder="Izlash" 
          />
        </div>
        <button @click="setModalHanler('filter')" >
          <Icon name="filter" />
          <span>Filter</span>
        </button>

      </div>
    </div>
     
  </div>
</template>

<script>
export default {
  data: () => ({
    listType: "Dashbord",
    dialog: true,
  }),
  computed: {
    filters() { return this.$store.getters["students/filters"]},
  },
  methods: {
    setModalHanler(actionType) {
      this.$store.commit('setModal', actionType)
    },
    updateFilter(e) {
      this.$store.commit("students/setFilters", { [e.target.name]: e.target.value });
    },
  },
  setup() {
    const open = ref(true) 

    return {
      open,
    }
  },
};
</script>

<style scoped>
.tool_bar_full {
  background-color: white;
}
.tool_bar {
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tool_bar_leftBox {
  max-width: 579px;
  flex: 1;
}
.btnGroup button {
  width: 100%;
  padding: 0 10px;
}

.tool_bar_rightBox {
  max-width: 427px;
  display: flex;
  align-items: center;
  justify-content: right;
}

.searchBox {
  position: relative;

  margin: 0 20px;
}
.searchBox input {
  height: 40px;
  background: #e8e8e8;
  border-radius: 5px;
  font-size: 15px;
  line-height: 18px;
  width: 284px;
  padding: 0px 11px 0 38px;
}
.searchBox input:focus {
  background-color: white;
  outline: 2px solid blue;
}
.searchBox:after {
  content: url("~assets/icons/search.svg");
  position: absolute;
  top: 10px;
  left: 10px;
}
.tool_bar_rightBox button {
  background: #edf1fd;
  border-radius: 5px;
  width: 123px;
  height: 40px;
  font-family: "SF-Pro-Text";
  font-weight: 500;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: -0.35px;
  color: #3365fc;
  display: flex;
  align-items: center;
  padding: 0 32px;
  transition: color 0.1s ease-in;
  position: relative;
}
.tool_bar_rightBox button span {
  margin-left: 10px;
}
.tool_bar_rightBox button:hover {
  background: #d1d8ec;
}
.tool_bar_rightBox button:active {
  top: 2px;
}
</style>
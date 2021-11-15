<template>
  <div>
    <AdminToolBar />
    <div class="container">
      <div class="header_block">
        <NuxtLink to="/admin/create" class="my_button">
          <Icon name="add" />
          <span>Talaba qo‘shish</span>
        </NuxtLink>
      </div>
      <table class="table-auto w-full">
        <thead>
          <tr class="thRow">
            <th>#</th>
            <th>f.i.sh.</th>
            <th>Talabalik turi</th>
            <th>OTM</th>
            <th>Ajratilingan summa</th>
            <th>Kontrakt miqdori</th>
            <th>Amallar</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(student, idx) of students"
            :key="student.id"
            class="rowStyle"
          >
            <td>{{ ++idx }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.degree }}</td>
            <td>{{ student.university }}</td>
            <td>{{ student.money_gained }} <span>UZS</span></td>
            <td>{{ student.money_needed }} <span>UZS</span></td>
            <td>
              <button>
                <Icon name="eye" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="table_footer">
        <p class="table_info">59 tadan 1-10 ko‘rsatilmoqda</p>
        <div class="pagination_cantainer">
          <label class="select_box">
            Ko‘rsatish
            <select class="inputText">
              <option>10</option>
              <option>20</option>
            </select>
          </label>
          <v-pagination
            v-model="page"
            :length="15"
            :total-visible="7"
          ></v-pagination>
          <div class="pagination_box">
            <label v-for="i of 3" :key="i">
              <input type="radio" />
              <span>{{ i }}</span>
            </label>
          </div>
        </div>
      </div>
      <pre>
      {{ filters }}
    </pre
      >
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  async fetch({ store }) {
    if (store.getters["students/students"].length === 0) {
      await store.dispatch("students/fetch");
    }
  },
  data: () => ({
    page: 1,
  }),
  computed: {
    filters() {
      return this.$store.getters["students/filters"];
    },
    students() {
      let arr = this.$store.getters["students/students"];

      if (this.filters.name) {
        arr = arr.filter((item) =>
          item.name.toLowerCase().includes(this.filters.name.toLowerCase())
        );
      }
      if (this.filters.degree) {
        arr = arr.filter((item) => this.filters.degree === item.degree);
      }
      if (this.filters.university) {
        arr = arr.filter((item) => this.filters.university === item.university);
      }

      return arr;
    },
  },
};
</script>

<style scoped>
.header_block {
  margin: 16px 0px 28px;
  display: flex;
  justify-content: flex-end;
}

table {
  border-collapse: separate;
  border-spacing: 0 12px;
  border: none;
}
.thRow th {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 1.125px;
  text-transform: uppercase;
  color: #b1b1b8;
  padding: 0 12px;
}
.thRow th:nth-child(2) {
  text-align: start;
}
.rowStyle {
  background: #ffffff;
}
.rowStyle:hover {
  background-color: rgb(250, 250, 250);
}

.rowStyle td {
  padding: 12px;
  min-height: 68px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #1d1d1f;
  border-bottom: 1px solid rgba(46, 91, 255, 0.08);
  border-top: 1px solid rgba(46, 91, 255, 0.08);
}
.rowStyle td:nth-child(2) {
  text-align: start;
}
.rowStyle td:first-child {
  border-radius: 8px 0 0 8px;
  border-left: 1px solid rgba(46, 91, 255, 0.08);
}
.rowStyle td:last-child {
  border-radius: 0 8px 8px 0;
  border-right: 1px solid rgba(46, 91, 255, 0.08);
}

.table_footer {
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
}
.table_info {
  font-size: 15px;
  line-height: 22px;
  color: #1d1d1f;
}
.pagination_cantainer {
  display: flex;
  align-items: center;
}
.select_box .inputText {
  padding-left: 10px;
  margin: 0 20px 0 12px;
  width: 54px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #dfe3e8;
  box-sizing: border-box;
  border-radius: 4px;
}
.pagination_box label {
  margin-right: 4px;
}
.pagination_box input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.pagination_box span {
  background: #ffffff;
  border: 1px solid #3366ff;
  border-radius: 4px;
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  height: 32px;
  width: 32px;
  line-height: 32px;
  text-align: center;
  color: #3366ff;
}
</style>
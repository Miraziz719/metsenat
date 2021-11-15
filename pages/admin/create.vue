<template>
  <div>
    <title-bar />

    <div class="card">
      <div class="card__content">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-7">
          <div class="formControl">
            <label for="name">F.I.Sh. (Familiya Ism Sharif)</label><br />
            <input
              class="inputText"
              value=""
              placeholder="Abdullayev Abdulla Abdulla o’g’li"
            />
          </div>
          <div class="formControl">
            <label for="name">Telefon raqam</label><br />
            <input class="inputText" value="" placeholder="+998 00 000-00-00" />
          </div>
        </div>
        <div class="formControl">
          <label for="name">OTM</label><br />
          <select
            name="university"
            class="inputText"
            aria-placeholder="odfjdfd"
          >
            <option value="">OTM ni tanlang</option>
            <option value="dhg">1</option>
          </select>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-7">
          <div class="formControl">
            <label for="name">Talabalik turi</label><br />
            <select name="type" class="inputText" aria-placeholder="odfjdfd">
              <option value="">OTM ni tanlang</option>
              <option value="dhg">1</option>
            </select>
          </div>
          <div class="formControl">
            <label for="name">Kontrakt summa</label><br />
            <input
              class="inputText"
              value=""
              placeholder="Abdullayev Abdulla Abdulla o’g’li"
            />
          </div>
          
        </div>
        <div class="col-span-6 sm:col-span-3 formControl">
            <label for="country" class="block text-sm font-medium text-gray-700"
              >Country</label
            >
            <select
              id="country"
              name="country"
              autocomplete="country-name"
              class="inputText2 
                mt-1
                block
                w-full
                py-2
                px-3
                border border-gray-300
                bg-white
                rounded-md
                shadow-sm
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        <div class="action_box">
          <button class="my_button">
            <Icon name="add" />
            <span>Qo‘shish</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from "../../components/admin/TitleBar.vue";
export default {
  components: { TitleBar },
  layout: "admin",
};
</script>


<style scoped>
.card {
  max-width: 790px;
  margin: 40px auto;
  padding: 28px;
  background-color: white;
  border: 1px solid #ebeefc;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
}
</style>
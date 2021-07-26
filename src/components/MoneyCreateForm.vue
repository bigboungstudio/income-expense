<template>
  <div class="margintop">
    <div class="head">เพิ่มบันทึก</div>
    <div>
      <div class="margintop">
        <label for="date">วันที่ : </label>
        <v-date-picker
          color="orange"
          v-model="form.date"
          :model-config="modelConfig"
          is-required
          class="inputborder"
        >
          <template v-slot="{ inputValue, inputEvents }">
            <input
              class="bg-white border px-2 py-1 rounded"
              :value="inputValue"
              v-on="inputEvents"
            />
          </template>
        </v-date-picker>
      </div>
      <div class="margintop">
        <label for="detail">รายละเอียด : </label>
        <input type="text" v-model="form.detail" class="inputborder" />
      </div>
      <div class="margintop">
        <label for="money">จำนวนเงิน : </label>
        <input type="number" v-model="form.money" class="inputborder" />
      </div>
      <div class="margintop">
        <label>ประเภท : </label>
        <select name="type" id="type" v-model="form.type" class="inputborder">
          <option value="รายรับ">รายรับ</option>
          <option value="รายจ่าย">รายจ่าย</option>
        </select>
      </div>
      <div class="margintop">
        <button @click="addMoney" class="addbutton">เพิ่ม</button>
      </div>
    </div>
  </div>
</template>

<script>
import MoneyStore from "@/store/Money";
export default {
  data() {
    return {
      form: {
        date: "",
        detail: "",
        money: "",
        type: "",
      },
      modelConfig: {
        type: "string",
        mask: "DD/MM/YYYY",
      },
    };
  },
  methods: {
    clearForm() {
      form = {
        date: "",
        detail: "",
        money: "",
        type: "",
      };
    },
    addMoney() {
      if (this.form.date == "") {
        this.form.date = "ไม่ระบุ";
      }
      if (
        this.form.money !== "" &&
        this.form.type !== "" &&
        this.form.detail == ""
      ) {
        let payload = {
          date: this.form.date,
          detail: "ไม่ระบุ",
          money: this.form.money,
          type: this.form.type,
        };
        console.log(payload);
        MoneyStore.dispatch("addMoney", payload);
        this.clearForm;
      } else if (
        this.form.money !== "" &&
        this.form.type !== "" &&
        this.form.detail !== ""
      ) {
        let payload = {
          date: this.form.date,
          detail: this.form.detail,
          money: this.form.money,
          type: this.form.type,
        };
        console.log(payload);
        MoneyStore.dispatch("addMoney", payload);
        this.clearForm;
      }
    },
  },
};
</script>

<style>
.head {
  font-size: 24px;
  margin-top: 5%;
}
.margintop {
  margin-top: 7%;
  font-size: 20px;
}
.inputborder {
  border-radius: 2px;
  color: black;
}
.addbutton {
  background-color: white;
  color: #9370db;
  border-radius: 3px;
  width: 20%;
  margin-bottom: 1%;
  font-size: 22px;
}

.addbutton:hover {
  transition-duration: 0.4s;
  background-color: #9370db;
  color: white;
}
</style>
<template>
  <div>
    <table>
      <thead>
        <th>วันที่</th>
        <th>รายละเอียด</th>
        <th>จำนวนเงิน</th>
        <th>ประเภท</th>
      </thead>
      <tbody>
        <tr v-for="(mon, index) in moneys" :key="index">
          <td>{{ mon.date }}</td>
          <td>{{ mon.detail }}</td>
          <td>{{ mon.money }}</td>
          <td>{{ mon.type }}</td>
        </tr>
      </tbody>
    </table>
    <br />
    <div class="balance">
      <span>ยอดรายรับ : </span>
      <span>{{ money.income }}</span>
      <br />
      <span>ยอดรายจ่าย : </span>
      <span>{{ money.expense }}</span>
      <br />
      <span>ยอดเงินคงเหลือ : </span>
      <span>{{ money.balance }}</span>
    </div>
  </div>
</template>

<script>
import MoneyStore from "@/store/Money";
export default {
  data() {
    return {
      moneys: [],
      money: {
        income: 0,
        expense: 0,
        balance: 0,
      },
      form: {
        date: "",
        detail: "",
        money: 0,
      },
    };
  },
  beforeUpdate() {
    this.totalMoney();
  },
  created() {
    this.fetchMoney();
  },
  methods: {
    async fetchMoney() {
      await MoneyStore.dispatch("fetchMoney");
      this.moneys = MoneyStore.getters.moneys;
      this.totalMoney();
    },
    totalMoney() {
      (this.money = {
        income: 0,
        expense: 0,
        balance: 0,
      }),
        this.moneys.forEach((element) => {
          if (element.type == "รายรับ") {
            this.money.income += parseInt(element.money);
          }
          if (element.type == "รายจ่าย") {
            this.money.expense += parseInt(element.money);
          }
        });
      this.money.balance = this.money.income - this.money.expense;
    },
  },
};
</script>

<style>
table {
  border-collapse: collapse;
}
th,
td {
  text-align: left;
  padding: 8px;
  font-size: 20px;
}
th {
  background-color: #294936;
  color: white;
}
tr:nth-child(even) {
  background-color: #abedc6;
}
tr:nth-child(odd) {
  background-color: #b9ffb7;
}
.balance {
  font-size: 28px;
  text-align: right;
  margin-right: 29%;
}
</style>
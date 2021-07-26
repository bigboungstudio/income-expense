<template>
  <div>
    <div class="homehead">บันทึกรายรับ&รายจ่าย</div>
    <div class="grit">
      <money-create-form class="createborder"></money-create-form>
      <money-table class="table"></money-table>
    </div>
  </div>
</template>

<script>
import MoneyCreateForm from "@/components/MoneyCreateForm";
import MoneyTable from "@/components/MoneyTable";
export default {
  components: {
    MoneyTable,
    MoneyCreateForm,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");
.homehead {
  font-family: "Kanit", sans-serif;
  text-align: center;
  background: #8a2be2;
  padding: 20px;
  width: 100%;
  height: 100%;
  color: #ff7f50;
  font-size: 36px;
  margin: 0;
}
.homehead::after {
  display: inline-block;
  content: "";
  width: 60px;
  height: 60px;
  margin-left: 20px;
  background: url(https://image.flaticon.com/icons/png/512/3135/3135706.png);
  background-repeat: no-repeat;
  background-size: 100%;
  opacity: 0.8;
}
.createborder {
  font-family: "Kanit", sans-serif;
  color: white;
  border-radius: 25px;
  background-color: #ffa500;
  width: 70%;
  height: 430px;
  margin-top: 2%;
  margin-left: 20%;
}
.table {
  font-family: "Kanit", sans-serif;
  margin-left: 10%;
  margin-top: 3%;
}
.grit {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 3%;
  background-color: #e6e6fa;
}
</style>

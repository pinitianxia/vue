<template>
  <div>
    <p>多个复选框</p>
    <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
    <label for="runoob">Runoob</label>
    <input type="checkbox" id="google" value="Google" v-model="checkedNames">
    <label for="google">Google</label>
    <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
    <label for="taobao">taobao</label>
    <br>
    <span>选择的值{{checkedNames}}</span>
    <br>
    <select v-model="selected" name="fruit">
        <option value="">选择一个网站</option>
        <option value="www.runoob.com">Runoob</option>
        <option value="www.google.com">Google</option>
    </select>
    <span>选择的网站{{selected}}</span>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
      return{
        checked : false,
        checkedNames:[],
        selected:'',
      }
  }
}
</script>

<style>

</style>

<template>
  <div class="Helloworld">
    <h1 class="msg">{{msg}}</h1>
    <div v-html="message"></div>
    <div v-bind:class="{'handred': use}">
      v-bind:class 指令
    </div>
    <button @click="handleRed">handRed</button>
    <div v-bind:id="'list-' + id">bind id</div>
    <p v-if="seen">you see</p>
    <button @click="handleSee" class="handlesee">handlesee</button>
    <br/>
    <input v-model="inputmes">
    <button @click="reverseInputmes">reverse</button>
    <h3>{{inputmes | capitalize}}</h3>
    <h3>{{inputmes}}</h3>
    <!-- <ul>
      <li v-for = "site in sites">{{site.name}}</li>
      <li>--------------</li>
      <li v-for="value in object">{{value}}</li>
    </ul> -->
    <h3>{{comReverseInputmes}}</h3>
  </div>
  
</template>

<script>
export default {
  name : 'helloworld',
  data() {
    return{
      msg: 'hello',
      message: '<h1>helloworld</h1>',
      use:true,
      id:1,
      seen:false,
      inputmes:'runoob',
      sites:[
        {name:'runoob'},
        {name:'Google'},
        {name:'Taobao'}
      ],
      object: {
      name: '菜鸟教程',
      url: 'http://www.runoob.com',
      slogan: '学的不仅是技术，更是梦想！'
    }
    }
  },
  methods: {
    //es6 不支持？
    reverseInputmes: function() {
      //反转字符chu
      this.inputmes = this.inputmes.split('').reverse().join('')
    },
    handleSee: function(seen) {
      return this.seen = !this.seen;
    },
    handleRed: function(use) {
      return this.use = !this.use;
    },
  },
  // 过滤器
  filters:{
    //首字大写
    capitalize: (value) => {
      if(!value) return ''
      value=value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed:{
    comReverseInputmes: function(){
      return this.inputmes.split('').reverse().join('')
    }
  }
}
</script>

<style>
.handred{
  background: red;
}
.msg{
  background-color: aqua;
}
.handred{
  margin-top: 20px;
}
</style>
 
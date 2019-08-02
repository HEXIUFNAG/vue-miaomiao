<template>
    <header id="header">
      <h1>{{title}}</h1>
    </header>
</template>

<script>
    export default {
        name: "Headerindex",
      props:{
          title:{
            type:String,
            default:'喵喵电影'
          }
      }
    }
</script>

<style scoped>
#header{width:100%;height:50px;color:#fff;background: red;border-bottom: 1px solid red;position: relative}
#header h1{font-size: 18px;text-align: center;line-height: 50px;font-weight: normal}
</style>

<template>
<HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
body {
    margin: 0;
    background: #000000;
    font-family: sans-serif;
    color: #fff;
}

.header {
    overflow-wrap: hidden;
    background-color: #175a74;
    padding: 10px 10px;
    text-align: left;
}

.grid {
    width: 600px;
    height: 450px;
    margin: 0 auto;
    background-color: #000000;
    padding: 10px 50px 50px 50px;
    text-align: center;

}

.grid #question {
    font-family: sans-serif;
    background-color: #000000;
    font-size: 30px;
    /*font goes here*/
    color: #ffffff;
}

.buttons {
    margin-top: 30px;
}

#button0,
#button1,
#button2,
#button3 {
    background-color: #175a74;
    width: 250px;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    border: 1px solid #707070;
    border-radius: 50px;
    margin: 10px 40px 10px 0px;
    padding: 20px 20px;
}

#button0:hover,
#button1:hover,
#button2:hover,
#button3:hover {
    cursor: pointer;
    background-color: #beaf3d;
}

#button0:focus,
#button1:focus,
#button2:focus,
#button3:focus {
    outline: 0;
}

#progress {
    color: #2b2b2b;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
}

.footer {
    background: #175a74;
    width: 100%;
    height: 30px;
    padding-top: 14px;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    font-size: 12px;
}
</style>

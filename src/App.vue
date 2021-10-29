<template>
 <Header />
 <main>
      <router-view />
 </main>
 
 <Footer />
 
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';


export default {
 
  components: {Header, Footer},
  name: 'App',
 
}
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Lato:400,700|Montserrat:400,700);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css);

@font-face {
    font-family: LemonMilk;
    font-weight: bold;
    src: url("./assets/fonts/LEMONMILK-Bold.otf" ) format("opentype");
}
body{
   font-family: 'Montserrat', sans-serif;
  background-image: url('./assets/back.png');
  min-height: 100vh;
}
#banner {
  
  background: linear-gradient(to Right , #86f0f075 , #00808059);
  background-repeat: no-repeat;
  background-size: contain;
  height: 90vh;
  padding: 100px;
  margin-top: -10vh;
}
h1{
    font-family: 'LemonMilk';
    color: #008080;
}
</style>

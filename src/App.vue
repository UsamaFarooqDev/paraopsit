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
}
h1{
    font-family: 'LemonMilk';
}
</style>

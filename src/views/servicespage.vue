<template>
 <div class="container-fluid main">
 <div class="conatiner">
     <div class="row align-items-center mx-auto">
         <div class="col-sm-4 text-center">
             <h1 class="animate__animated animate__fadeInLeft">Services</h1>
         </div>
         <div class="col-sm-8">
             <img src="../assets/images/service1.svg" class="banner img-fluid animate__animated animate__fadeIn"  alt="">
         </div>
     </div>
 </div>
   </div>
<div class="container-fluid light">
    <div class="container">
        <div class="row">
        <div class="col-sm-12 text-center">
            <h1>
                From startup to enterprise, the full range of engineering 
services your company needs
            </h1>
        </div>
    </div>
    </div>
</div>
    <Services :style="{background: '#D0D9D8' , color: '#1F2936'}" />
   <div class="light"></div>
</template>
<script>
//import Header from '../components/Header';
import Services from '../components/Services';


export default {
     components: {Services},
    name:'servicespage',
}
</script>
<style scoped>

.light{
    padding-top: 50px;
    background-color: #D0D9D8;
}
.light h1{
    font-size: 30px;
}
.main{
    margin-top: -10vh;
    padding-top: 12vh;
    background-color: #1F2936;
    color: white;
}
.banner{
    width: 100%;
    height: 400px;
}
</style>

<template>
 <div class="container-fluid" id="banner">
 <div class="conatiner">
     <div class="row align-items-center rc">
         <div class="col-sm-12 text-center">
             <h1 class="animate__animated animate__fadeInLeft">Our Services</h1>
             <h6 class="animate__animated animate__fadeInLeft">We Assure The Best Our Customers Get</h6>
             <p class="animate__animated animate__fadeInLeft">Our Aim Is To Provide High Quality Solutions For Our Clients Problems</p>
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
    <Services :style="{ color: '#008080'}" />
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
    background-color: transparent;
}
.light h1{
    font-size: 30px;
}
.rc{
    margin-top: 15vh;
}
h1{
    font-size: 80px;
}
#banner{
  height: 600px;
  margin-bottom: 5vh;
}
.banner{
    width: 100%;
    height: 400px;
}
</style>

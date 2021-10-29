<template>
     <div class="container-fluid " id="banner">
 <div class="conatiner">
     <div class="row align-items-center mx-auto">
         <div class="col-sm-12 text-center animate__animated animate__fadeInDown">
             <h1>Contact Us</h1>
             <h4>YOU'VE GOT QUESTIONS, WE'VE GOT ANSWERS</h4>
         </div>
        
     </div>
 </div>
   </div>
   <!--INFO-->
   <div class="Container-fluid info">
       <div class="container">
           <div class="row align-items-center">
               <div class=" col-sm-3 col-12 animate__animated animate__fadeInLeft">
                   <h4>Head Office</h4>
                   <p>
                       Office #12 
                       1st Floor Aslam Market 
                       The Mall Wah Cantt
                   </p>
                   <h4>Cell/Whatsapp:</h4>
                   <p>
                       +92 312 574 9828
                   </p>
                   <h4>Phone:</h4>
                   <p>
                       +92 312 574 9828
                   </p>
                   <h4>Email:</h4>
                   <p>
                       info@paraopsit.com
                   </p>
                   <h4>Website:</h4>
                   <p>
                       www.paraopsit.com
                   </p>
               </div>
              <div class="col-lg-9 col-12 animate__animated animate__fadeInRight">
                  <Contact  />
              </div>
           </div>
       </div>
   </div>
 
</template>
<script>

import Contact from '../components/Contactform';
export default {
 
    components: {Contact},
    name: 'contactus',
}
</script>
<style scoped>

h1{
    font-size: 80px;
    margin-top: 10vh;
}
.info{
    margin-top: 10vh;
    margin-bottom: 10vh;
    padding: 50px;
    background-color: transparent;
    color: #008080;
}

#banner{
    height: 600px;
}
@media screen and (max-width: 900px) {
  h1{
    font-size: 40px;
  }

}
</style>main
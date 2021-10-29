<template>

     <nav class="navbar navbar-expand-lg navbar-light header" id="nav">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="../assets/images/logolight.png" width="300" id="log" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                           <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                
                    <router-link to="/services">Services</router-link>
                    </li>
                    <li class="nav-item">
                         <router-link to="/portfolio">Portfolio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/">Our Team</router-link>
                    </li>
                     <li class="nav-item">
                        <router-link to="/contactus">Contact Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="btn btun" to="/getquote">Get Qoute</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
   
</template>
<script>
import $ from 'jquery';
export default{
mounted(){

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("#nav").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("#nav").removeClass("active");
        }
    });
});

},

    name: 'Header',
}
</script>
<style scoped>
#nav{
    
    color: white;
   position: fixed;
   background: rgba(0, 0, 0, 0);
   top: 0;
   z-index: 200;
position: sticky;
height: 10vh;
}

#nav ul li a{
    text-decoration: none;
    color: #112233;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 2px;
    margin-right: 10px;
}
#nav ul li a:hover{
    color: #008080;
}
#nav .btun{
    border: 1px solid #fff;
    background-color: #fff ;
    color: black;
}
#nav .btun:hover{
color: rgb(56, 55, 55);
}
.active{
    background-color: white !important;
    color: #112233 !important;
    box-shadow: 0 4px 4px #00808042;
}
.active ul li a{
    color: #112233 !important;
}
.active .btun{
       border: 1px solid #445566;
    background-color: #112233 !important;
    color: white !important;
}
@media only screen and (max-width: 960px) {
   #navbarNav{
     background: #008080!important;
    padding: 20px;
    border-radius: 12px;
    line-height: 40px;
    color: white;
    width: 100%;
   
}
#nav ul li a{
    text-decoration: none;
    color: white ;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 2px;
    margin-right: 10px;
}
.active{
    background-color: white !important;
    color: #112233 !important;
    box-shadow: 0 4px 4px #00808042;
    height: 10vh !important;
}
#log{
    width:170px;
}
#nav .btun{
    border: 1px solid #fff;
    background-color: #fff ;
    color: black;
}
  }
</style>

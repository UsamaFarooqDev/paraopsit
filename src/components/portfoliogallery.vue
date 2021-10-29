<template>
  <div class="container-fluid" id="banner">
    <div class="conatiner main">
      <div class="row align-items-center ">
        <div class="col-sm-6 text-center">
          <h1 class="animate__animated animate__fadeInLeft">Portfolio</h1>
        </div>
        <div
          class="col-sm-6 text-center animate__animated animate__fadeInRight"
        >
          <a href="javascript:void(0)" @click="show_web">Web Development</a>
          <br />
          <a href="javascript:void(0)" @click="show_app">App Development</a>
          <br />
          <a href="javascript:void(0)" @click="show_graphics"
            >Graphics Design</a
          >
          <br />
          <a href="javascript:void(0)" @click="show_smm"
            >Social Media Marketing</a
          >
          <br />
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="wrapper">
      <!-- web Portfolio -->
      <div class="container" id="web">
        <div class="row align-items-center">
          <div class="col-sm-6 all animate__animated animate__fadeInLeft">
            <img
              src="../assets/portfolio/web/doodles.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-sm-6 all animate__animated animate__fadeInRight">
            <h2>Doodles Pens ~ Store</h2>
            <p>
              Doodlespens is a UK based e-commerce store that sells 3D pens &
              their filaments. We enhanced their business by providing them
              professional e-commerce store.
            </p>
          </div>
        </div> 
        <hr>
          <div class="row align-items-center flex-column-reverse flex-sm-row">
          <div class="col-sm-6 col-12 all animate__animated animate__fadeInLeft">
             <h2>Points ~ Information Technology</h2>
            <p>
              Pointstechnology is an information technology company. They were 
looking for animated landing page for their company and here is what 
we come up with
            </p>
            
          </div>
          <div class="col-sm-6 col-12  all animate__animated animate__fadeInRight">
           <img
              src="../assets/portfolio/web/pointsit.png"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
        <hr>
         <div class="row align-items-center">
          <div class="col-sm-6 all animate__animated animate__fadeInLeft">
            <img
              src="../assets/portfolio/web/impex.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-sm-6 all animate__animated animate__fadeInRight">
            <h2>ImpexPakistan ~ Store</h2>
            <p>
            ImpexPakistan is Pakistan’s largest import export company of  Himalayan Salt and we are honored partners with them managing  there IT related stuff.

            </p>
          </div>
        </div> 
          <hr> 
          <div class="row align-items-center flex-column-reverse flex-sm-row">
          <div class="col-sm-6 all animate__animated animate__fadeInLeft">
             <h2>Elation Sounds ~ Store</h2>
            <p>
           Elation Sound is a Music Company and were looking to upgrade their  website and make it modern. Here is what we come up with. 
            </p>
            
          </div>
          <div class="col-sm-6 all animate__animated animate__fadeInRight">
           <img
              src="../assets/portfolio/web/elationsound.png"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
         <hr>
         <div class="row align-items-center">
          <div class="col-sm-6 all animate__animated animate__fadeInLeft">
            <img
              src="../assets/portfolio/web/d2rich.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-sm-6 all animate__animated animate__fadeInRight">
            <h2>D2Rich ~ Store</h2>
            <p>
            D2Rich is a company love to sale Diablo 2 content and accessories  and here they are online with the help of us. 


            </p>
          </div>
        </div> 
      </div>
      <!-- Apps Portfolio -->
      <div class="container" id="apps">
        <div class="row align-items-center">
          <div class="col-sm-6 animate__animated animate__fadeInLeft">
            <img
              src="../assets/portfolio/apps/app1.png"
              class="img-fluid"
              alt=""
            />
           
          </div>
          <div class="col-sm-6 animate__animated animate__fadeInRight">
             <h2>N8 ~ Cosmetic Brand</h2>
           <p>
             N8 is a cosmetic brand and with the help of our lead developer
their brand is now on touch away from users
           </p>
            
          </div>
        </div>
        <hr>
         <div class="row align-items-center flex-column-reverse flex-sm-row">
          <div class="col-sm-6 animate__animated animate__fadeInLeft">
             <h2>Journista ~ Travel App</h2>
           <p>
           Journista was idea proposed by one of our team members to
help people out here in getting rides for daily driven work
           </p>
           
          </div>
          <div class="col-sm-6 animate__animated animate__fadeInRight">
               <img
              src="../assets/portfolio/apps/app2.png"
              class="img-fluid"
              alt=""
            />
           
          
            
          </div>
        </div>
        <hr>
         <div class="row align-items-center">
          <div class="col-sm-6 animate__animated animate__fadeInLeft">
            <img
              src="../assets/portfolio/apps/app3.png"
              class="img-fluid"
              alt=""
            />
           
          </div>
          <div class="col-sm-6 animate__animated animate__fadeInRight">
             <h2>Desk Online ~ Furniture Store</h2>
           <p>
            In today's word people need everything on there touch so we
made a service where you can now even buy furniture & decor
with one touch.
           </p>
            
          </div>
        </div>
      </div>
      <!-- graphics Portfolio -->
      <div class="container" id="graphics">
        <div class="row">
          <div class="col-sm-4 animate__animated animate__fadeInLeft">
            <img
              src="../assets/portfolio/graphics/t1.png"
              class="img-fluid"
              alt=""
            />
            <h2>Let Go ~ T-Shirt</h2>
          </div>
          <div class="col-sm-4 animate__animated animate__bounceIn">
            <img
              src="../assets/portfolio/graphics/t2.png"
              class="img-fluid"
              alt=""
            />
            <h2>Lets Start Journey ~ T-Shirt</h2>
          </div>
          <div class="col-sm-4 animate__animated animate__fadeInRight">
            <img
              src="../assets/portfolio/graphics/t3.png"
              class="img-fluid"
              alt=""
            />
            <h2>Work Hard ~ T-Shirt</h2>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-sm-4 animate__animated animate__fadeInLeft">
            <img
              src="../assets/portfolio/graphics/t4.png"
              class="img-fluid"
              alt=""
            />
            <h2>Dream Big ~ T-Shirt</h2>
          </div>
          <div class="col-sm-4 animate__animated animate__bounceIn">
            <img
              src="../assets/portfolio/graphics/t5.png"
              class="img-fluid"
              alt=""
            />
            <h2>Never Go Never Know ~ T-Shirt</h2>
          </div>
          <div class="col-sm-4 animate__animated animate__fadeInRight">
            <img
              src="../assets/portfolio/graphics/t6.png"
              class="img-fluid"
              alt=""
            />
            <h2>Custom Design ~ T-Shirt</h2>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-sm-4 animate__animated animate__fadeInLeft">
            <img
              src="../assets/portfolio/graphics/l1.jpg"
              class="img-fluid"
              alt=""
            />
            <h2>Alyeen Pharmaceuticals ~ Logo Design</h2>
          </div>
          <div class="col-sm-4 animate__animated animate__bounceIn">
            <img
              src="../assets/portfolio/graphics/l2.png"
              class="img-fluid"
              alt=""
            />
            <h2>Every Biography ~ Logo Design</h2>
          </div>
          <div class="col-sm-4 animate__animated animate__fadeInRight">
            <img
              src="../assets/portfolio/graphics/l3.jpg"
              class="img-fluid"
              alt=""
            />
            <h2>Profix ~ Logo Design</h2>
          </div>
        </div>
      </div>
      <!--smm portfolio -->
      <div class="container" id="smm">
        <div class="row">
          <div class="col-sm-6 animate__animated animate__fadeInLeft">
            <img
              src="../assets/portfolio/smm/p1.jpg"
              class="img-fluid"
              alt=""
            />
            <h2>Macdroid Store ~ Post Design</h2>
          </div>
          <div class="col-sm-6 animate__animated animate__fadeInRight">
            <img
              src="../assets/portfolio/smm/p2.jpg"
              class="img-fluid"
              alt=""
            />
            <h2>Love My Phone Repair ~ Post Design</h2>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-sm-6 animate__animated animate__fadeInLeft">
            <img
              src="../assets/portfolio/smm/p3.jpg"
              class="img-fluid"
              alt=""
            />
            <h2>Profix South Chase ~ Post Design</h2>
          </div>
          <div class="col-sm-6 animate__animated animate__fadeInRight">
            <img
              src="../assets/portfolio/smm/p4.jpg"
              class="img-fluid"
              alt=""
            />
            <h2>Ur Broken Phone ~ Post Design</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    show_smm: function () {
      document.getElementById("web").style.display = "none";
      document.getElementById("apps").style.display = "none";
      document.getElementById("graphics").style.display = "none";
      document.getElementById("smm").style.display = "block";
    },
    show_all: function () {
      var x = document.getElementsByClassName("all");
      var i = 0;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      }
    },
    show_app: function () {
      document.getElementById("web").style.display = "none";
      document.getElementById("apps").style.display = "block";
      document.getElementById("graphics").style.display = "none";
      document.getElementById("smm").style.display = "none";
    },
    show_web: function () {
      document.getElementById("web").style.display = "block";
      document.getElementById("apps").style.display = "none";
      document.getElementById("graphics").style.display = "none";
      document.getElementById("smm").style.display = "none";
    },
    show_graphics: function () {
      document.getElementById("web").style.display = "none";
      document.getElementById("apps").style.display = "none";
      document.getElementById("graphics").style.display = "block";
      document.getElementById("smm").style.display = "none";
    },
  },
  name: "gallery",
};
</script>
<style scoped>
.main_tags {
  margin-top: 5%;
  margin-bottom: 5%;
}
.btn {
  background-color: transparent !important;
  border: none !important;
  color: black;
  border-bottom: 1px solid black !important;
  border-radius: 10px !important;
}
.btn:hover {
  border: 1px solid black !important;
  border-radius: 10px !important;
}
.btn:focus {
  border: 1px solid black !important;
  box-shadow: none !important;
}
#apps,
#graphics,
#smm {
  display: none;
}
#web h2,
#apps h2,
#graphics h2,
#smm h2 {
  background-color: #008080;
  font-size: 15px;
  text-align: center;
  color: white;
  padding: 10px;
}
.wrapper {
  margin-bottom: 10vh;
}
.main {
  margin-top: 10vh;
}
a {
  color: #008080;
  font-size: 30px;
  text-decoration: none;
  line-height: 65px;
}
a:hover {
  zoom: 120%;
  transition-duration: 0.8s;
}
#banner {
  height: 600px;
  margin-bottom: 5vh;
}
h1 {
  font-size: 80px;
  text-align: center;
}
@media screen and (max-width: 900px) {
  h1{
    font-size: 40px;
  }
  a {
  color: #008080;
  font-size: 20px;
  text-decoration: none;
  line-height: 35px;
}
}
</style>
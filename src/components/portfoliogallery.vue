<template>
  <div class="container-fluid">
    <div class="container main_tags">
      <div class="row text-center animate__animated animate__fadeIn">
        <div class="col-sm-3 col-6">
          <a href="javascript:void(0)" class="btn btn-success" @click="show_web"
            >Web Development</a
          >
        </div>
        <div class="col-sm-3 col-6">
          <a href="javascript:void(0)" class="btn btn-info" @click="show_app">
            App Development
          </a>
        </div>
        <div class="col-sm-3 col-6">
          <a
            href="javascript:void(0)"
            class="btn btn-danger"
            @click="show_graphics"
            >Graphics Design</a
          >
        </div>
        <div class="col-sm-3 col-6">
          <a
            href="javascript:void(0)"
            class="btn btn-warning"
            @click="show_smm"
          >
            Social Media Marketing
          </a>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <!-- web Portfolio -->
    <div class="container" id="web">
      <div class="row">
        <div class="col-sm-4 all animate__animated animate__fadeInLeft">
          <img
            src="../assets/portfolio/web/doodles.png"
            class="img-fluid"
            alt=""
          />
          <h2>Doodles Pens ~ Store</h2>
        </div>
        <div class="col-sm-4 all animate__animated animate__fadeInDown">
          <img
            src="../assets/portfolio/web/impex.png"
            class="img-fluid"
            alt=""
          />
          <h2>Impex Pakistan ~ Store</h2>
        </div>
        <div class="col-sm-4 all animate__animated animate__fadeInRight">
          <img
            src="../assets/portfolio/web/pointsit.png"
            class="img-fluid"
            alt=""
          />
          <h2>Points Information Technology</h2>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-4 all animate__animated animate__fadeInLeft">
          <img
            src="../assets/portfolio/web/elationsound.png"
            class="img-fluid"
            alt=""
          />
          <h2>Elations Sound ~ Store</h2>
        </div>
        <div class="col-sm-4 all animate__animated animate__fadeInUp">
          <img
            src="../assets/portfolio/web/d2rich.png"
            class="img-fluid"
            alt=""
          />
          <h2>D2Rich ~ Store</h2>
        </div>
      </div>
    </div>
    <!-- Apps Portfolio -->
    <div class="container" id="apps">
      <div class="row">
        <div class="col-sm-4 animate__animated animate__fadeInLeft">
          <img
            src="../assets/portfolio/apps/app1.png"
            class="img-fluid"
            alt=""
          />
          <h2>N8 ~ Cosmetic Brand</h2>
        </div>
        <div class="col-sm-4 animate__animated animate__bounceIn">
          <img
            src="../assets/portfolio/apps/app2.png"
            class="img-fluid"
            alt=""
          />
          <h2>Journista ~ Travel App</h2>
        </div>
        <div class="col-sm-4 animate__animated animate__fadeInRight">
          <img
            src="../assets/portfolio/apps/app3.png"
            class="img-fluid"
            alt=""
          />
          <h2>Desk Online ~ Furniture Store</h2>
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
      <hr>
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
      <hr>
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
       <hr>
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
      document.getElementById('smm').style.display="block";
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
      document.getElementById('smm').style.display="none";
    },
    show_web: function () {
      document.getElementById("web").style.display = "block";
      document.getElementById("apps").style.display = "none";
      document.getElementById("graphics").style.display = "none";
      document.getElementById('smm').style.display="none";
    },
    show_graphics: function () {
      document.getElementById("web").style.display = "none";
      document.getElementById("apps").style.display = "none";
      document.getElementById("graphics").style.display = "block";
      document.getElementById('smm').style.display="none";
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
  background-color: #2e3740;
  font-size: 15px;
  text-align: center;
  color: white;
  padding: 10px;
}
.wrapper{
  margin-bottom: 10vh;
}
</style>
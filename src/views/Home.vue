<template>

  <div class="container-fluid" id="banner">
   
    <div class="container">
      <br /><br />
      <div class="row rowm align-items-center text-center">
      <div class="col-sm-6 col-12">
        <img src="../assets/logoanimation.svg" alt="">
      </div>
        <div class="col-sm-6 col-12 ">
          <h1
            class="animate__animated animate__fadeInDown"
          >
            WHERE INFORMATION
          </h1>
          <h1 class="typing animate__animated animate__fadeIn">
            MEETS EXCELLENCE
          </h1>
          <br />

          <router-link
            to="/getquote"
            class="btn animate__animated animate__fadeInUp"
            id="btn-sp"
            >Let's Start Project</router-link>
        </div>
      </div>
    </div>
  </div>
  <Services />
 
  <!--who we are-->
  <div class="container-fluid wwr" @mouseenter="animatewwr">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-6" id="left">
          <h1 class=" text-start">Who we are?</h1>
          <p class="text-start">
            Paraops is an IT Company that provides solution with the motto to
            solve people’s business challenges. Our team creates intuitive user
            experiences wrapped up in beautiful design. From Web Development to
            App Development we have covered everything. We collect your ideas
            and provide the best business solution that are perfectly designed
            for you to achieve your business goals while providing you the
            knowledge and expertise required.
          </p>
        </div>
        <div class="col-sm-6" id="right">
          <img src="../assets/images/wwr.jpeg" class="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </div>

  <!--Portfolio-->
  <div class="container-fluid  portfolio" @mouseenter="animateportfolio">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="text-center">Portfolio</h1>
        </div>
      </div>
      <br />
      <div class="row text-center port " >
        <div class="col-sm-4 text-center" id="leftp">
          <router-link to="/portfolio">
          <div class="boxp">
            <img src="../assets/icons/creativity.png" width="150" alt="">
            <br>
            <h5>Creative Designing</h5>
          </div>
          
          </router-link>
        </div>
        <div class="col-sm-4 text-center" id="midp">
          <router-link to="/portfolio">
            <div class="boxp">
            <img src="../assets/icons/web.png" width="150" alt="">
            <br>
            <h5>Web & App Development</h5>
          </div>
          </router-link>
        </div>
        <div class="col-sm-4 text-center" id="rightp">
          <router-link to="/portfolio">
            <div class="boxp">
            <img src="../assets/icons/brand.png" width="150" alt="">
            <br>
            <h5>Cooperate Branding</h5>
          </div>
          </router-link>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-sm-12 text-center">
          <router-link to="/portfolio" class="btn btn-lg btn-dark">View All</router-link>
        </div>
      </div>
    </div>
  </div>
  <Counter />

    <Partners />
  <!--testimonials-->
  <div class="container-fluid testimonials" @mouseenter="animatetesti">
    <div class="container">
      <div class="row text-center">
        <div class="col-sm-12">
          <h1>Our Clients Reviews</h1>
        </div>
      </div>
      <div class="row " id="testi">
        <div class="col-sm-3 offset-1">
          <p>
            <i class="fa fa-quote-left fa-4x"></i> I must say working with
            Paraops carried my business to heights I didn’t think of. I being
            CEO of M/S AL-FATEH BUILDERS suggest you to take their services for
            Social Media Marketing. They have undoubtfully a team of experts who
            know what to do their transparency and honesty has amazed me. If I
            have to rate out of 10 I will definitely give them a 10/10
          </p>
          <h4 class="font-weight-bold">Malik Iftikhar</h4>
          <h6 class="font-weight-bold my-3">Founder at Al-Fateh Builders</h6>
        </div>
        <div class="col-sm-3 offset-1">
          <p>
            <i class="fa fa-quote-left fa-4x"></i> My experience with Paraops
            was definitely very good. Their friendly management and the effort
            their team put in to create my cab booking app was worth way more
            than I paid them for. I will definitely work with them again and
            highly recommend that if you're looking for a cooperative, skilled
            and highly professional team for your projects you must give them a
            try.
          </p>
          <h4 class="font-weight-bold">Sheikh Abdul Wasif</h4>
          <h6 class="font-weight-bold my-3">Founder at CBU</h6>
        </div>
        <div class="col-sm-3 offset-1 ">
          <p>
            <i class="fa fa-quote-left fa-4x"></i> I'm truly satisfied with your
            administration. ParaOps is simply incredible.I would say
            that ParaOps individuals are extremely proficient and their insight
            is fantastic, they likewise take care of issues exceptionally quick.
            I prescribe ParaOps to every one of my clients, friends and
            customers. Much obliged to you for your understanding and your
            extraordinary work.
          </p>
          <h4 class="font-weight-bold">Haider Ali</h4>
          <h6 class="font-weight-bold my-3">CEO ImpexPakistan</h6>
        </div>
      </div>
    </div>
  </div>
  <Contact />
</template>
<script>
import Services from "../components/Services";
import Partners from "../components/Partners";
import Counter from "../components/Counter";
import Contact from "../components/Contactform";


export default {
   mounted () {
  window.scrollTo(0, 0)
},
  methods: {
    animatewwr: function () {
      const left = document.getElementById("left");
      const right = document.getElementById("right");
      left.classList.add("animate__animated", "animate__fadeInLeft");
      right.classList.add("animate__animated", "animate__fadeInRight");
    },
    animateportfolio: function () {
      const left = document.getElementById("leftp");
      const right = document.getElementById("rightp");
      const mid = document.getElementById("midp");
      left.classList.add("animate__animated", "animate__fadeInLeft");
      right.classList.add("animate__animated", "animate__fadeInRight");
      mid.classList.add("animate__animated", "animate__fadeIn");
    },
    animatetesti: function () {
      const left = document.getElementById("testi");
      left.classList.add("animate__animated", "animate__slideInLeft");
    },
  },
  components: { Services, Partners, Counter, Contact },
  name: "Home",
};
</script>
<style scooped >

.rowm {
  margin-top: 10vh;
 
}
.rowm h1{
   color:#112233;
}
#btn-sp {
  background-color: transparent;
  font-weight: 600;
  font-size: 25px;
  color: #008080;
  border: 2px solid #008080;
}
.wwr {

  padding: 50px;
 
}
.wwr h1{
  color: #008080;
}
.wwr p{
   color: black;
}
.portfolio {

  padding: 50px;
}
.testimonials {
 
  padding: 50px;
}
.typing {
  font-family: monospace;
  color: white;
}
.btn-dark{
  background-color: transparent !important;
  color: #008080 !important;
  border: 2px solid #008080;
}
.boxp{
  width: 300px;
  height: 300px;
  border-radius: 60%;
  background:radial-gradient(#05a8a8,#00808029);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
}
.boxp h5{
  color: white;
  text-decoration: none;
}
a{
  text-decoration: none;
}
#leftp , #midp ,#rightp{
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
}
@media only screen and (max-width: 900px) {
#btn-sp {
  background-color: white;
  font-weight: 600;
  font-size: 16px;
}
.banner{
  
margin-bottom: 40px;
}
}
</style>

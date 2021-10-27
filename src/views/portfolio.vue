<template>
  <div class="container-fluid main">
    <div class="conatiner">
      <div class="row align-items-center mx-auto">
        <div class="col-sm-4 text-end">
          <h1 class="animate__animated animate__fadeInLeft">Our Portfolio</h1>
        </div>
        <div class="col-sm-8 text-center">
          <img
            src="../assets/images/portfolioicons.png"
            class="banner img-fluid animate__animated animate__fadeInRight"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <gallery />
</template>
<script>
import gallery from "../components/portfoliogallery";
export default {
  components: { gallery },
  name: "portfolio",
};
</script>
<style scoped>
.main{
    margin-top: -10vh;
    background-color: #2E3740;
    padding-top: 10vh;
    color: white;
}
.banner{
    width: 500px;
}
</style>
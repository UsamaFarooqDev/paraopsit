<template>
  <div class="container-fluid counter">
    <div class="row">
      <div class="col-sm-12 text-center">
        <h1>Our Overview</h1>
      </div>
    </div>

   <section id="counter-stats" class="wow fadeInRight" data-wow-duration="1.4s">
	<div class="container">
		<div class="row">

			<div class="col-lg-3 col-6 stats">
				<i class="fa fa-code" aria-hidden="true"></i>
				<div class="counting" data-count="900000">0</div>
				<h5>Lines of code</h5>
			</div>

			<div class="col-lg-3 col-6 stats">
				<i class="fa fa-check" aria-hidden="true"></i>
				<div class="counting" data-count="280">0</div>
				<h5>Projects done</h5>
			</div>

			<div class="col-lg-3 col-6 stats">
				<i class="fa fa-user" aria-hidden="true"></i>
				<div class="counting" data-count="75">0</div>
				<h5>Happy clients</h5>
			</div>

			<div class="col-lg-3 col-6 stats">
				<i class="fa fa-coffee" aria-hidden="true"></i>
				<div class="counting" data-count="999">0</div>
				<h5>Cups of coffee</h5>
			</div>


		</div>
		<!-- end row -->
	</div>
	<!-- end container -->

</section>

  </div>
</template>

<script>
import $ from "jquery";

export default {
  mounted() {
  $('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  

});
  },
  name: "Counter",
};
</script>
<style scoped>


.counter {
  color: white;
  background-color: #024141bd;
  padding: 40px;
}
section#counter-stats {
	display: flex;
	justify-content: center;
	margin-top: 100px;
}
h1{
  color: #fff;
}
.stats {
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
}

.stats .fa {
  color: #fff;
  font-size: 60px;
}
</style>
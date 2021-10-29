
<template>
  <div class="container-fluid footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-3 col-12">
          <img src="../assets/images/logolight.png" width="200" alt="" />
          <br /><br />
          <p>
            We provide our services in Web Development , App Development , Graphic Design, SEO and Social Media Marketing. 
          </p>
        </div>
        <div class="col-sm-3">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="">Our Team</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-3">
          <h2>Information</h2>
          <ul>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/getquote">Get Qoute</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-3">
          <h2>Contact</h2>
          <span
            >Office# 12, First Floor Aslam Market Quaid Avenue Wah Cantt, Punjab
            Pakistan
          </span>
          <br /><br />
          <span>+92 312 574 98 28 </span> <br /><br />
          <span>info@paraopsit.com </span> <br />
        </div>
      </div>
    
     <div class="row text-center">
          <div class="offset-sm-2 col-sm-8 offset-sm-2">
            <hr>
            <h6>© Copyright 2021 www.paraopsit.com</h6>
      </div>
     </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.footer {
  background-color: #024141bd;
  padding: 50px;
  padding-bottom: 10px;
  color: white;
}
ul {
  list-style: none;
}
ul li a {
  color: white;
  text-decoration: none;
  font-weight: 600;
}
ul li a:hover {
  color: #afb1b1;
}
</style>
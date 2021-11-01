<template>
    <div class="container-fluid " id="banner">
       <div class="container main-text">
           <div class="row ">
               <div class="col-sm-12 text-center">
                   <h1>Get Quote</h1>
                   <h6>We Are Flexiable To Your Budget</h6>
               </div>
           </div>
       </div>
    </div>
    <hr>
       <div class="container form-contain">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <h1>Place Your Offer</h1>
                </div>
            </div>
            <div class="row">
                <div class="offset-sm-2 col-sm-8 offset-sm-2">
                    <form @submit.prevent="sendEmail">
                        <div class="row">
                            <div class="col-sm-6">
                                <input type="text" name="name" v-model="name" required class="form-control ipf" placeholder="Name"> 
                            </div>
                            <div class="col-sm-6">
                                <input type="email" name="email" v-model="email" required class="form-control ipf" placeholder="Email"> 
                            </div> 
                        </div>
                            <br /> <br />
                            <div class="row">
                            <div class="col-sm-6">
                                <input type="text" name="phone" v-model="phone" required class="form-control ipf" placeholder="Phone Number"> 
                            </div>
                            <div class="col-sm-6">
                               
                                <select class="form-control ipf" required name="service">
                                    <option value="Select Service">Select Service  <i class="fas fa-arrow-circle-down"></i></option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="App Development">App Development</option>
                                    <option value="Graphics Design">Graphics Design</option>
                                    <option value="Social Media Marketing">Social Media Marketing</option>
                                    <option value="SEO & Content Writting">SEO & Content Writting</option>
                                </select>
                            </div>
                        </div>
                        <br /> <br />
                        <div class="row">
                            <div class="col-sm-12">
                                <textarea name="msg" v-model="message" required placeholder="Message" class="form-control ipf" id="" cols="30" rows="5"></textarea>
                            </div>
                        </div>
                        <br /><br />
                        <div class="row">
                            <div class="col-sm-12 text-center">
                                <input type="submit" value="Submit" class="btn btn-dark ipb">
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        <hr>
</template>
<script>
import emailjs from 'emailjs-com';
export default {
     mounted () {
  window.scrollTo(0, 0)
},
    name: 'getquote',
      data() {
    return {
      name: '',
      email: '',
      phone:'',
      service: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_hcsus1k', 'template_jkxeaov', e.target,
        'user_NzjQHvajhc1V6sNxAflyP', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          service: this.service,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.phone = ''
      this.service = ''
      this.message = ''
    },
  }
}
</script>
<style scoped>
.form-contain h1{
    color: white;
}
.main-text h1{
    margin-top: 200px;
}
img{
    height: 700px;
    width: 100%;
    background-size: cover;
}
.ipf{
    background-color: transparent !important;
    color: white !important;
    margin-bottom: 15px;
    border-radius: 0px !important;
    border: none !important;
    border-bottom: 1px solid white !important;
}
select{
    color: white !important;
}
.ipf option{
    background-color: black;
}
.ipf:focus{
    box-shadow: none;
}
::placeholder{
    color: white;
}
.ipb{
    background-color: transparent;
    color: white !important;
    font-weight: 500;
    border-radius: 0px;
    padding: 10px;
    border: 2px solid white;
}
.form-contain{
      background-color: #024141bd;
    padding:20px;
}
#banner{
    height: 600px;
}
</style>
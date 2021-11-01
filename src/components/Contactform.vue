<template>
    <div class="container-fluid msg">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-12 text-center">
                    <h1>Write us a Message</h1>
                </div>
            </div>
            <div class="row text-center">
                <div class="offset-md-2 col-md-8 offset-md-2 col-12">
                    <form @submit.prevent="sendEmail">
                        <div class="row">
                            <div class="col-sm-6 col-12">
                                <input type="text" v-model="name" name="name" required class="form-control ipf" placeholder="Name"> 
                            </div>
                            <div class="col-sm-6 col-12">
                                <input type="email" v-model="email" name="email" required class="form-control ipf" placeholder="Email"> 
                            </div> 
                        </div>
                           
                            <div class="row">
                            <div class="col-sm-6 col-12">
                                <input type="text" v-model="phone" name="phone" required class="form-control ipf" placeholder="Phone Number"> 
                            </div>
                            <div class="col-sm-6 col-12">
                                <input type="text" v-model="subject" name="subject" class="form-control ipf" placeholder="Subject"> 
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-sm-12">
                                <textarea  v-model="msg" name="msg" placeholder="Message" class="form-control ipf" id="" cols="30" rows="5"></textarea>
                            </div>
                        </div>
                        <br /><br />
                        <div class="row">
                            <div class="col-sm-12 text-center">
                                <input type="submit" value="Send Message" class="btn ipb">
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
    name: 'Contact',
    data() {
    return {
      name: '',
      email: '',
      phone:'',
      subject: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_hcsus1k', 'template_c6qn1pp', e.target,
        'user_NzjQHvajhc1V6sNxAflyP', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          subject: this.subject,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.phone = ''
      this.subject = ''
      this.message = ''
    },
  }
}
</script>
<style scoped>
.msg{
    background-color: #024141bd;
padding: 20px;
    color: #fff;
    margin-bottom: 10vh;
    margin-top: 5vh;
}
h1{
    color: #fff;
}
.ipf{
    background-color: transparent !important;
    color: white;
    margin-bottom: 15px;
    border-radius: 0px !important;
    border: none !important;
    border-bottom: 1px solid white !important;
}
.ipf:focus{
    box-shadow: none;
}
::placeholder{
    color: white;
}
.ipb{
    background-color: transparent;
    color: white;
    font-weight: 500;
    border-radius: 0px;
    padding: 10px;
    border: 2px solid white;
}
form{
    background-color: transparent;
    padding: 50px;
    border-radius: 10px;
}
</style>
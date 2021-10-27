<template>
    <div class="container-fluid main">
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
                    <form action="" method="post">
                        <div class="row">
                            <div class="col-sm-6">
                                <input type="text" class="form-control ipf" placeholder="Name"> 
                            </div>
                            <div class="col-sm-6">
                                <input type="email" class="form-control ipf" placeholder="Email"> 
                            </div> 
                        </div>
                            <br /> <br />
                            <div class="row">
                            <div class="col-sm-6">
                                <input type="text" class="form-control ipf" placeholder="Phone Number"> 
                            </div>
                            <div class="col-sm-6">
                               
                                <select class="form-control" aria-placeholder="Select Service">
                                    <option value="Select Service">Select Service</option>
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
                                <textarea name="" placeholder="Message" class="form-control ipf" id="" cols="30" rows="5"></textarea>
                            </div>
                        </div>
                        <br /><br />
                        <div class="row">
                            <div class="col-sm-12 text-center">
                                <input type="submit" value="Submit" class="btn btn-dark">
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        <hr>
</template>
<script>
export default {
    name: 'getquote',
}
</script>
<style scoped>
.main{
    margin-top: -10vh;
    padding-left: 0px;
    padding-right: 0px;
    background-color: #2e3740;
    height: 500px;
    margin-bottom: 5vh;
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
.form-contain{
    background-color: #D0D9D8;
    padding:20px;
}
</style>
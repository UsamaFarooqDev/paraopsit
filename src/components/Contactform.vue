<template>
    <div class="container-fluid msg">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-12 text-center">
                    <h1>Write us a Message</h1>
                </div>
            </div>
            <div class="row text-center">
                <div class="offset-lg-2 col-sm-8 offset-lg-2 col-12">
                    <form action="" method="post">
                        <div class="row">
                            <div class="col-sm-6 col-12">
                                <input type="text" class="form-control ipf" placeholder="Name"> 
                            </div>
                            <div class="col-sm-6 col-12">
                                <input type="email" class="form-control ipf" placeholder="Email"> 
                            </div> 
                        </div>
                           
                            <div class="row">
                            <div class="col-sm-6 col-12">
                                <input type="text" class="form-control ipf" placeholder="Phone Number"> 
                            </div>
                            <div class="col-sm-6 col-12">
                                <input type="text" class="form-control ipf" placeholder="Subject"> 
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-sm-12">
                                <textarea name="" placeholder="Message" class="form-control ipf" id="" cols="30" rows="5"></textarea>
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
export default {
    name: 'Contact',
}
</script>
<style scoped>
.msg{
    background-color: #2E3740;

    color: white;
    margin-bottom: 10vh;
}
form{

}
.ipf{
    background-color: #D0D9D8 !important;
    color: black;
    margin-bottom: 15px;
}
.ipb{
    background-color: #D0D9D8;
    color: #2E3740;
    font-weight: 600;
    border-radius: 10px;
    padding: 10px;
}
</style>
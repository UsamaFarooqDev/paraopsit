<template>
    <div class="container-fluid services" >
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-6 col-12 animate__animated animate__fadeIn">
                    <h1>WE HELP YOUR BRAND
                        REACH NEW HEIGHTS.</h1>
                    <h6>We are committed to enabling your company by leveraging
                        technology that accelerates your growth.</h6>
                </div>
                <div class="col-sm-3 col-6">
                    <img src="../assets/icons/icon1.svg" class="img-fluid animate__animated animate__fadeInDown" alt="">
                </div>
                <div class="col-sm-3 col-6">
                    <img src="../assets/icons/icon2.svg" class="img-fluid animate__animated animate__fadeInRight" alt="">
                </div>
            </div>
           
            <div class="row s2">
                <div class="col-sm-3 col-6">
                    <img src="../assets/icons/icon3.svg" class="img-fluid animate__animated animate__fadeInLeft" alt="">
                </div>
                <div class="col-sm-3 col-6">
                    <img src="../assets/icons/icon4.svg" class="img-fluid animate__animated animate__fadeInUp" alt="">
                </div>
                <div class="col-sm-3 col-6">
                    <img src="../assets/icons/icon5.svg" class="img-fluid animate__animated animate__fadeInDown" alt="">
                </div>
                <div class="col-sm-3 col-6">
                    <img src="../assets/icons/icon6.svg" class="img-fluid animate__animated animate__fadeInRight" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Services',
}
</script>

<style scoped>
.services{
    padding: 40px;
    background-color: #2E3740;
    color: white;    
}
.s2{
    margin-top:20px ;
}

@media screen and (max-width: 900px) {
    .s2{
    margin-top:0px ;
}
}
</style>
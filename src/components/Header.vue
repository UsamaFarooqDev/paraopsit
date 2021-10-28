<template>

     <nav class="navbar navbar-expand-lg navbar-dark" id="nav">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="../assets/logo.svg" width="200" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                           <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                
                    <router-link to="/services">Services</router-link>
                    </li>
                    <li class="nav-item">
                         <router-link to="/portfolio">Portfolio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/">Our Team</router-link>
                    </li>
                     <li class="nav-item">
                        <router-link to="/contactus">Contact Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="btn btun" to="/getquote">Get Qoute</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
   
</template>
<script>

export default{

    name: 'Header',
}
</script>
<style scoped>
#nav{
    
    color: white;
   position: fixed;
   background: rgba(0, 0, 0, 0.5);
   top: 0;
   z-index: 200;
position: sticky;
height: 10vh;
}

#nav ul li a{
    text-decoration: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 2px;
    margin-right: 10px;
}
#nav ul li a:hover{
    color: #D0D9D8;
}
#nav .btun{
    border: 1px solid #fff;
    background-color: #fff !important;
    color: black;
}
#nav .btun:hover{
color: rgb(56, 55, 55);
}

@media only screen and (max-width: 960px) {
   #navbarNav{
     background: rgba(0, 0, 0, 0.562) !important;
    padding: 20px;
    border-radius: 12px;
    line-height: 40px;
}
  }
</style>

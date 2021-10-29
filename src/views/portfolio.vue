<template>
  
  <gallery />
</template>
<script>
import gallery from "../components/portfoliogallery";
export default {
   mounted () {
  window.scrollTo(0, 0)
},
  components: { gallery },
  name: "portfolio",
};
</script>
<style scoped>

</style>
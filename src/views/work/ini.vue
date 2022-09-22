<template>
  <div class="home container-fluid">
    <div class="row ao" style="background: #fff">
      <div class="col-4"></div>

      <div class="col-4">
        <img src="@/assets/ARBOL.png" alt="" style="width: 100%" />
      </div>

      <div class="col-4"></div>
      <div class="col-12">
        <div class="text-dark text-center mt-5">
          <h1>{{ data.user }}</h1>
          <br />
          <h5 style="font-size: 12px">{{ data.cargo }}</h5>
          <br />
          <h5 style="font-size: 10px">Sector</h5>
          <h5 style="font-size: 12px">{{ data.sector }}</h5>
        </div>
      </div>
      <div class="col-12">
        <div class="text-dark text-center mt-5">
          <h5 style="font-size: 12px"><b>Donaciones</b></h5>
          <br />
          <h5 style="font-size: 12px">{{ data.donate }}</h5>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12"></div>
    </div>
  </div>
</template>

<script>
import {db} from '@/plugins/firestore'

export default {
  name: "WORK",
  data(){
    return {
      data:[]
    }
  },

  created(){
      db.collection('worker').doc(this.$route.params.id).get().then(a => {
        this.data = a.data()
      })
    }
};
</script>

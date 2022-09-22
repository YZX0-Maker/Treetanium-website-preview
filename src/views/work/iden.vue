<template>
  <div class="container-fluid">
    <div class="row mt-5" style="background: #fff">
      <div class="col-md-5"></div>
      <div
        class="col-12 col-md-2 p-5" 
        style="border-radius: 6px; border: 1px solid #000; padding-bottom:11px!important"
      >
        <div class="row">
          <div
            class="col-6 p-1"
            style="border: 1px solid #000; border-radius: 50%; background: #000;                 width: 120px;
                height:120px;"
          >
            <img
              src="@/assets/ARBOL.png"
              alt=""
              style="
                width: 120px;
                height:120px;
                background: #fff;
                border-radius: 50%;
                border: 4px solid #fff;
              "
            />
          </div>
          <div class="col-6" style="text-align: left">
            <div style="font-size: 18px">{{ data.user }}</div>
            <br />
            <h5 style="font-size: 12px">{{ data.cargo }}</h5>
            <h5 style="font-size: 10px">Sector</h5>
            <h5 style="font-size: 12px">{{ data.sector }}</h5>
          </div>
        </div>
        <div class="row mt-3">
           <div style="font-size: 18px">{{ data.name }}</div>
          <div class="col-12 p-0"><hr style="padding-top:0!important"></div>
        </div>

        <div class="row" style="text-align: center">
          <div class="col-12 p-0"><hr style="padding-bottom:0!important"></div>
          <div class="col-12" style="background:#000; border-radius:6px 6px 0 0; color:#fff">TREETANIUM NETWORK</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/plugins/firestore";

export default {
  name: "WORK",
  data() {
    return {
      data: [],
    };
  },

  created() {
    db.collection("worker")
      .doc(this.$route.params.id)
      .get()
      .then((a) => {
        this.data = a.data();
      });
  },
};
</script>

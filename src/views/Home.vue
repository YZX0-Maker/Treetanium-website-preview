<template>
  <div class="home container-fluid">
    <div class="bg-box bg-animate"></div>
    <div class="row">
      <div class="col-2 col-md-4 col-lg-4 none-xl"></div>
      <div class="col-12 col-md-4 col-lg-4 mt-10">
        <img src="@/assets/ARBOL.png" alt="" class="img-logo"/><br />
        <div
          class="text-dark text-center margen"
        >
          <h1 style="font-family: Bahnschrift; font-size: 50px">TREETANIUM</h1>
        </div>
        <h5
          style="font-size: 16px; font-family: Bahnschrift"
          class="text-uppercase"
        >
          <b>Network</b>
        </h5>
        <h5 style="font-size: 12px">#EcologyMoney</h5>

        <router-link
          :to="`/about`"
          class=" mt-10"
          style="
            padding: 24px 48px;
            border-radius: 14px;
            -webkit-transition: 0.3s;
            transition: 0.3s;
            font-family: Gotham, sans-serif;
            color: #fff;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            background:#000
          "
          tag="button"
          >Enter to Network</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<template>
  <div class="container">
    <div class="bg-box bg-animate"></div>
    <div class="row">
      <div class="col-lg-2 col-12 col-md-1 none-xl"></div>
      <div
        class="col-md-10 col-lg-8 col-12 mt-5"
        style="background: #fff; border-radius: 6px"
      >
        <div class=""><h1>What is the treetanium ecosystem?</h1></div>
        <br />
        <div
          class=""
          style="text-align: justify; font-size: 16px; padding: 5px"
        >
          Our ecosystem is a group of applications created by treetanium
          development for the improvement & adoption of treetanium network, in
          the future it is intended to create the symbiosis protocol, which is a
          framework that allows users to use a wide range of development tools.
          agile dapps for the ecosystem
        </div>
        <div
          class=""
          style="text-align: justify; font-size: 16px; padding: 5px"
        >
          You can apply to the waiting list of Coins or NFT projects that could
          lead the way out of the ecosystem. You can sign up in the following
          form and we will contact your team soon, you can also write to our
          email business@tokenbase.live
        </div>
        <div
          class="mt-3"
          style="text-align: justify; font-size: 25px; padding: 5px"
        >
          Currently the ecosystem has the following applications
          <hr />
        </div>
        <div class="" style="text-align: justify; font-size:  padding: 5px">
          <v-data-table
            dark
            :headers="headers"
            :items="divideico"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </div>
      </div>
      <div class="col-3 none-xl"></div>
    </div>
    <div class="row">
      <div class="col-12"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Ecosistem",
  data() {
    return {
      headers: [
        {
          text: "Apps & Dapps",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Volume", value: "volume" },
        { text: "Percentage %", value: "percentage" },
        { text: "Site", value: "url" },
      ],
      divideico: [
        {
          name: "Tokenbase Exchange",
          volume: "30,000,000 TRT",
          percentage: "30%",
          url: "https://www.tokenbase.live",
        },
      ],
    };
  },
};
</script>

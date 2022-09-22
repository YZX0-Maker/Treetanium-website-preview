<template>
  <div class="container">
    <div class="bg-box bg-animate"></div>
    <div class="row">
      <div class="col-lg-2 col-12 col-md-1 none-xl"></div>
      <div
        class="col-md-10 col-lg-8 col-12 mt-5"
        style="background: #fff; border-radius: 6px; margin-bottom: 120px"
      >
        <div class=""><h1>ICO</h1></div>
        <div class="ts-20">
          <b>What is a ICO (Initial coin offering)</b>
        </div>
        <p class="mt-3">
          An initial coin offering (ICO) is the cryptocurrency industry's
          equivalent to an initial public offering (IPO). A company seeking to
          raise money to create a new coin, app, or service can launch an ICO as
          a way to raise funds. Interested investors can buy into an initial
          coin offering to receive a new cryptocurrency token issued by the
          company. This token may have some utility related to the product or
          service that the company is offering, or it may just represent a stake
          in the company or project.
        </p>
        <div class="ts-20 mt-5">
          <b>ABOUT ICO</b>
        </div>
        <br />
        <div class="" style="text-align: justify; text-size: 16px padding: 5px">
          ICOs TRT (Treetanium- coin) will run on Binance Smart Chain with BEP20
          It was created to raise funds to start the creation of the ecosystem,
          where users will be able to obtain profitability of approximately
          10.5% - 5.8% monthly return using the Tokenbase platform for staking
          or one -investment. With a strict limit of 100M TRT (No increases)
        </div>
        <div class="mt-4">
          <v-data-table
            dark
            :headers="headers"
            :items="divideico"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </div>
        <div
          class="mt-4"
          style="text-align: justify; text-size: 16px padding: 5px"
        >
          The ICO will start from March 19 at 09:00 AM, investors will be able
          to buy the TRT tokens in 6 phases on a first-come, first-served basis
          until 70,000,000 tokens are sold. As each new phase begins, the price
          will increase thus generating the initial profits for the first buyers
          of these tokens.
        </div>
        <div class="mt-5" style="font-size: 18px">
          <b>PHASE 1 - ICO PRIVATE (PRESALE PRIVATE)</b>
        </div>

        <br />
        <div class="" style="text-align: justify; text-size: 16px padding: 5px">
          The private ICO will be carried out, through the BETA version of our
          Tokenbase platform in a private way, where users will be able to
          acquire TRT by depositing currencies such as BTC, ETH, BNB, USDT, in
          addition to being able to buy them directly with Fiat money (local)
          COP, USD, BRL, EUR Investors will receive the TRT tokens on the
          Tokenbase platform and will be able to send them from their tokenbase
          wallet to their wallet automatically.
        </div>
        <div class="mt-2">
          <v-data-table
            dark
            :headers="table2"
            :items="text2"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </div>
        <div class="ts-25 mt-5">
          <b>PHASE 2 - IDO PUBLIC (PUBLIC SALE)</b>
        </div>
        <br />
        <div class="" style="text-align: justify; text-size: 16px padding: 5px">
          The public IDO will start after the completion of the private phase
          and we will continue to upload the liquidation pools so that they can
          be purchased by the general public in a more versatile way.
        </div>
        <div class="mt-2">
          <v-data-table
            dark
            :headers="table2"
            :items="text3"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </div>

        <div class="ts-25 mt-5">
          <b>PHASE 3 - RENUEVE MODEL</b>
        </div>
        <br />
        <div class="" style="text-align: justify; text-size: 16px padding: 5px">
          Every semester after the end of the ico we will use 35% of the profits
          to be able to give back to the buyer’s part of their investment, we
          will buy about 40% of the TRT and then destroy it.<br />You can
          currently use $TRT to pay any type of fee within the platforms
          associated with treetanium such as tokenbase, among other innovations,
          discounts will be obtained for the use of this
        </div>
        <div class="mt-2">
          <v-data-table
            dark
            :headers="table3"
            :items="text4"
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
  name: "ICO",
  data() {
    return {
      headers: [
        {
          text: "Participants",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Amount", value: "amount" },
        { text: "Percentage %", value: "percentage" },
      ],
      divideico: [
        {
          name: "Private ICO",
          amount: "30,000,000 TRT",
          percentage: "30%",
        },
        {
          name: "IDO Publish",
          amount: "40,000,000 TRT",
          percentage: "40%",
        },
        {
          name: "Financing Team",
          amount: "20,000,000 TRT",
          percentage: "20%",
        },
        {
          name: "Angel investors",
          amount: "10,000,000 TRT",
          percentage: "10%",
        },
      ],

      table2: [
        {
          text: "Phase",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "1 MONTH", value: "mont" },
        { text: "2 MONTH", value: "tmont" },
        { text: "3 MONTH", value: "trmont" },
      ],
      text2: [
        {
          name: "TRT (Treetanium Coin)",
          mont: "0.3 USDT",
          tmont: "0.33 USDT",
          trmont: "0.35 USDT",
        },
      ],
      text3: [
        {
          name: "TRT (Treetanium Coin)",
          mont: "0.37 USDT",
          tmont: "0.4 USDT",
          trmont: "0.42 USDT",
        },
      ],

      table3: [
        {
          text: "1 YEAR",
          align: "start",
          sortable: false,
          value: "yearone",
        },
        { text: "2 YEAR", value: "yeartwo" },
        { text: "3 YEAR", value: "yeartree" },
      ],
            text4: [
        {
          yearone: "30%",
          yeartwo: "20%",
          yeartree: "No discounts",
        },
      ],
    };
  },
};
</script>

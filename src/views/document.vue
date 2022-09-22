<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2 col-12 col-md-1 none-xl"></div>
      <div
        class="col-md-10 col-lg-8 col-12 mt-5"
        style="background: #fff; border-radius: 6px"
      >
        <div class=""><h1>Documentation</h1></div>
        <br />
        <div
          class=""
          style="text-align: justify; text-size: 16px padding: 5px"
        ></div>
        <div
          class="mt-3"
          style="text-align: justify; text-size: 16px padding: 5px"
        >
          <hr />
        </div>
        <div class="" style="text-align: justify; text-size: 16px padding: 5px">
          <div class="mb-5"><b>Treetaniun Network</b></div>

          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Document</th>
                  <th class="text-left">Version</th>
                  <th class="text-left">Url</th>
                  <th class="text-left">Direct</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in text" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.version }}</td>
                  <td>
                    <a :href="item.url">Drive</a>
                  </td>
                  <td>
                    <a :href="item.url">Download</a>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="mt-10 mb-5"><b>Tokenbase exchange</b></div>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Document</th>
                  <th class="text-left">Version</th>
                  <th class="text-left">Url</th>
                  <th class="text-left">Direct</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in text2" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.version }}</td>
                  <td>
                    <a :href="item.url">Drive</a>
                  </td>
                  <td>
                    <a :href="item.url">Download</a>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </div>
      <div class="col-2 none-xl"></div>
    </div>
    <div class="row">
      <div class="col-12"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Docs",
  data() {
    return {
      text: [
        {
          name: "Treetanium Whitepaper",
          version: "1.0",
          url: "https://drive.google.com/drive/folders/1L31RmBTi_8bsgoZmcnzGfgZ9lL2nC8lc?usp=sharing",
        },
        {
          name: "Roadmap",
          version: "1.0",
          url: "https://drive.google.com/drive/folders/1L31RmBTi_8bsgoZmcnzGfgZ9lL2nC8lc?usp=sharing",
        },
      ],
      text2: [
        {
          name: "Tokenbase Whitepaper",
          version: "1.0",
          url: "https://drive.google.com/drive/folders/1L31RmBTi_8bsgoZmcnzGfgZ9lL2nC8lc?usp=sharing",
        },
        {
          name: "Franchise",
          version: "1.0",
          url: "40%",
        },
        {
          name: "Glossary",
          version: "1.0",
          url: "20%",
        },
        {
          name: "Financing Plan",
          version: "1.0",
          url: "10%",
        },
      ],
    };
  },
};
</script>

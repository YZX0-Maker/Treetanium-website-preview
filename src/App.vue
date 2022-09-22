<template>
  <v-app style="z-index: 0">
    <div class="" style="height: 70px">
      <v-app-bar color="green" dark>
        <v-btn icon @click="drawer = true">
          <i class="fad fa-bars"></i>
        </v-btn>
        <router-link to="/" tag="button">
          <v-toolbar-title>Treetaniun Network</v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <router-link to="/about" tag="button" class="none-xl">
          <v-btn class="mr-1"> <i class="fad fa-info-circle"></i> About </v-btn>
        </router-link>
        <router-link to="/ecosystem" tag="button" class="none-xl">
          <v-btn class="mr-1"> Ecosystem </v-btn>
        </router-link>
        <router-link to="/ico" tag="button" class="none-xl">
          <v-btn class="mr-1"> ICO/IDO </v-btn>
        </router-link>
        <router-link to="/roadmap" tag="button" class="none-xl">
          <v-btn class="mr-1"> Roadmap</v-btn>
        </router-link>
        <router-link to="/document" tag="button" class="none-xl">
          <v-btn class="mr-1"> Documents </v-btn>
        </router-link>
        <router-link to="/team" tag="button" class="none-xl">
          <v-btn class="mr-1"> Team </v-btn>
        </router-link>
        <router-link to="/comunity" tag="button" class="none-xl">
          <v-btn class="mr-1"> Community </v-btn>
        </router-link>

        <v-btn icon>
          <a
            href="http://www.facebook.com/treetanium"
            target="_blank"
            tag="button"
            style="color: #fff"
          >
            <i class="fab fa-facebook"></i>
          </a>
        </v-btn>

        <v-btn icon>
          <a
            href="http://www.twitter.com/@treetanium"
            target="_blank"
            tag="button"
            style="color: #fff"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </v-btn>

        <v-btn icon>
          <a
            href="http://www.medium.com/@treetanium"
            target="_blank"
            tag="button"
            style="color: #fff"
          >
            <i class="fab fa-medium"></i>
          </a>
        </v-btn>
      </v-app-bar>
    </div>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <i class="fad fa-home"></i>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/about">
            <v-list-item>
              <v-list-item-icon>
                <i class="fad fa-info-circle"></i>
              </v-list-item-icon>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/ecosystem">
            <v-list-item>
              <v-list-item-icon>
                <i class="fad fa-info-circle"></i>
              </v-list-item-icon>
              <v-list-item-title>Ecosystem</v-list-item-title>
            </v-list-item> </router-link
          ><router-link to="/ico">
            <v-list-item>
              <v-list-item-icon>
                <i class="fad fa-info-circle"></i>
              </v-list-item-icon>
              <v-list-item-title>ICO/IDO</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/roadmap">
            <v-list-item>
              <v-list-item-icon>
                <i class="fad fa-info-circle"></i>
              </v-list-item-icon>
              <v-list-item-title>Roadmap</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/document">
            <v-list-item>
              <v-list-item-icon>
                <i class="fad fa-info-circle"></i>
              </v-list-item-icon>
              <v-list-item-title>Documents</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/comunity">
            <v-list-item>
              <v-list-item-icon>
                <i class="fad fa-info-circle"></i>
              </v-list-item-icon>
              <v-list-item-title>Community </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <router-view />
    <div
      id="nav " class="mt-15"
      style="position: absolute; bottom: 0; width: 100%; background: #fff"
    >
      <div style="font-size: 12px">Copyright Treetanium Capital S.A</div>
      <router-link style="font-size: 12px" to="/">Privacity</router-link> &
      <router-link style="font-size: 12px" to="/about">Conditions</router-link>
    </div>
  </v-app>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
};
</script>
<style>
@import "assets/css.css";
@import "assets/font-awesome/css/all.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

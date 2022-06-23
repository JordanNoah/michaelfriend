<template>
  <v-app>
    <v-app-bar app dense elevation="0">
      <v-img class="mx-2" src="@/assets/menuimg.png" max-height="60" max-width="60" contain></v-img>
      <v-spacer></v-spacer>
      <v-btn small class="mx-1" elevation="0" :color="$route.name == 'Home'?'white':''" :to="{name:'Home'}"> home </v-btn>
      <v-btn small class="mx-1" elevation="0" :color="$route.name == 'Solutions'?'white':''" :to="{name:'Solutions'}"> solutions </v-btn>
      <v-btn small class="mx-1" elevation="0" :color="$route.name == 'Services'?'white':''" :to="{name:'Services'}"> services </v-btn>
      <v-btn small class="mx-1" elevation="0" :color="$route.name == 'About'?'white':''" :to="{name:'About'}"> about </v-btn>
      <v-btn small class="mx-1" elevation="0" :color="$route.name == 'Contact'?'white':''" :to="{name:'Contact'}"> contact us </v-btn>
      <v-btn small class="mx-1" elevation="0" :color="$route.name == 'Login'?'white':''" :to="{name:'Login'}"> log-in </v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  mounted:function(){
    console.log(this.$route.name);
  }
};
</script>

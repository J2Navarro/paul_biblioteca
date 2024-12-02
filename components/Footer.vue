<template>
   <v-img
        class="mx-auto my-6"
        max-width="228"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimeSM5vYveAClc-XArjw13aAsLeZzRSG6KvN2FNwt3ZwaZUWe2JBYdjzh8HGnT93SdcFpKZ75-7ZsNencvY5LDwrmvjsid_xpdb7J1k9Tgo9xLLu8hto0YO-Uah54V4txweY-dTMtz_HYcNDul_sQGk-eZr7Rm3sVYi6rT-DUqw_EdLJveN5m21mwkG_8/w945-h600-p-k-no-nu/previewLOGO%20(1).png"
      ></v-img>
    <v-footer
      class="bg-indigo-lighten-1 text-center d-flex flex-column"
    >
      <div>
        
        <v-btn icon color="white" href="https://www.instagram.com/jorgeandr3s/profilecard/?igsh=bGh0MHoxNW1mZ2d3" variant="outlined" class="ma-2">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      
        <v-btn icon color="white" href="https://www.facebook.com/jorgeandr3s?mibextid=ZbWKwL" variant="outlined" class="ma-2">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>

        <v-btn icon color="white" href="https://youtube.com/@jorgeandr3s?si=cbH2tkRoZzt2N_LH" variant="outlined" class="ma-2">
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
      </div>
  
      <div class="pt-0">
        Universidad de Córdoba - Facultad de educación - Departamento de Informática
      </div>
  
      <v-divider></v-divider>
  
      <div>
        {{ new Date().getFullYear() }} — <strong>Jorge Andrés</strong> 
        <!--<v-btn icon color="white" href="/admin" variant="outlined" class="ma-2">
          <v-icon>mdi-account</v-icon>
        </v-btn>-->
      </div>
    </v-footer>
  </template>
  <script>
    export default {
      data: () => ({
        icons: [
          'mdi-facebook',
          'mdi-youtube',
          'mdi-instagram',
        ],
      }),
    }
  </script>

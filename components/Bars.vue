<template>
    <div>
      <v-toolbar 
        image="https://www.shutterstock.com/image-photo/old-books-on-wooden-shelf-260nw-2344630971.jpg"
        dark
        prominent
      >
        <v-toolbar-title>
          <v-img
          
          class="ma-2"
          :height="121"
          :width="121"
          aspect-ratio="16/9"
          cover
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimeSM5vYveAClc-XArjw13aAsLeZzRSG6KvN2FNwt3ZwaZUWe2JBYdjzh8HGnT93SdcFpKZ75-7ZsNencvY5LDwrmvjsid_xpdb7J1k9Tgo9xLLu8hto0YO-Uah54V4txweY-dTMtz_HYcNDul_sQGk-eZr7Rm3sVYi6rT-DUqw_EdLJveN5m21mwkG_8/w945-h600-p-k-no-nu/previewLOGO%20(1).png"
></v-img>
        </v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon color="white" variant="outlined" class="ma-2">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon color="white" variant="outlined" class="ma-2">
          <v-icon>mdi-help</v-icon>
        </v-btn>

        <v-btn color="white" variant="outlined" class="ma-2">
          Iniciar sesión
        </v-btn>

        <v-btn color="brown-darken-3" variant="flat" class="ma-2">
          Registrarme
        </v-btn>
      </v-toolbar>
    </div>
  </template>
  
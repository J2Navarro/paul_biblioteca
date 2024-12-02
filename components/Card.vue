<template>
    <v-container>
        <v-row justify="space-around">
          <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <v-card
              href="/books"
              class="mx-auto my-8"
              :class="{ 'on-hover': isHovering }"
              :elevation="isHovering ? 19 : 2"      
              max-width="500"
              max-height="500"
              v-bind="props"
            >
            
             
             <v-card-item>
         <h2 class="text-center text-h5 font-weight-black text-brown-darken-3">LIBROS</h2>
      </v-card-item>
      
            <v-row class="ma-2">
          <v-img class="ma-2" width="50" height="100" src="https://images.cdn3.buscalibre.com/fit-in/360x360/02/39/023979935156b1e48d4858e3f32f1ad9.jpg" cover></v-img>
          <v-img class="ma-2" width="50" height="100" src="https://images.cdn1.buscalibre.com/fit-in/360x360/fe/2f/fe2f418996828272f790b6f5fc3e386a.jpg" cover></v-img>
          <v-img class="ma-2" width="50" height="100" src="https://images.cdn1.buscalibre.com/fit-in/360x360/3b/4d/3b4de63880402ceb3ac08823d066afe1.jpg" cover></v-img>
          <v-img class="ma-2" width="50" height="100" src="https://images.cdn2.buscalibre.com/fit-in/360x360/91/18/9118645bef1e527a3e1f14e7187ac89e.jpg" cover></v-img>
          <v-img class="ma-2" width="50" height="100" src="https://images.cdn3.buscalibre.com/fit-in/360x360/f2/56/f2560b3e62e4bffef91b3cb73d4a622e.jpg" cover></v-img>
          <v-img class="ma-2" width="50" height="100" src="https://images.cdn1.buscalibre.com/fit-in/360x360/cd/83/cd83064665e73f29b479105109608cdd.jpg" cover></v-img>
        </v-row>
    </v-card>
  </v-hover>
  <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <v-card
              class="mx-auto my-8"
              :class="{ 'on-hover': isHovering }"
              :elevation="isHovering ? 19 : 2"      
              max-width="5000"
              max-height="5000"
              v-bind="props"
            >
      <v-card-item>
        <h2 class="text-center text-h5 font-weight-black text-brown-darken-3">ENSAYOS</h2>
      </v-card-item>
      
            <v-row class="ma-2">
          <v-img class="ma-2" width="50" height="100" src="https://books.google.es/books/content?id=VvkWGaupxW8C&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U3n_fSN7Wtg-RYF45PiDTxfQCt0sg&w=1280" cover></v-img>
          <v-img class="ma-2" width="50" height="100" src="https://books.google.es/books/content?id=VvkWGaupxW8C&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U3n_fSN7Wtg-RYF45PiDTxfQCt0sg&w=1280" cover></v-img>
          <v-img class="ma-2" width="50" height="100" src="https://books.google.es/books/content?id=VvkWGaupxW8C&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U3n_fSN7Wtg-RYF45PiDTxfQCt0sg&w=1280" cover></v-img>
          <v-img class="ma-2" width="50" height="100" src="https://books.google.es/books/content?id=VvkWGaupxW8C&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U3n_fSN7Wtg-RYF45PiDTxfQCt0sg&w=1280" cover></v-img>
          <v-img class="ma-2" width="50" height="100" src="https://books.google.es/books/content?id=VvkWGaupxW8C&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U3n_fSN7Wtg-RYF45PiDTxfQCt0sg&w=1280" cover></v-img>
          <v-img class="ma-2" width="50" height="100" src="https://books.google.es/books/content?id=VvkWGaupxW8C&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U3n_fSN7Wtg-RYF45PiDTxfQCt0sg&w=1280" cover></v-img>
        </v-row>
    </v-card>
  </v-hover>
    <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <v-card
              class="mx-auto my-8"
              :class="{ 'on-hover': isHovering }"
              :elevation="isHovering ? 19 : 2"      
              max-width="5000"
              max-height="5000"
              v-bind="props"
            >
      <v-card-item>
        <h2 class="text-center text-h5 font-weight-black text-brown-darken-3">PROYECTOS</h2>
      </v-card-item>
      
            <v-row class="ma-2">
          <v-img class="ma-2" width="50" height="100" src="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/ed8ae41eff52b18b0c62860f6f341160/thumb_300_424.png" cover></v-img>
          <v-img class="ma-2" width="50" height="100" src="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/ed8ae41eff52b18b0c62860f6f341160/thumb_300_424.png" cover></v-img>
          <v-img class="ma-2" width="50" height="100" src="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/ed8ae41eff52b18b0c62860f6f341160/thumb_300_424.png" cover></v-img>
          <v-img class="ma-2" width="50" height="100" src="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/ed8ae41eff52b18b0c62860f6f341160/thumb_300_424.png" cover></v-img>
          <v-img class="ma-2" width="50" height="100" src="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/ed8ae41eff52b18b0c62860f6f341160/thumb_300_424.png" cover></v-img>
          <v-img class="ma-2" width="50" height="100" src="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/ed8ae41eff52b18b0c62860f6f341160/thumb_300_424.png" cover></v-img>
        </v-row>
    </v-card>
  </v-hover>
</v-row>
</v-container>
  </template>

<template>
  
  <v-parallax
  src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/04/16204833/Gabriel-Garc%C3%ADa-M%C3%A1rquez-Lengua.jpg"
>
<v-container>
  <div class="d-flex flex-column fill-height justify-center align-center text-white">
  <div>
    <v-img
      class="mx-auto my-1"
      max-width="250"
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimeSM5vYveAClc-XArjw13aAsLeZzRSG6KvN2FNwt3ZwaZUWe2JBYdjzh8HGnT93SdcFpKZ75-7ZsNencvY5LDwrmvjsid_xpdb7J1k9Tgo9xLLu8hto0YO-Uah54V4txweY-dTMtz_HYcNDul_sQGk-eZr7Rm3sVYi6rT-DUqw_EdLJveN5m21mwkG_8/w945-h600-p-k-no-nu/previewLOGO%20(1).png"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="16"
      max-width="448"
      rounded="lg"
    >
      <v-text-field
        density="compact"
        placeholder="Correo electrónico"
        prepend-inner-icon="mdi-email"
        variant="outlined"
      ></v-text-field>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Contraseña"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption">
          Esto le permite iniciar sesión desde cualquier dispositivo.
        </v-card-text>
      </v-card>

      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
      >
        CONTINUAR
      </v-btn>
    </v-card>
  </div>
</div>
</v-container>
</v-parallax>

</template>
<script>
  export default {
    data: () => ({
      visible: false,
    }),
  }
</script>

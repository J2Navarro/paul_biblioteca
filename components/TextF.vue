<template>
    <v-parallax
    src="https://editorialjbernavil.com/wp-content/uploads/2024/03/wilde21465222264.jpg"
  >
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
        <div class="text-subtitle-1 text-medium-emphasis">Usuario o correo electrónico</div>
  
        <v-text-field
          density="compact"
          placeholder="Nombre de usuario o correo electrónico"
          prepend-inner-icon="mdi-account"
          variant="outlined"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Contraseña
  
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            ¿Olvidaste tu contraseña?</a>
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Ingresa tu contraseña"
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
            Advertencia: Después de 3 intentos fallidos consecutivos de inicio de sesión, su cuenta se bloqueará temporalmente durante tres horas. Si debe iniciar sesión ahora, también puede hacer clic en «¿Ha olvidado la contraseña de inicio de sesión?» a continuación para restablecer la contraseña de inicio de sesión.
          </v-card-text>
        </v-card>
  
        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
        >
          ACCESO
        </v-btn>
  
        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            REGÍSTRATE <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
</div>
  </v-parallax>
  </template>
  <script>
    export default {
      data: () => ({
        visible: false,
      }),
    }
  </script>
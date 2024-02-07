<template>
  <div class="main">
    <div v-if="success">
      <h2>Jeje ❤️ Te quiero {{ $route.params.name }}</h2>
      <img class="image" src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif">
      <h2>😎 ¡Nos vemos el 14! 😎</h2>
    </div>
    <div v-else>
      <img class="image" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp">
      <h3>Holi {{ $route.params.name }}</h3>
      <h4>¿Quieres ser mi San Valentín?</h4>
      <b-button class="button" :style="{ fontSize: size + 'px' }" variant="success" @click="pressYes">Sí</b-button>
      <b-button class="button" variant="danger" @click="pressNo">{{ phraseSelected }}</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      success: false,
      size: 16,
      noCount: 0,
      phraseSelected: "No",
      phrases: [
        "¿Estás segura?",
        "¡Piénsatelo bien!",
        "¡No te quieras arrepentir!",
        "¡Última oportunidad!",
        "Ahora sí que sí, ¡última!",
        "¡Ehhh! !Ya basta!",
        "Ultimísima.",
        "¡No hay quien te pare!"
      ]
    };
  },
  methods: {
    pressYes() {
      this.success = true;
    },
    pressNo() {
      this.size += (this.size*0.5);
      this.phraseSelected = this.phrases[this.noCount % this.phrases.length];
      this.noCount += 1;
    },
  },
};
</script>

<style scoped>

.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 100% de la altura de la ventana */
}

.button {
  margin: 20px;
  min-width: 120px;
  min-height: 50px;
}

.image {
  max-width: 400px;
}
</style>

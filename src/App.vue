<template>
  <v-app>

		<HeaderComponent/>

    <v-main>
			<router-view/>
		</v-main>

		<SnackbarComponent/>
		<DialogComponent/>
		<FooterComponent/>
  </v-app>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { Component, Vue } from "vue-property-decorator"
import {getModule} from "vuex-module-decorators";
import LangModule from "@/store/LangModule";
import SnackbarComponent from "@/components/SnackbarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import DialogComponent from "@/components/DialogComponent.vue";

@Component({ components: {DialogComponent, HelloWorld, SnackbarComponent, HeaderComponent, FooterComponent } })
export default class App extends Vue {
	lang: any = getModule(LangModule).lang

  created() {
    this.axios.get("https://jsonplaceholder.typicode.com/todos/1")
  }


}
</script>

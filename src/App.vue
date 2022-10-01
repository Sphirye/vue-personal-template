<template>
  <v-app>

		<HeaderComponent/>

    <v-main>
			<router-view/>
		</v-main>

		<SnackbarComponent/>
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

@Component({ components: { HelloWorld, SnackbarComponent, HeaderComponent, FooterComponent } })
export default class App extends Vue {
	lang: any = getModule(LangModule).lang
}
</script>

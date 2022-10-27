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
import { Component, Vue } from "vue-property-decorator"
import SnackbarComponent from "@/components/SnackbarComponent.vue"
import HeaderComponent from "@/components/HeaderComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue"
import DialogComponent from "@/components/DialogComponent.vue"

@Component({ components: { DialogComponent, SnackbarComponent, HeaderComponent, FooterComponent } })
export default class App extends Vue {

}
</script>

<template>
  <v-container>
		<v-row>
			<v-col cols="6">
				<v-form ref="form">
					<v-text-field label="Buscar..." :rules="[rules.required]"/>
					<v-btn @click="validate">
						XD
					</v-btn>
				</v-form>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import Rules from "@/service/tool/Rules"
import {getModule} from "vuex-module-decorators"
import DialogModule from "@/store/DialogModule"
import Dialog from "@/model/vue/Dialog"

@Component({ components: { HelloWorld } })
export default class Home extends Vue {

	@Ref() readonly form!: HTMLFormElement

	get rules() { return Rules }

	validate() {
		// console.log(this.form.validate())
		getModule(DialogModule).showDialog(new Dialog("Aviso", "¿Desea continuar?", () => {
			alert("XDDD")
		}))
	}

}
</script>

<template>
  <v-container>
		<v-row>
			<v-col cols="6">
				<v-text-field label="Buscar..." :rules="[rules.required]" @keydown.enter="validate"/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Rules from "@/service/tool/Rules"; // @ is an alias to /src

@Component({ components: { HelloWorld } })
export default class Home extends Vue {

	@Ref() readonly form!: HTMLFormElement

	get rules() { return Rules }

	validate() {
		console.log(this.form.validate)
	}

}
</script>

import SnackbarModule from "@/store/SnackbarModule";
import {getModule} from "vuex-module-decorators";
import {Component, Vue} from "vue-property-decorator";

@Component
export default class SnackbarMixin extends Vue {

    private get snackbarModule() { return getModule(SnackbarModule) }

    makeToast(message: string) { this.snackbarModule.makeToast(message) }

}
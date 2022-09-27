import LangModule from "@/store/LangModule";
import {getModule} from "vuex-module-decorators";

let langModule: LangModule = getModule(LangModule)

export default {
    required: (input: string) => (input ? true : langModule.lang.requiredField),
}
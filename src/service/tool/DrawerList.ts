import {getModule} from "vuex-module-decorators"
import DrawerItem from "@/model/vue/DrawerItem"
import LangModule from "@/store/LangModule"

let lang = getModule(LangModule).lang

let drawerList: DrawerItem[] = [
    { title: lang.home, to: "/", icon: "mdi-home", global: true }
]

export default drawerList
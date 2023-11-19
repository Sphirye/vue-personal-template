import {Component, Vue} from "vue-property-decorator";
import {AuthorityName} from "@/model/Authority";
import {getModule} from "vuex-module-decorators";
import SessionModule from "@/store/SessionModule";

@Component
export default class SessionMixin extends Vue {

    session = SessionTool.getSession()

}

class SessionTool {

    private static sessionModule = getModule(SessionModule)

    static hasAuthority(role: AuthorityName) {
        const authorities = this.sessionModule.session.authorities

        for (const authority of authorities) {
            if (authority.name === role) {
                return true
            }
        }

        return false
    }

    static getSession() {
        return this.sessionModule.session
    }

}
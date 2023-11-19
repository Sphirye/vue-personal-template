import { AuthorityName } from "@/model/Authority"

export default class DrawerItem {
    title?: string = undefined
    icon?: string = undefined
    subtitle?: string = undefined
    subheader?: string = undefined
    to?: string = undefined             // Route target
    global?: boolean = true            // The item will be showed for everyone by default
    allowed?: AuthorityName[] = []      // The item will be showed to these roles when global is false
    exclusions?: AuthorityName[] = []   // The item will hide for the specified roles
    divider?: boolean = false
}
import { App, Directive } from 'vue'
import GlobalComp from '@comps/Global/index'
/**
 * vue根实例附加初始化
 */
export default class VueInit {
  private instance: null | App<Element>
  constructor(instance: App<Element>) {
    this.instance = instance
  }
  public useDirects(directs: Record<string, Directive>) {
    for (const [k, v] of Object.entries(directs)) {
      this.instance!.directive(k, v)
    }
    return this
  }
  public useComps() {
    GlobalComp.forEach((comp) => {
      this.instance!.component(comp.name, comp)
    })
    return this
  }
}

/**
 * 附加初始化
 * @param app 根vue
 * @returns
 */
export function createVueInit(app: App<Element>) {
  return new VueInit(app)
}

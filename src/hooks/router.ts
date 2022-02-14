import router from '../router/index'

/**
 * 前往动漫详情
 * @param id
 * @returns
 */
export function toComicMain(
  id: number | string,
  type = 'push' as 'push' | 'replace'
) {
  return router[type]({
    name: 'ComicMain',
    params: {
      id
    }
  })
}

import { Ref, watch } from "vue"

/**
 * ## Function that returns result from query as `Promise`
 * ### example:
 * ```js
 * const {result} = useQuery(query)
 *
 * const result = await asyncResult(result)
 * ```
 */
export const asyncResult = async <T>(result: Ref<T>): Promise<T> => {
  return await new Promise((resolve) => {
    watch(
      result,
      (newResult) => {
        if (newResult) resolve(newResult)
      },
      { immediate: true }
    )
  })
}

/**
 * @param {number} n
 * @return {number[]}
 * @desc https://leetcode.cn/problems/lexicographical-numbers/
 */
export const lexicalOrder = function (n: number) {
  console.time('lexicalOrder')

  const arr = []
  for (let i = 1; i <= n; i++) {
    if (i.toString().length === 1) {
      arr.push([i])
    }
    else {
      const str = i.toString()
      const index = parseInt(str[0]) - 1
      const ca = arr[index]
      for (let idx = 0; idx < ca.length; idx++) {
        const element = ca[idx]
        const length = Math.max(str.toString().length, element.toString().length)
        const aStr = str.toString().padEnd(length, '0')
        const bStr = element.toString().padEnd(length, '0')
        if (aStr >= bStr) {
          if()
          arr[index] = arr[index].splice(idx, 0, i)
          continue
        }
      }
    }
  }
  const res = arr.flat(1)
  console.timeEnd('lexicalOrder')
  return res
}

export const lexicalOrder1 = function (n: number) {
  const arr = Array.from({ length: n }, (_, i) => i + 1)
  const res = arr.sort((a, b) => {
    const length = Math.max(a.toString().length, b.toString().length)
    const aStr = a.toString().padEnd(length, '0')
    const bStr = b.toString().padEnd(length, '0')
    if (aStr < bStr)
      return -1
    if (aStr > bStr)
      return 1
    return 0
  })
  return res
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('lexicalOrder', () => {
    expect(lexicalOrder(23489)).toMatchInlineSnapshot(`
      [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
      ]
    `)
  })
}

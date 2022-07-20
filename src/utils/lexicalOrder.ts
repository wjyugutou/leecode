/**
 * @param {number} n
 * @return {number[]}
 * @desc https://leetcode.cn/problems/lexicographical-numbers/
 */
export const lexicalOrder = function (n: number) {
  const nums = new Array(n).fill(1).map((x, y) => y + 1).sort((a, b) => {
    console.log(a, b)

    return a - b
  })
  return nums
}

export const lexicalOrder1 = function (n: number) {
  const arr = Array.from({ length: n }, (_, i) => i + 1).sort()
  return arr
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
    expect(lexicalOrder(20)).toMatchInlineSnapshot(`
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
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
      ]
    `)
  })
}

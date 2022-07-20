/**
 * @NO 395
 * @desc https://leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters/
 */

export const longestSubstring = function (s: string, k: number) {
  const obj: { [key: string]: number } = {}
  for (const i of s) {
    if (obj[i])
      obj[i]++
    else
      obj[i] = 1
  }
  const splitStr: string[] = []

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const count = obj[key]
      if (count < k)
        splitStr.push(key)
    }
  }
  if (splitStr.length === 0)
    return s.length

  const reg = new RegExp(`(${splitStr.join('|')})`)

  const arr = s.split(reg)

  let max = 0
  arr.forEach((item) => {
    if (item.length >= k)
      max = Math.max(longestSubstring(item, k), max)
  })
  return max
}

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('longestSubstring', () => {
    expect(
      longestSubstring('aaabb', 3),
    ).toMatchInlineSnapshot('3')
  })
}

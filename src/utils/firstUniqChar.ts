/**
 * @param {string} s
 * @return {number}
 * @desc https://leetcode.cn/problems/first-unique-character-in-a-string/submissions/
 */
export const firstUniqChar = function (s: string) {
  const obj: Record<string, number> = {}
  for (let i = 0; i < s.length; i++) {
    if (Object.prototype.hasOwnProperty.call(obj, s[i]))
      obj[s[i]]++

    else
      obj[s[i]] = 1
  }

  for (const i in obj) {
    if (obj[i] === 1)
      return s.indexOf(i)
  }
  return -1
}

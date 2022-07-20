/**
 *
 * @desc https://leetcode.cn/problems/is-subsequence/
 */
export function isSubsequence(s: string, t: string): boolean {
  if (s === t || s === '')
    return true

  let index = -1
  for (let i = 0; i < s.length; i++) {
    const ci = t.indexOf(s[i], index)

    if (ci < index)
      return false
    else
      index = ci === -1 ? ci : ci + 1
  }
  return index !== -1
}
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  const str1 = 'b'
  const str2 = 'c'

  it('isSubsequence', () => {
    expect(isSubsequence(str1, str2)).toMatchInlineSnapshot('false')
    expect(str2.indexOf('d', 1001)).toMatchInlineSnapshot('-1')
  })
}


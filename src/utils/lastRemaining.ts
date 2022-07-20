/**
 *
 * @desc https://leetcode.cn/problems/elimination-game/
 */

export function lastRemaining(n: number) {
  let d = 1
  let result = 1
  let len = n
  let flag = true

  while (len > 1) {
    if (flag || len % 2 !== 0)
      result = result + d
    len = Math.floor(len / 2)
    flag = !flag
    d = d * 2
  }

  return result
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('lastRemaining', () => {
    expect(lastRemaining(19)).toMatchInlineSnapshot('8')
    expect(lastRemaining(1)).toMatchInlineSnapshot('1')
    expect(lastRemaining(3)).toMatchInlineSnapshot('2')
    expect(lastRemaining(2)).toMatchInlineSnapshot('2')
    expect(lastRemaining(4)).toMatchInlineSnapshot('2')
    expect(lastRemaining(7)).toMatchInlineSnapshot('4')
    expect(lastRemaining(6)).toMatchInlineSnapshot('4')
    expect(lastRemaining(8)).toMatchInlineSnapshot('6')
    expect(lastRemaining(9)).toMatchInlineSnapshot('6')
  })
}

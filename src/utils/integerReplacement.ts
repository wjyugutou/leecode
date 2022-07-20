/**
 * @NO 397
 * @desc https://leetcode.cn/problems/integer-replacement/
 */

export const integerReplacement = function (n: number, count = 0): number {
  if (n === 1)
    return count

  if (n % 2 === 0)
    return integerReplacement(n / 2, count + 1)

  else
    return Math.min(integerReplacement(n - 1, count + 1), integerReplacement(n + 1, count + 1))
}

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('maxRotateFunction', () => {
    expect(integerReplacement(100)).toMatchInlineSnapshot('8')
  })
}

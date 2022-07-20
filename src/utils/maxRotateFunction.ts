/**
 *
 * @NO 396
 * @desc https://leetcode.cn/problems/rotate-function/
 */

export const maxRotateFunction = function (nums: number[]) {
  const n = nums.length
  let previous
  let max
  const sum = nums.reduce((a, b) => a + b, 0)
  previous = nums.reduce((a, b, i) => a + (b * i), 0)
  max = previous

  for (let i = 1; i < n; i++) {
    previous = sum + previous - n * nums[n - i]
    max = Math.max(previous, max)
  }
  return max
}

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('maxRotateFunction', () => {
    expect(maxRotateFunction([100])).toMatchInlineSnapshot('0')
  })
}

/**
 * @desc https://leetcode.cn/problems/longest-absolute-file-path/
 *
 */

export function lengthLongestPath(input: string) {
  const lvReg = /\t/g
  const arr = input.split('\n')
  const list: string[] = []
  let listLv = 0
  let max = 0
  arr.forEach((item) => {
    const it = item.replace(lvReg, '')
    const num = item.match(lvReg)?.length ?? 0
    const flag = /[a-zA-Z\d?]*\.[a-zA-Z]*/g.test(item)

    if (num <= listLv && listLv > 0) {
      while (num - listLv < 0) {
        list.pop()
        listLv--
      }
    }
    if (flag) {
      const str = (listLv === 0 || num === 0) ? it : `${list.join('/')}/${it}`
      const length = str.length
      max = Math.max(max, length)
    }
    else {
      list.push(it)
      listLv++
    }
  })

  return max
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  const str = 'a\n\tb\n\t\tc.txt\n\taaaa.txt'
  it('lengthLongestPath', () => {
    expect(lengthLongestPath(str)).toMatchInlineSnapshot('10')
  })
}

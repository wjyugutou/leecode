/**
 * @NO 394
 * @desc https://leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters/
 */

export function decodeString(str: string) {
  let repeat = 0
  let res = ''
  const numStack = []
  const strStack = []
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (!isNaN(Number(char))) { repeat = repeat * 10 + Number(char) }
    else if (char === '[') {
      numStack.push(repeat)
      strStack.push(res)
      repeat = 0
      res = ''
    }
    else if (/[a-z]/.test(char)) { res += char }
    else if (char === ']') {
      const count = numStack.pop()!
      res = res.repeat(count)
      res = strStack.pop() + res
    }
  }
  return res
}

function decodeString1(s: string) {
  if (s.length === 0)
    return ''
  let res = ''
  let repeat = 0 // 用于记录当前的数字
  const numStack = [] // 记录出现过的数字
  const strStack = [] // 记录出现过的字符
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char >= '0' && char <= '9') {
      // 如果出现两位及以上数字字符，将其转化为正确的数字
      repeat = repeat * 10 + Number(char)
    }
    else if (char === '[') {
      // 遇到[字符时，将当前的数字和字符进行保存，分别存进对应的栈内
      // 然后重新计算出现的数字和字符
      numStack.push(repeat)
      strStack.push(res)
      repeat = 0
      res = ''
    }
    else if (/[a-z]/.test(s[i])) {
      // 如果遇到的是字母字符，则更新当前的字符串
      res += char
    }
    else if (char === ']') {
      // 出现]字符时，计算满足[]条件的字符串
      // 首先取出numStack中保存的字符的出现次数
      // 然后按照出现次数对res进行累加
      const tmpTimes = numStack.pop()!
      const tmpStr = res
      for (let k = 1; k < tmpTimes; k++)
        res += tmpStr

      // 最后取出上一层[]内的字符加到res前面
      res = strStack.pop() + res
    }
  }
  return res
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('decodeString', () => {
    expect(decodeString('3[a2[c]]')).toMatchInlineSnapshot('"accaccacc"')
  })
  it('decodeString1', () => {
    expect(decodeString1('3[a2[c]]')).toMatchInlineSnapshot('"accaccacc"')
  })
}

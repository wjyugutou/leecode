/**
 * @desc https://leetcode.cn/problems/utf-8-validation/
 */

export function validUtf8(data: number[]) {
  let length = 0
  for (let i = 0; i < data.length; i++) {
    const numStr = data[i].toString(2).padStart(8, '0')
    if (numStr.substring(0, 1) === '0') { // 单字节
      if (length !== 0)
        return false
    }
    else {
      if (data.length === 1)
        return false
      if (length === 0) {
        if (numStr.substring(0, 2) === '10')
          return false
        const split = numStr.split('0')
        if (split[0].length > 4)
          return false
        length = split[0].length - 1
      }
      else {
        if (numStr.substring(0, 2) === '10') {
          length--
          if (length < 0)
            return false
        }
        else { return false }
      }
    }
  }
  return length === 0
}

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest
  const arr = [240, 162, 138, 147, 145]
  it('validUtf8', () => {
    expect(validUtf8(arr)).toMatchInlineSnapshot('false')
  })

  function toUchart(data: number | number[]) {
    if (typeof data === 'number')
      return data.toString(2).padStart(8, '0')

    return data.map(item => item.toString(2).padStart(8, '0'))
  }

  it('string', () => {
    expect(toUchart(arr)).toMatchInlineSnapshot(`
      [
        "11110000",
        "10100010",
        "10001010",
        "10010011",
        "10010001",
      ]
    `)
    expect('10010001'.split('0')).toMatchInlineSnapshot(`
      [
        "1",
        "",
        "1",
        "",
        "",
        "1",
      ]
    `)
  })
}

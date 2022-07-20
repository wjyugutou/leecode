/**
 * 先求出四个顶点的坐标.
 * 根据4个顶点的坐标可以计算出期望的面积.
 * 遍历求出所有矩形的实际面积之和, 如果期望面积和实际面积不相等,返回false, 否则进行下一步判断.
 * 求出每个矩形的顶点.
 * 如果1中求的四个顶点的坐标只出现一次且其余顶点出现2次或者4次,返回true, 否则返回false.
 * @desc https://leetcode.cn/problems/perfect-rectangle/
 */

// 0001 0010 0100 1000
// 1, 1, 3, 3
export const isRectangleCover = function (rectangles: number[][]): boolean {
  let area = 0
  let lb: any
  let rt: any
  const obj: Record<string, any> = {}
  for (let i = 0, len = rectangles.length; i < len; i++) {
    const item = rectangles[i]
    const [x1, y1, x2, y2] = item
    area += (x2 - x1) * (y2 - y1)
    lb = lb
      ? y1 <= lb[1]
        ? x1 < lb[0] ? [x1, y1] : lb
        : lb
      : [x1, y1]
    rt = rt
      ? y2 >= rt[1]
        ? x2 > rt[0] ? [x2, y2] : rt
        : rt
      : [x2, y2]

    obj[`${x1}-${y1}`] = obj[`${x1}-${y1}`] ? obj[`${x1}-${y1}`] + 1 : 1
    obj[`${x2}-${y2}`] = obj[`${x2}-${y2}`] ? obj[`${x2}-${y2}`] + 1 : 1
    obj[`${x1}-${y2}`] = obj[`${x1}-${y2}`] ? obj[`${x1}-${y2}`] + 1 : 1
    obj[`${x2}-${y1}`] = obj[`${x2}-${y1}`] ? obj[`${x2}-${y1}`] + 1 : 1
  }

  const allArea = (rt[0] - lb[0]) * (rt[1] - lb[1])
  const lt = [lb[0], rt[1]]
  const rb = [rt[0], lb[1]]

  const ltStr = `${lt[0]}-${lt[1]}`
  const lbStr = `${lb[0]}-${lb[1]}`
  const rbStr = `${rb[0]}-${rb[1]}`
  const rtStr = `${rt[0]}-${rt[1]}`

  if (allArea !== area)
    return false
  if (obj[`${lt[0]}-${lt[1]}`] !== 1 || obj[`${rb[0]}-${rb[1]}`] !== 1 || obj[`${lb[0]}-${lb[1]}`] !== 1 || obj[`${rt[0]}-${rt[1]}`] !== 1)
    return false

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const element = obj[key]
      if (key !== ltStr && key !== rbStr && key !== rtStr && key !== lbStr) {
        if (element !== 4 && element !== 2)
          return false
      }
    }
  }

  return true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _isRectangleCover = function (rectangles: number[][]): boolean {
  const keys: Record<string, any> = {}
  function a(x: number, y: number, d: number) {
    const s = `${x}-${y}`
    if (Object.hasOwnProperty.call(keys, s)) {
      if (keys[s] & d)
        return true

      keys[s] |= d
      if ([0b11, 0b110, 0b1100, 0b1001, 0b1111].includes(keys[s])) {
        // keys[s].toString(2) % 11 == 0
        delete keys[s]
      }
    }
    else {
      keys[s] = d
    }
    return false
  }

  for (let i = 0, len = rectangles.length; i < len; i++) {
    const r = rectangles[i]
    if (
      a(r[0], r[1], 0b1)
      || a(r[2], r[1], 0b10)
      || a(r[2], r[3], 0b100)
      || a(r[0], r[3], 0b1000)
    )
      return false
  }

  if (Object.keys(keys).length !== 4)
    return false

  return true
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('isRectangleCover', () => {
    expect(isRectangleCover([[1, 1, 3, 3], [3, 1, 4, 2], [3, 2, 4, 4], [1, 3, 2, 4], [2, 3, 3, 4]])).toMatchInlineSnapshot('true')
    expect(isRectangleCover([[1, 1, 2, 3], [1, 3, 2, 4], [3, 1, 4, 2], [3, 2, 4, 4]])).toMatchInlineSnapshot('false')
  })
}

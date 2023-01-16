/**
 * 改版
 * @description 根据区号校验电话格式, 提示方式改动，返回状态码及提示信息
 * @param {*} mobileZone 区号
 * @param {string} mobile 电话号码
 * @return {Boolean, String} (状态，提示信息)
 */
export const checkPhoneNumberMsg = (mobileZone: number, mobile: string) => {
  let reg = null
  let passed = true
  let msg = ''
  switch (Number(mobileZone)) {
    case 86:
      reg = /^[1][3-9]\d{9}$/
      if (!reg.test(mobile)) {
        passed = false
        msg = '請填寫正確的手機號'
      }
      break
    case 852:
      reg = /^([5|6|8|9])\d{7}$/
      if (!reg.test(mobile)) {
        passed = false
        msg = '請填寫正確的手機號'
      }
      break
    case 853:
      reg = /^[6]\d{7}$/
      if (!reg.test(mobile)) {
        passed = false
        msg = '請填寫正確的手機號'
      }
      break
  }
  return { status: passed, message: msg }
}

// 正则表达式
module.exports = {
    // 添加扩展功能
    config (obj) {
        Object.keys(obj).map(key => {
            if(this[key] === undefined) {
                this[key] = {pattern: obj[key].pattern, message: obj[key].message}
            }
        })
    },
    // 用户名: 4到16位（字母，数字，下划线，减号）
    userName: {
        pattern: /^[a-zA-Z0-9_-]{4,16}$/,
        message: '4到16位（字母，数字，下划线，减号）'
    },
    // 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    passwordStrength: {
        pattern: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,
        message: '最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'
    },
    // 手机号
    mobile: {
        pattern: /^1[34578]\d{9}$/,
        message: '手机号码格式不正确'
    },
    // 邮箱
    email: {
        pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        message: '邮箱格式不正确'
    },
    // 身份证号码
    idCard: {
        pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
        message: '身份证号码格式不正确'
    },
    // url
    url: {
        pattern: /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        message: 'url地址格式不正确'
    },
    // 日期正则（复杂判定）
    date: {
        pattern: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/,
        message: '日期格式不正确或不是有效的日期'
    },
    // qq
    qq: {
        pattern: /^[1-9][0-9]{4,10}$/,
        message: 'qq号码格式不正确'
    },
    // 微信
    weChat: {
        pattern: /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,
        message: '微信号码格式不正确'
    },
    // 车牌号码
    licensePlateNumber: {
        pattern: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
        message: '车牌号码不正确'
    },
    // 包含中文
    cn: {
        pattern: /[\u4E00-\u9FA5]/,
        message: '请输入中文'
    },
    // 十六进制颜色正则
    color: {
        pattern: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
        message: '颜色格式不正确'
    },
}
export default (app) => {
  app.validator.addRule('myPassword', (_rule, value) => {
    if (typeof value !== 'string') return '密码应为字符串'
    if (value.length < 6 || value.length > 16) return '密码的长度应在6到16位'
    return
  });
  app.validator.addRule('myDateTime', (_rule, value) => {
    var reg = /^((\d{2}(([02468][048])|([13579][26]))[\-\/\s]?((((0?[13578])|(1[02]))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]?((0?[1-9])|([1-2][0-9])))))|(\d{2}(([02468][1235679])|([13579][01345789]))[\-\/\s]?((((0?[13578])|(1[02]))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]?((0?[1-9])|(1[0-9])|(2[0-8]))))))(\s((([0-1][0-9])|(2?[0-3]))\:([0-5]?[0-9])((\s)|(\:([0-5]?[0-9])))))?$/;
    if(!reg.test(value)) return '日期错误或日期格式错误，正确格式为: 2014-01-01 12:00:00 '
    return
  });
  app.validator.addRule('myId',(_rule, value) =>{
    if (typeof value !== 'number') return 'id应为数字'
    return
  });
  app.validator.addRule('myCampus',(_rule,value)=>{
    if(typeof value!=='number') return 'campus应为数字'
    if(value !==1 && value!==2) return '校区不存在'
  })
  app.validator.addRule('myLocation',(_rule,value)=>{
    if(typeof value!=='string') return '地点应为字符串'
    if(value.length > 50) return '地点信息长度应在50字以内'
  })
};
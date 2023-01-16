export enum ResponseCode {
  SUCCESS = 0, //成功
  ERROR = 1, //一般错误
  NORMAL = 200,
  //服务错误
  SERVER_ERROR = 500, //服务器错误
  NOT_FOUND = 404, //服务/资源未找到
  QUERY_ERROR = 600, //数据处理异常
  //基础错误码 1xxx
  INVALID = 1001, //参数错误
  //权限 2XXX
  NO_LOGIN = 2001, //未登录
  NO_PERMISSION = 2002, //无权限
  //渠道错误 3XXX
  CHANNEL_NOT_FOUND = 3001, //渠道未找到
  CHANNEL_CONFIG_GET_FAIL = 3002, //渠道配置获取失败
  CHANNEL_PARAMS_FAIL = 3003, //渠道参数错误
  CHANNEL_PUSH_FAIL = 3004, //渠道推送错误
}

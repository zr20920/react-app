/**
 * 全局配置文件
 */
let baseUrl;
let imgUrl = '//cangdu.org:8001/img/'
if (process.env.NODE_ENV === 'development') {
  baseUrl = '//cangdu.org'
} else {
  baseUrl = '//cangdu.org'
}

export default {imgUrl, baseUrl}

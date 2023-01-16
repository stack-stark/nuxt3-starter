import { deviceType } from "@/utils/device";

export default defineNuxtRouteMiddleware((to, from) => {
  const deviceInfo: DeviceTypeInfo = deviceType(navigator.userAgent);
  let routes: string = to.fullPath.replace('/mobile','');
  const ishasM = to.fullPath.indexOf("mobile") != -1;
  const params = to.query
  
  // console.log('当前路由是否为移动端'+ishasM);
  if(process.client){ // 客户端←这个判断贼重要
    if (deviceInfo.type === "pc") {//设备为pc
      if(ishasM){//当前路由为移动端路由
        // console.log('设备：pc；路由：移动端；跳转：pc');
        // console.log('跳转至：'+routes);
         return navigateTo({path:routes, query: params});
      }else{
        // console.log('设备：pc；路由：pc；跳转：pc');
        // console.log('不用跳转');
        return
      }
    }else{//当前为移动端
      if(ishasM){
        // console.log('设备：手机；路由：移动端；跳转：移动端');
        // console.log('不用跳转');
        return
      }else{
        // console.log('设备：手机；路由：pc；跳转：手机');
        // console.log('跳转至：'+"/mobile"+routes);
        return navigateTo({path: "/mobile"+ routes, query: params});
      }
    }
  }
});
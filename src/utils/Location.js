/* eslint-disable */
export const location =  {
  initMap(id){
    let mapObj = new AMap.Map(id, {})
    let geolocation;
    mapObj.plugin(['AMap.Geolocation'], function () {
        geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, 
        timeout: 10000, //  超过10秒后停止定位，默认：无穷大
        maximumAge: 0, 
        convert: true, 
        showButton: true, 
        buttonPosition: 'LB',  
        buttonOffset: new AMap.Pixel(10, 20), 
        showMarker: true, 
        showCircle: true, 
        panToLocation: true,  
        zoomToAccuracy: true  
      })
      mapObj.addControl(geolocation)
      geolocation.getCurrentPosition()
    })
    return geolocation;
  }
}
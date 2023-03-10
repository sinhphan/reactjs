
// side Effects

/**
 *  @event add and remove eventListeners
 *  @Obsever patterns: Subscribe and unsubscribe 
 *  @Clousure
 *  @Timer : setInterval, setTimeout, clearInterval and clearTimeout
 *  @useState
 *  @mounted and unmounted
 *  @Call Api
 */


/**
 **     useEffect(callback)
 *!         gọi callback mỗi khi commponent render
 **     useEffect(callback, [])
 *!         Chỉ gọi callback 1 lần mỗi khi component được mount
 **     useEffect(callback, [deps])
 *!         callback sẽ được gọi lại mỗi khi deps thay đổi
 */
 

/** 
*   1. callBack luôn được gọi sau khi component mounted
*   2. clean up function luôn được gọi trước khi component unmounted
*   3. Clean up function luôn được gọi trước khi callback được gọi.(trừ lần được mounted)
*/
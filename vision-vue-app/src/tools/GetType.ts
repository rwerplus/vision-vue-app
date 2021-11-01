/**
 * According to the incoming data, return the given type.
 * Divided into types that can continue to be traversed and Types that cannot be traversed
 *
 * @param {*} target
 * @return {*}
 */
function getType(target: any): string {
    return Object.prototype.toString.call(target);
}
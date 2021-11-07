const forEach = (array: any, callBackIterate:any) => {
    let index = -1;
    const len = array.length;
    if (++index < len) {
        callBackIterate(array[index],index);
    }
    return array;
}
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} target
 * @param {Array<Object>} map
 * @return {*}
 */
function UseToClone(target: any, map: any = new WeakMap()) {
    if (typeof target === 'object') {
        const isArray = Array.isArray(target)
        let cloneTarget: any = isArray ? [] : {};

        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, cloneTarget);

        const keys = isArray ? undefined : Object.keys(target);
        forEach(keys || target,(value: any,key: any) => {
            if (keys) {
                key = value
            }
            cloneTarget[key] = UseToClone(target[key], map);
        })
        return cloneTarget;
    }
    return target;
}

const target: any = {
    field1: 1,
    field2: undefined,
    field3: 'ConardLi',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2',
            child23: [1, 2, 3]
        }
    },
    target: null,
    f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {}}}}}}}}}}}},
    f1: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {}}}}}}}}}}}},
    f11: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {}}}}}}}}}}}},
    f111: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {}}}}}}}}}}}},
    f2: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {}}}}}}}}}}}},
    f3: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {}}}}}}}}}}}},
    f4: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {f: {}}}}}}}}}}}},
};
target.target = target;
target.field1 = 999999
/*default: 0.183ms
default: 0.034ms*/

// console.time();
// const result = UseToClone(target);
// console.timeEnd();

console.time();
const result2 = UseToClone(target);
console.timeEnd();

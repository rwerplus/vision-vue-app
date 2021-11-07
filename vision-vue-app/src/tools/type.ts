/*
* Divided into types that can continue to be traversed
* Types that cannot be traversed
* */

enum ObjectType {
    '[object Map]' = '[object Map]',
    '[object Array]' = '[object Array]',
    '[object Object]' = '[object Object]',
    '[object Boolean]' = '[object Boolean]',
    '[object Date]' = '[object Date]',
    '[object Error]' = '[object Error]',
    '[object Number]' = '[object Number]',
    '[object RegExp]' = '[object RegExp]',
    '[object String]' = '[object String]',
    '[object Symbol]' = '[object Symbol]'
}
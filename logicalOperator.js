// && Operator

/**
 *                      && operator
 *
 *          A           B           result
 *          true        true        true
 *          true        false       false
 *          false       true        false
 *          false       false       false
 */

/**
 *                      || operator
 *
 *          A           B           result
 *          true        true        true
 *          true        false       true
 *          false       true        true
 *          false       false       false
 */

const a = 20
const b = 30
const c = 40
const d = 30

if (a < b && c < d && d < a) {
    console.log("condition is true in All logic and returns true for && operator")
} else if (a > b || c > d || d > a) {
    console.log("condition is false in multiple logic but true in at least one logic and returns true for || operator")
}else{
    console.log("Condition is in COMA")
}

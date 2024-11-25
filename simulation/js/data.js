// trapazium ----------------------------------------------------------------
// activity 1 -----------------------------------------------------------------
let tb_data = [];
let I_val = 0;
let X = [1, 2, 2.5, 3, 3.25, 3.5, 3.75];
let Y = [];
function load_y_arr() {
    for (let i = 0; i < 7; i++) {
        Y.push(parseFloat((Math.random() * 20 + 5).toFixed(1)));
    }
}
load_y_arr();
console.log(`x => `, X);
console.log(`y => `, Y);
let a1_integration = 0;
let a1_I_vals = [];
let a1_I = 0;
let h1x = 0;
let h2x = 0;
let h3x = 0;
// Activity 2 ----------------------------------------------------------------------
let tb2_data = [];
let I2_val = 0;
let X2 = [1, 2, 2.5, 3, 3.5, 3.75, 4.0];
let Y2 = [];
function load_y2_arr() {
    for (let i = 0; i < 7; i++) {
        Y2.push(parseFloat((Math.random() * 20 + 5).toFixed(1)));
    }
}
load_y2_arr();
console.log(`x2 => `, X2);
console.log(`y2 => `, Y2);
let a2_integration = 0;
let a2_I_vals = [];
let a2_I = 0;
let a2h1x = 0;
let a2h2x = 0;
let a2h3x = 0;
// Activity 3 ------------------------------------------------
let tb3_data = [];
let I3_val = 0;
let X3 = [1, 2, 3, 4, 4.25, 4.75, 5.25];
let Y3 = [];
function load_y3_arr() {
    for (let i = 0; i < 7; i++) {
        Y3.push(parseFloat((Math.random() * 20 + 5).toFixed(1)));
    }
}
load_y3_arr();
console.log(`x2 => `, X2);
console.log(`y2 => `, Y2);
let a3_integration = 0;
let a3_I_vals = [];
let a3_I = 0;
let a3h1x = 0;
let a3h2x = 0;
let a3h3x = 0;
//# sourceMappingURL=data.js.map
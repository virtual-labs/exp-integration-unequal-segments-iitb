let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Integration with unequal segments</h5>
        <p>Activity 1 Learning Objective: Select the appropriate integration method for high order accuracy.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate y values", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <div id='x-y-table'></div>
        <br>

        <h5>Observe carefully the values of X and find out the value of h beside the suitable integration method to achieve the high order accuracy</h5> <br>

        <div style='text-align: center;'><span style='display: inline-block;' >$$ I_1 \\ = \\ \\frac{h_{x1}}{2}(y_1 + y_2) \\ \\ $$</span> (Trapazoidal rule)</div>
        <div style='text-align: center;'><span style='display: inline-block;'>$$ h_{x1} \\ = \\ {x_2 - x_1} \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='h1-inp' > <span id='dsp-h1'></span></div>

        <br>


        <div style='text-align: center;'><span style='display: inline-block;'>$$ I_2 \\ = \\ \\frac{h_{x2}}{3}(y_2 + 4y_3 + y_4) \\ \\ $$</span>  (Simpsons's 1/3rd) </div>
        <div style='text-align: center;'><span style='display: inline-block;' >$$ h_{x2} \\ = \\ {x_3 - x_2} \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='h2-inp' > <span id='dsp-h2'></span></div>

        <br>

        <div style='text-align: center;'><span style='display: inline-block;'>$$ I_3 \\ = \\ \\frac{3*h_{x3}}{8}(y_4 + 3y_5 + 3y_6 + y_7) \\ \\ $$</span> (Simpsons's 3/8th)</div>
        <div style='text-align: center;'><span style='display: inline-block;' >$$ h_{x3} \\ = \\ {x_5 - x_4} \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='h3-inp' > <span id='dsp-h3'></span></div>

        <br>

        <p style='text-align: center;'>Calculate <span style='display: inline-block;'>$$ I_1, \\ I_2, \\ I_3 $$</span></p>

        <div style='text-align: center;'><span style='display: inline-block;' >$$ I_1 \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='i1-inp' > <span id='dsp-i1'></span></div>

        <div style='text-align: center;'><span style='display: inline-block;' >$$ I_2 \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='i2-inp' > <span id='dsp-i2'></span></div>

        <div style='text-align: center;'><span style='display: inline-block;' >$$ I_3 \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='i3-inp' > <span id='dsp-i3'></span></div>

        <br><br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_h();'  id='temp-btn-13' >Next</button></div>

        <br><br>

        <div id='final-I' style='display: none;' >
            <div style='text-align: center;'><span>$$ I = I_1 + I_2 + I_3 $$</span></div>
        
            <div id='bs-inp-div' style='text-align: center;'><span style='font-size: 30px;'>I</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='a1-i-inp' > <span id='a1-i-val-sp'></span></div>
            <br>
            <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a1_I();'  id='temp-btn-14' >Next</button></div>
        </div>
    </div>
       
    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
    show_x_y_table();
    inner_calculation();
    calculate_h();
}
function calculate_h() {
    h1x = X[1] - X[0];
    h2x = X[2] - X[1];
    h3x = X[4] - X[3];
}
function verify_h() {
    let btn = document.getElementById('temp-btn-13');
    let div1 = document.getElementById('final-I');
    let inp1 = document.getElementById('h1-inp');
    let sp1 = document.getElementById('dsp-h1');
    let inp2 = document.getElementById('h2-inp');
    let sp2 = document.getElementById('dsp-h2');
    let inp3 = document.getElementById('h3-inp');
    let sp3 = document.getElementById('dsp-h3');
    let inp4 = document.getElementById('i1-inp');
    let sp4 = document.getElementById('dsp-i1');
    let inp5 = document.getElementById('i2-inp');
    let sp5 = document.getElementById('dsp-i2');
    let inp6 = document.getElementById('i3-inp');
    let sp6 = document.getElementById('dsp-i3');
    console.log(`h1, h2 and h3 =>`, h1x, h2x, h3x);
    console.log(`I1, I2 and I3 =>`, a1_I_vals);
    if (!verify_values(parseFloat(inp1.value), h1x)) {
        alert('h1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), h2x)) {
        alert('h2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), h3x)) {
        alert('h3 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp4.value), a1_I_vals[0])) {
        alert('I1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp5.value), a1_I_vals[1])) {
        alert('I2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp6.value), a1_I_vals[2])) {
        alert('I3 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${h1x.toFixed(3)}`;
    inp2.remove();
    sp2.innerText = `${h2x.toFixed(3)}`;
    inp3.remove();
    sp3.innerText = `${h3x.toFixed(3)}`;
    inp4.remove();
    sp4.innerText = `${a1_I_vals[0].toFixed(3)}`;
    inp5.remove();
    sp5.innerText = `${a1_I_vals[1].toFixed(3)}`;
    inp6.remove();
    sp6.innerText = `${a1_I_vals[2].toFixed(3)}`;
    div1.style.display = 'block';
}
function show_x_y_table() {
    let parent = document.getElementById('x-y-table');
    tb_data = [];
    let header = ['X', '1', '2', '2.5', '3', '3.25', '3.5', '3.75'];
    tb_data.push(['Y']);
    for (let i = 0; i < Y.length; i++) {
        tb_data[0].push(`${Y[i]}`);
    }
    let tb = new Display_Table(header, tb_data, parent);
    tb.load_table();
}
function inner_calculation() {
    a1_I_vals.push(trap([X[0], X[1]], [Y[0], Y[1]]));
    a1_I_vals.push(sim1by3([X[1], X[2], X[3]], [Y[1], Y[2], Y[3]]));
    a1_I_vals.push(sim3by8([X[3], X[4], X[5], X[6]], [Y[3], Y[4], Y[5], Y[6]]));
    a1_I = a1_I_vals[0] + a1_I_vals[1] + a1_I_vals[2];
    console.log(`a1 all integration vlaues => `, a1_I_vals);
    console.log(`a1 integration sum=> `, a1_I);
}
function verify_a1_I() {
    let btn = document.getElementById('temp-btn-14');
    console.log(`I => ${a1_I}`);
    let inp = document.getElementById('a1-i-inp');
    let sp = document.getElementById('a1-i-val-sp');
    if (!verify_values(parseFloat(inp.value), a1_I)) {
        alert('I value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${a1_I.toFixed(4)}`;
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map
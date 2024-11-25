function activity2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Activity 2 Learning Objective: Select the appropriate integration method for high order accuracy.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate y values", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <div id='x-y-table-2'></div>
        <br>

        <h5>Observe carefully the values of X and find out the value of h beside the suitable integration method to achieve the high order accuracy</h5> <br>

        <div style='text-align: center;'><span style='display: inline-block;' >$$ I_1 \\ = \\ \\frac{h_{x1}}{2}(y_1 + y_2) \\ \\ $$</span> (Trapazoidal rule)</div>
        <div style='text-align: center;'><span style='display: inline-block;'>$$ h_{x1} \\ = \\ {x_2 - x_1} \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='a2h1-inp' > <span id='dsp-a2h1'></span></div>

        <br>


        <div style='text-align: center;'><span style='display: inline-block;'>$$ I_3 \\ = \\ \\frac{3*h_{x2}}{8}(y_2 + 3y_3 + 3y_3 + y_4) \\ \\ $$</span> (Simpsons's 3/8th)</div>
        <div style='text-align: center;'><span style='display: inline-block;' >$$ h_{x2} \\ = \\ {x_3 - x_2} \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='a2h3-inp' > <span id='dsp-a2h3'></span></div>

        <br>

        <div style='text-align: center;'><span style='display: inline-block;'>$$ I_2 \\ = \\ \\frac{h_{x3}}{3}(y_4 + 4y_5 + y_6) \\ \\ $$</span>  (Simpsons's 1/3rd) </div>
        <div style='text-align: center;'><span style='display: inline-block;' >$$ h_{x3} \\ = \\ {x_6 - x_5} \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='a2h2-inp' > <span id='dsp-a2h2'></span></div>

        <br>

        <p style='text-align: center;'>Calculate <span style='display: inline-block;'>$$ I_1, \\ I_2, \\ I_3 $$</span></p>

        <div style='text-align: center;'><span style='display: inline-block;' >$$ I_1 \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='a2i1-inp' > <span id='dsp-a2i1'></span></div>

        <div style='text-align: center;'><span style='display: inline-block;' >$$ I_2 \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='a2i2-inp' > <span id='dsp-a2i2'></span></div>

        <div style='text-align: center;'><span style='display: inline-block;' >$$ I_3 \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='a2i3-inp' > <span id='dsp-a2i3'></span></div>

        <br><br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_h2();'  id='temp-btn-15' >Next</button></div>

        <br><br>

        <div id='final-I-2' style='display: none;' >
            <div style='text-align: center;'><span>$$ I = I_1 + I_2 + I_3 $$</span></div>
        
            <div style='text-align: center;'><span style='font-size: 30px;'>I</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='a2-i-inp' > <span id='a2-i-val-sp'></span></div>
            <br>
            <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a1_I2();'  id='temp-btn-16' >Next</button></div>
        </div>
    </div>
       
    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb2-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
    show_x_y_table2();
    inner_calculation2();
    calculate_h2();
}
function calculate_h2() {
    a2h1x = X2[1] - X2[0];
    a2h2x = X2[5] - X2[4];
    a2h3x = X2[2] - X2[1];
}
function verify_h2() {
    let btn = document.getElementById('temp-btn-15');
    let div1 = document.getElementById('final-I-2');
    let inp1 = document.getElementById('a2h1-inp');
    let sp1 = document.getElementById('dsp-a2h1');
    let inp2 = document.getElementById('a2h2-inp');
    let sp2 = document.getElementById('dsp-a2h2');
    let inp3 = document.getElementById('a2h3-inp');
    let sp3 = document.getElementById('dsp-a2h3');
    let inp4 = document.getElementById('a2i1-inp');
    let sp4 = document.getElementById('dsp-a2i1');
    let inp5 = document.getElementById('a2i2-inp');
    let sp5 = document.getElementById('dsp-a2i2');
    let inp6 = document.getElementById('a2i3-inp');
    let sp6 = document.getElementById('dsp-a2i3');
    console.log(`h1, h2 and h3 =>`, a2h1x, a2h3x, a2h2x);
    console.log(`I1, I2 and I3 =>`, a2_I_vals);
    if (!verify_values(parseFloat(inp1.value), a2h1x)) {
        alert('h1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a2h2x)) {
        alert('h2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), a2h3x)) {
        alert('h3 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp4.value), a2_I_vals[0])) {
        alert('I1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp5.value), a2_I_vals[1])) {
        alert('I2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp6.value), a2_I_vals[2])) {
        alert('I3 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${a2h1x.toFixed(3)}`;
    inp2.remove();
    sp2.innerText = `${a2h2x.toFixed(3)}`;
    inp3.remove();
    sp3.innerText = `${a2h3x.toFixed(3)}`;
    inp4.remove();
    sp4.innerText = `${a2_I_vals[0].toFixed(3)}`;
    inp5.remove();
    sp5.innerText = `${a2_I_vals[1].toFixed(3)}`;
    inp6.remove();
    sp6.innerText = `${a2_I_vals[2].toFixed(3)}`;
    div1.style.display = 'block';
}
function show_x_y_table2() {
    let parent = document.getElementById('x-y-table-2');
    tb2_data = [];
    let header = ['X', '1', '2', '2.5', '3', '3.5', '3.75', '4.0'];
    tb2_data.push(['Y']);
    for (let i = 0; i < Y2.length; i++) {
        tb2_data[0].push(`${Y2[i]}`);
    }
    let tb2 = new Display_Table(header, tb2_data, parent);
    tb2.load_table();
}
function inner_calculation2() {
    a2_I_vals.push(trap([X2[0], X2[1]], [Y2[0], Y2[1]]));
    console.log(`x values => ` + X2[0], X2[1]);
    console.log(`y values => ` + Y2[0], Y2[1]);
    a2_I_vals.push(sim1by3([X2[4], X2[5], X2[6]], [Y2[4], Y2[5], Y2[6]]));
    a2_I_vals.push(sim3by8([X2[1], X2[2], X2[3], X2[4]], [Y2[1], Y2[2], Y2[3], Y2[4]]));
    a2_I = a2_I_vals[0] + a2_I_vals[1] + a2_I_vals[2];
    console.log(`a1 all integration vlaues => `, a2_I_vals);
    console.log(`a1 integration sum=> `, a2_I);
}
function verify_a1_I2() {
    let btn = document.getElementById('temp-btn-16');
    console.log(`I => ${a2_I}`);
    let inp = document.getElementById('a2-i-inp');
    let sp = document.getElementById('a2-i-val-sp');
    if (!verify_values(parseFloat(inp.value), a2_I)) {
        alert('I value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${a2_I.toFixed(4)}`;
    activity3();
}
activity1();
//# sourceMappingURL=activity2.js.map
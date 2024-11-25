function activity3() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Activity 3 Learning Objective: Select the appropriate integration method for high order accuracy.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate y values", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

        <div id='x-y-table-3'></div>
        <br>

        <h5>Observe carefully the values of X and find out the value of h beside the suitable integration method to achieve the high order accuracy</h5> <br>


        <div style='text-align: center;'><span style='display: inline-block;'>$$ I_1 \\ = \\ \\frac{3*h_{x1}}{8}(y_1 + 3y_2 + 3y_3 + y_4) \\ \\ $$</span> (Simpsons's 3/8th)</div>
        <div style='text-align: center;'><span style='display: inline-block;' >$$ h_{x1} \\ = \\ {x_2 - x_1} \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='a3h3-inp' > <span id='dsp-a3h3'></span></div>

        <br>


        <div style='text-align: center;'><span style='display: inline-block;' >$$ I_2 \\ = \\ \\frac{h_{x2}}{2}(y_4 + y_5) \\ \\ $$</span> (Trapazoidal rule)</div>
        <div style='text-align: center;'><span style='display: inline-block;'>$$ h_{x2} \\ = \\ {x_5 - x_4} \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='a3h1-inp' > <span id='dsp-a3h1'></span></div>

        <br>

        <div style='text-align: center;'><span style='display: inline-block;'>$$ I_3 \\ = \\ \\frac{h_{x3}}{3}(y_5 + 4y_6 + y_7) \\ \\ $$</span>  (Simpsons's 1/3rd) </div>
        <div style='text-align: center;'><span style='display: inline-block;' >$$ h_{x3} \\ = \\ {x_6 - x_5} \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='a3h2-inp' > <span id='dsp-a3h2'></span></div>

        <br>

        <p style='text-align: center;'>Calculate <span style='display: inline-block;'>$$ I_1, \\ I_2, \\ I_3 $$</span></p>

        <div style='text-align: center;'><span style='display: inline-block;' >$$ I_1 \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='a3i1-inp' > <span id='dsp-a3i1'></span></div>

        <div style='text-align: center;'><span style='display: inline-block;' >$$ I_2 \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='a3i2-inp' > <span id='dsp-a3i2'></span></div>

        <div style='text-align: center;'><span style='display: inline-block;' >$$ I_3 \\ $$</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='a3i3-inp' > <span id='dsp-a3i3'></span></div>


        <br><br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_h3();'  id='temp-btn-17' >Next</button></div>

        <br><br>

        <div id='final-I-3' style='display: none;' >
            <div style='text-align: center;'><span>$$ I = I_1 + I_2 + I_3 $$</span></div>
        
            <div style='text-align: center;'><span style='font-size: 30px;'>I</span> = <input type='number' class='form-control' style='display: inline-block !important; width: 120px;' id='a3-i-inp' > <span id='a3-i-val-sp'></span></div>
            <br>
            <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a1_I3();'  id='temp-btn-18' >Next</button></div>
        </div>
    </div>
       
    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb3-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
    show_x_y_table3();
    inner_calculation3();
    calculate_h3();
}
function calculate_h3() {
    a3h1x = X3[4] - X3[3];
    a3h2x = X3[5] - X3[4];
    a3h3x = X3[1] - X3[0];
}
function verify_h3() {
    let btn = document.getElementById('temp-btn-17');
    let div1 = document.getElementById('final-I-3');
    let inp1 = document.getElementById('a3h1-inp');
    let sp1 = document.getElementById('dsp-a3h1');
    let inp2 = document.getElementById('a3h2-inp');
    let sp2 = document.getElementById('dsp-a3h2');
    let inp3 = document.getElementById('a3h3-inp');
    let sp3 = document.getElementById('dsp-a3h3');
    let inp4 = document.getElementById('a3i1-inp');
    let sp4 = document.getElementById('dsp-a3i1');
    let inp5 = document.getElementById('a3i2-inp');
    let sp5 = document.getElementById('dsp-a3i2');
    let inp6 = document.getElementById('a3i3-inp');
    let sp6 = document.getElementById('dsp-a3i3');
    console.log(`h1, h2 and h3 =>`, a3h3x, a3h1x, a3h2x);
    console.log(`I1, I2 and I3 =>`, a3_I_vals);
    if (!verify_values(parseFloat(inp1.value), a3h1x)) {
        alert('h1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a3h2x)) {
        alert('h2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), a3h3x)) {
        alert('h3 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp4.value), a3_I_vals[0])) {
        alert('I1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp5.value), a3_I_vals[1])) {
        alert('I2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp6.value), a3_I_vals[2])) {
        alert('I3 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${a3h1x.toFixed(3)}`;
    inp2.remove();
    sp2.innerText = `${a3h2x.toFixed(3)}`;
    inp3.remove();
    sp3.innerText = `${a3h3x.toFixed(3)}`;
    inp4.remove();
    sp4.innerText = `${a3_I_vals[0].toFixed(3)}`;
    inp5.remove();
    sp5.innerText = `${a3_I_vals[1].toFixed(3)}`;
    inp6.remove();
    sp6.innerText = `${a3_I_vals[2].toFixed(3)}`;
    div1.style.display = 'block';
}
function show_x_y_table3() {
    let parent = document.getElementById('x-y-table-3');
    tb3_data = [];
    let header = ['X', '1', '2', '3', '4', '4.25', '4.75', '5.25'];
    tb3_data.push(['Y']);
    for (let i = 0; i < Y3.length; i++) {
        tb3_data[0].push(`${Y3[i]}`);
    }
    let tb3 = new Display_Table(header, tb3_data, parent);
    tb3.load_table();
}
function inner_calculation3() {
    a3_I_vals.push(trap([X3[3], X3[4]], [Y3[3], Y3[4]]));
    a3_I_vals.push(sim1by3([X3[4], X3[5], X3[6]], [Y3[4], Y3[5], Y3[6]]));
    a3_I_vals.push(sim3by8([X3[0], X3[1], X3[2], X3[3]], [Y3[0], Y3[1], Y3[2], Y3[3]]));
    a3_I = a3_I_vals[0] + a3_I_vals[1] + a3_I_vals[2];
    console.log(`a1 all integration vlaues => `, a3_I_vals);
    console.log(`a1 integration sum=> `, a3_I);
}
function verify_a1_I3() {
    let btn = document.getElementById('temp-btn-18');
    console.log(`I => ${a3_I}`);
    let inp = document.getElementById('a3-i-inp');
    let sp = document.getElementById('a3-i-val-sp');
    if (!verify_values(parseFloat(inp.value), a3_I)) {
        alert('I value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${a3_I.toFixed(4)}`;
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity3.js.map
import React from 'react'
import "../style.css"

const Calculator = () => {
    const nums = document.querySelectorAll(".num");
const typed = document.querySelector(".type");
const result = document.querySelector(".result");

let val = "0";

nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    typed.classList.remove("active");
    let char = e.target.innerText;
    if (val === "0" && !char.match(/[*+/.-]/gi)) {
      val = char;
    } else {
      val += char;
    }

    if (val.match(/[0-9]+[+-\/*][+-\/*]+/gi)) {
      const operator = val[val.length - 1];
      val = val.substring(0, val.length - 2) + operator;
    }

    typed.innerText = val.replace(/\*/g, "×").replace(/\//g, "÷");
    if (!val.match(/[0-9]+[+-\/*]$/gi)) {
      try {
        result.innerText = eval(val);
      } catch (error) {
        invalidExpression();
      }
    }
  });
});

document.querySelector(".itemAC").addEventListener("click", () => {
  typed.classList.remove("active");
  typed.innerText = "0";
  result.innerText = "";
  val = "0";
});

document.querySelector(".item-del").addEventListener("click", () => {
  typed.classList.remove("active");
  val = val.substring(0, val.length - 1);
  if (val) {
    typed.innerText = val;
    if (!val.match(/[0-9]+[+-\/*]$/gi)) {
      try {
        result.innerText = eval(val);
      } catch (error) {
        invalidExpression();
      }
    } else {
      result.innerText = "";
    }
  } else {
    typed.innerText = "0";
    result.innerText = "";
  }
});

document.querySelector(".item-eq").addEventListener("click", () => {
  try {
    val = eval(val).toString();
    typed.classList.add("active");
    typed.innerText = val;
    result.innerText = "";
  } catch (error) {
    invalidExpression();
  }
});

function invalidExpression() {
  typed.innerText = "0";
  result.innerText = "Invalid Expression";
  val = "0";
}

  return (
    <div>
        <section id="main">
      <div id="calculator">
        <div id="display">
          <span class="result"></span>
          <span class="type">0</span>
        </div>
        <div class="cal-pad">
          <div class="row-con">
            <div class="itemAC dark" title="Clear All">AC</div>
            <div class="item-del dark" title="Del">&#8882;</div>
            <div class="item/ dark num">/</div>
            <div class="itemX dark num">*</div>
            <div class="item7 num">7</div>
            <div class="item8 num">8</div>
            <div class="item9 num">9</div>
            <div class="item- dark num">-</div>
            <div class="item4 num">4</div>
            <div class="item5 num">5</div>
            <div class="item6 num">6</div>
            <div class="item+ dark num">+</div>
            <div class="item1 num">1</div>
            <div class="item2 num">2</div>
            <div class="item3 num">3</div>
            <div class="item0 num">00</div>
            <div class="item0 num">0</div>
            <div class="item-dot num">.</div>
            <div class="item-eq">=</div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Calculator
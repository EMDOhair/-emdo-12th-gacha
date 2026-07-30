// ==========================

// EMDO 12th Anniversary

// script.js

// ==========================

function startGacha() {

    const capsule = document.getElementById("capsule");

    const message = document.getElementById("message");

    const button = document.querySelector("button");

    // ボタン連打防止

    button.disabled = true;

    message.innerHTML = "";

    capsule.innerHTML = "🎁";

    // 揺らす

    capsule.classList.add("spin");

    setTimeout(() => {

        capsule.classList.remove("spin");

        // 今はテストなので固定

        // 次回ここを本物の抽選にする

        message.innerHTML = "🎉 抽選中... 🎉";

        button.disabled = false;

    },2500);

}

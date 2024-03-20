window.addEventListener("load", function () {

    let main = document.getElementById("main")
    let heroBox = document.getElementById("hero-box");

    let heroHeading = document.createElement("h1");
    let heroDesc = document.createElement("p");

    heroHeading.innerHTML = " وصلة سيرفس ";
    heroHeading.id = "hero-heading"
    heroDesc.innerHTML = "خليك متطمن ولا توهق نفسك"
    heroDesc.id = "hero-desc";

    main.appendChild(heroBox);
    heroBox.appendChild(heroHeading);
    heroBox.appendChild(heroDesc);
})

window.addEventListener("load", function () {

    let main2 = document.getElementById("main2")
    let heroBox2 = document.getElementById("hero-box2");

    let heroHeading2 = document.createElement("h1");
    let heroDesc2 = document.createElement("p");

    heroHeading2.innerHTML = "التطوع";
    heroHeading2.id = "heroHeading2"
    heroDesc2.innerHTML = "طالب ثانوي ومبتلش بساعات التطوع ؟ مع وصلة تقدر تنشأ ورشتك المتنقله الخاصة من خلال الدخول في دورات برمجية ودورات لصيانة الهواتف وغيرها ، ونوثق لك الشهادة التطوع ."
    heroDesc2.id = "hero-desc2";

    main2.appendChild(heroBox2);
    heroBox2.appendChild(heroHeading2);
    heroBox2.appendChild(heroDesc2);
})

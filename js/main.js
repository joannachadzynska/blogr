const mobileBtn = document.getElementById("mobile-menu");
const details = document.querySelectorAll("details");
const mainNav = document.querySelector(".main_nav");
let isActive = false;

document.addEventListener("click", (e) => {
    if (isActive) {
        // console.log(e.target);
        // details, close
        // if (!e.target.classList.contains("close")) {
        //     isActive = false;
        //     mobileBtn.classList.remove("active");
        //     mainNav.classList.remove("active");
        // }
    }
});

mobileBtn.addEventListener("click", (e) => {
    isActive = !isActive;
    document.getElementById("mobile-menu").classList.toggle("active");
    mainNav.classList.toggle("active");

    details.forEach((detail) => {
        const defaultHeight = detail.offsetHeight;
        const height = detail.querySelector("ul").scrollHeight;
        const summary = detail.querySelector("summary");
        detail.addEventListener("click", (e) => {
            if (e.target.dataset.target === "details") {
                return;
            }

            if (!detail.open) {
                detail.style.height = `${height + defaultHeight * 3 - 10}px`;
                summary.style.height = `0`;
            } else {
                if (e.target.localName === "a") {
                    detail.removeAttribute("open");
                    detail.style.height = `${defaultHeight}px`;
                    return;
                }
                detail.style.height = `${defaultHeight}px`;
            }

            details.forEach((targetDetail) => {
                if (targetDetail !== detail) {
                    targetDetail.removeAttribute("open");
                    targetDetail.style.height = `${defaultHeight}px`;
                }
            });
        });
    });
});

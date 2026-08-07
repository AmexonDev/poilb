fetch("others/navbar.html")
.then(res => res.text())
.then(data => {
    document.getElementById("navbar").innerHTML = data;

    let page = location.pathname.split("/").pop();

    // Jeśli adres kończy się na domenie, ustaw index.html
    if (page === "") {
        page = "index.html";
    }

    document.querySelectorAll(".navbar a").forEach(a => {
        if (a.href.includes(page)) {
            a.classList.add("active");
        }
    });
});
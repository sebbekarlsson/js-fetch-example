[
    "Nice",
    "cool",
    "pretty",
    "cute",
    "small",
    "big",
    "abc",
    "hello"
].forEach(title => fetch("https://randomfox.ca/floof/")
    .then(response => response.json()
        .then(data => {
            const h3 = document.createElement("h3");
            h3.innerText = title;

            document.body.appendChild(h3);

            const img = document.createElement("img");
            img.setAttribute("src", data.image);
            img.className = "image";
            document.body.appendChild(img);
        })));

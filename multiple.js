function insertImage(urlToImage) {
    const img = document.createElement("img");
    img.setAttribute("src", urlToImage);
    img.className = "image";

    document.body.appendChild(img);
}


for (let i = 0; i < 10; i++) {
    fetch("https://randomfox.ca/floof/")
    .then(response => response.json()
    .then(data => insertImage(data.image)));
}
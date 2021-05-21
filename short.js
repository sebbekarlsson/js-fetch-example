function insertImage(urlToImage) {
    const img = document.createElement("img");
    img.setAttribute("src", urlToImage);
    img.className = "image";

    document.body.appendChild(img);
}


fetch("https://randomfox.ca/floof/")
.then(response => response.json()
.then(data => insertImage(data.image)));
for (let i = 0; i < 10; i++) {
    fetch("https://randomfox.ca/floof/")
    .then(response => response.json()
    .then(data => {
        const img = document.createElement("img");
        img.setAttribute("src", data.image);
        img.className = "image";
        document.body.appendChild(img);
    }));
}
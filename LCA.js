const headings = [
    { text: "Home", id: "home" },
    { text: "About Us", id: "about" },
    { text: "Services", id: "services" },
    { text: "Contact", id: "contact" }
];

const searchInput = document.getElementById("search");
const suggestionsBox = document.getElementById("suggestions");

searchInput.addEventListener("input", function() {
    const query = this.value.toLowerCase();
    suggestionsBox.innerHTML = "";
    if (query) {
        const filtered = headings.filter(h => h.text.toLowerCase().includes(query));
        if (filtered.length) {
            suggestionsBox.style.display = "block";
            filtered.forEach(h => {
                const div = document.createElement("div");
                div.textContent = h.text;
                div.onclick = () => {
                    const targetElement = document.getElementById(h.id);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                        suggestionsBox.style.display = "none";
                        searchInput.value = "";
                    }
                };
                suggestionsBox.appendChild(div);
            });
        } else {
            suggestionsBox.style.display = "none";
        }
    } else {
        suggestionsBox.style.display = "none";
    }
});

document.addEventListener("click", function(event) {
    if (!searchInput.contains(event.target) && !suggestionsBox.contains(event.target)) {
        suggestionsBox.style.display = "none";
    }
});

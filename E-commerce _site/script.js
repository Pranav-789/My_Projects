let adder = document.querySelectorAll(".addToCart");

const cartIcon = document.querySelector(".cart-icon");
const cartDiv = document.querySelector(".cart-div"); 

cartIcon.addEventListener("click", () => {
    if (cartDiv.style.display === "none" || cartDiv.style.display === "") {
        cartDiv.style.display = "block";
    } else {
        cartDiv.style.display = "none";
    }
});

adder.forEach(button => {
    button.addEventListener("click", (event) => {
        let product = event.target.closest(".product");
        let productName = product.querySelector(".name").textContent;
        let productPrice = product.querySelector(".price").textContent;
        let productImage = product.querySelector("img").src;

        let parentDiv = document.createElement("div");
        parentDiv.classList.add("parent-class");

        parentDiv.innerHTML = `
            <div class="cart-item">
                <img src="${productImage}" alt="${productName}" width="50">
                <p>${productName} - ₹${productPrice}</p>
                <button class="remove-item">Remove</button>
            </div>
        `;

        cartDiv.appendChild(parentDiv);
        parentDiv.querySelector(".remove-item").addEventListener("click", () => {
            parentDiv.remove();
        });
    });
});

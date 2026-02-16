const dishes = [
    { 
        name: "Classic Burger", 
        category: "main", 
        price: 12,
        image: "images/burger.jpg"
    },
    { 
        name: "Creamy Pasta", 
        category: "main", 
        price: 15,
        image: "images/pasta.jpg"
    },
    { 
        name: "Chocolate Cake", 
        category: "dessert", 
        price: 8,
        image: "images/dessert.jpg"
    },
    {
        name: "Jollof Rice ", 
        category: "main", 
        price: 20,
        image: "images/rice.jpg"
    },
    {
        name: "pepperoni Pizza", 
        category: "main", 
        price: 19,
        image: "images/pizza.jpg"
    },
    {
        name: "grilled fish with lemon butter sauce", 
        category: "main", 
        price: 14,
        image: "images/fish.jpg"
    },
    {
        name: "vanilla Ice Cream Sundae", 
        category: "dessert", 
        price: 10,
        image: "images/icecream.jpg"
    },
    {
        name: "Spicy Chicken Shawarma", 
        category: "main", 
        price:17,
        image: "images/shawarma.jpg"
    },
    {
        name: "BBQ Ribs Platter", 
        category: "main", 
        price: 21,
        image: "images/bbq.jpg"
    },
    {
        name: "Strawberry Cheesecake", 
        category: "dessert", 
        price: 12,
        image: "images/cheesecake.jpg"
    },
    {
        name: "Banana Bread", 
        category: "dessert", 
        price: 8,
        image: "images/banana-bread.jpg"
    },

];

function displayDishes(filter = "all") {
    const container = document.querySelector("#menu-container") || 
                      document.querySelector("#featured-container");

    if (!container) return;

    container.innerHTML = "";

    dishes.forEach(dish => {
        if (filter === "all" || dish.category === filter) {

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}" loading="lazy">
                <h3>${dish.name}</h3>
                <p>Category: ${dish.category}</p>
                <p>Price: $${dish.price}</p>
            `;

            container.appendChild(card);
        }
    });
}

function setupFilter() {
    const filter = document.querySelector("#categoryFilter");
    if (!filter) return;

    filter.addEventListener("change", () => {
        displayDishes(filter.value);
    });
}

function setupReservationForm() {
    const form = document.querySelector("#reservationForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let count = localStorage.getItem("reservationCount") || 0;
        count++;
        localStorage.setItem("reservationCount", count);

        document.querySelector("#confirmation").textContent =
            `Reservation confirmed! Total reservations made: ${count}`;
    });
}

displayDishes();
setupFilter();
setupReservationForm();

const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();
// Product data
const products = [
    {
        id: 1,
        name: "Aviator Classic",
        price: 59.99,
        image: "images/aviator.jpg",
        description: "Timeless aviator sunglasses with UV protection.",
    },
    {
        id: 2,
        name: "Wayfarer Retro",
        price: 49.99,
        image: "images/wayfarer.jpg",
        description: "Retro wayfarer style perfect for everyday wear.",
    },
    {
        id: 3,
        name: "Round Vintage",
        price: 39.99,
        image: "images/round.jpg",
        description: "Classic round frames with vintage vibe.",
    },
    {
        id: 4,
        name: "Sporty Wrap",
        price: 69.99,
        image: "images/sporty.jpg",
        description: "Sporty wrap sunglasses for active lifestyles.",
    },
    {
        id: 5,
        name: "Cat Eye Chic",
        price: 54.99,
        image: "images/cateye.jpg",
        description: "Stylish cat eye sunglasses for a bold look.",
    },
    {
        id: 6,
        name: "Polarized Outdoors",
        price: 79.99,
        image: "images/polarized.jpg",
        description: "Polarized lenses for superior outdoor clarity.",
    },
    {
        id: 7,
        name: "Classic Metal",
        price: 64.99,
        image: "images/metal.jpg",
        description: "Sleek metal frames for a modern touch.",
    },
    {
        id: 8,
        name: "Bold Square",
        price: 44.99,
        image: "images/square.jpg",
        description: "Bold square frames for a confident style.",
    },
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const cartToggle = document.getElementById("cartToggle");
const cart = document.getElementById("cart");
const cartItemsList = document.getElementById("cartItems");
const cartTotalDisplay = document.getElementBy
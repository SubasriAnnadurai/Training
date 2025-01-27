document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("carList")) renderCarList();
    if (document.getElementById("adminCarList")) renderAdminCarList();
    if (document.getElementById("bookedCarsList")) renderBookedCars();
    if (document.getElementById("bookingForm")) loadBookingForm();
    if (document.getElementById("carImage")) loadCarImages();
  });
  
  let cars = JSON.parse(localStorage.getItem("cars")) || [];
  let bookedCars = JSON.parse(localStorage.getItem("bookedCars")) || [];
  
  function renderCarList() {
    const carList = document.getElementById("carList");
    carList.innerHTML = "";
  
    cars.forEach((car, index) => {
      const carCard = document.createElement("div");
      carCard.className = "car-card";
      carCard.innerHTML = `
        <img src="./Images/${car.image}" alt="${car.model}">
        <h3>${car.model}</h3>
        <p>Price per day: $${car.price}</p>
        <button onclick="bookCar(${index})">Book Now</button>
      `;
      carList.appendChild(carCard);
    });
  }
  if (cars.length === 0) {
    cars = [
      { model: "Toyota Corolla", price: 50, image: "img1.jpg" },
      { model: "Honda Civic", price: 60, image: "img2.jpg" },
      { model: "Ford Fiesta", price: 55, image: "img3.jpg" }
    ];
    localStorage.setItem("cars", JSON.stringify(cars));
  }
  function renderCarList() {
    const carList = document.getElementById("carList");
    carList.innerHTML = "";
  
    cars.forEach((car, index) => {
      const carCard = document.createElement("div");
      carCard.className = "car-card";
      carCard.innerHTML = `
        <img src="./Images/${car.image}" alt="${car.model}">
        <h3>${car.model}</h3>
        <p>Price per day: $${car.price}</p>
        <button onclick="bookCar(${index})">Book Now</button>
      `;
      carList.appendChild(carCard);
    });
  }
    
  
  function bookCar(index) {
    localStorage.setItem("selectedCar", JSON.stringify(cars[index]));
    window.location.href = "booking.html";
  }
  
  function loadBookingForm() {
    let selectedCar = JSON.parse(localStorage.getItem("selectedCar"));
    if (!selectedCar) return;
  
    document.getElementById("bookingForm").addEventListener("submit", (e) => {
      e.preventDefault();
  
      const startDate = new Date(document.getElementById("startDate").value);
      const endDate = new Date(document.getElementById("endDate").value);
      
      if (endDate <= startDate) {
        alert("End date must be after start date.");
        return;
      }
  
      const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      const totalCost = days * selectedCar.price;
      
      alert(`Car booked successfully! Total cost: $${totalCost}`);
      
      bookedCars.push(selectedCar);
      cars = cars.filter(car => car.model !== selectedCar.model);
      
      localStorage.setItem("bookedCars", JSON.stringify(bookedCars));
      localStorage.setItem("cars", JSON.stringify(cars));
  
      window.location.href = "booking.html";
    });
  }
  
  function renderBookedCars() {
    const bookedList = document.getElementById("bookedCarsList");
    bookedList.innerHTML = "";
  
    bookedCars.forEach((car) => {
      const carCard = document.createElement("div");
      carCard.className = "car-card";
      carCard.innerHTML = `
        <img src="./Images/${car.image}" alt="${car.model}">
        <h3>${car.model}</h3>
        <p>Booked</p>
      `;
      bookedList.appendChild(carCard);
    });
  }
  
  function renderAdminCarList() {
    const adminCarList = document.getElementById("adminCarList");
    adminCarList.innerHTML = "";
  
    cars.forEach((car, index) => {
      const carCard = document.createElement("div");
      carCard.innerHTML = `
        <h3>${car.model}</h3>
        <p>Price per day: $${car.price}</p>
        <button onclick="removeCar(${index})">Remove</button>
      `;
      adminCarList.appendChild(carCard);
    });
  }
  
  function removeCar(index) {
    cars.splice(index, 1);
    localStorage.setItem("cars", JSON.stringify(cars));
    renderAdminCarList();
  }
  
  document.getElementById("addCarForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const carModel = document.getElementById("carModel").value;
    const carPrice = parseInt(document.getElementById("carPrice").value);
    const carImage = document.getElementById("carImage").value;
  
    cars.push({ model: carModel, price: carPrice, image: carImage });
    localStorage.setItem("cars", JSON.stringify(cars));
  
    renderAdminCarList();
  });
  
  function loadCarImages() {
    const carImageDropdown = document.getElementById("carImage");
    
    let availableImages = [
      "img1.jpg", "img2.jpg", "img3.jpg",
      "img4.jpg", "img5.jpg", "img6.jpg" , "img7.jpg"
    ];
  
    availableImages.forEach(image => {
      const option = document.createElement("option");
      option.value = image;
      option.textContent = image;
      carImageDropdown.appendChild(option);
    });
  }
  function renderBookedCars() {
    const bookedList = document.getElementById("bookedCarsList");
    bookedList.innerHTML = "";
  
    bookedCars.forEach((car, index) => {
      const carCard = document.createElement("div");
      carCard.className = "car-card";
      carCard.innerHTML = `
        <img src="./Images/${car.image}" alt="${car.model}">
        <h3>${car.model}</h3>
        <p>Booked</p>
        <button onclick="editBookedCar(${index})">Edit</button>
        <button onclick="deleteBookedCar(${index})">Delete</button>
      `;
      bookedList.appendChild(carCard);
    });
  }
  
  function editBookedCar(index) {
    const car = bookedCars[index];
    const newStartDate = prompt("Enter new start date (YYYY-MM-DD):", car.startDate);
    const newEndDate = prompt("Enter new end date (YYYY-MM-DD):", car.endDate);
  
    if (newStartDate && newEndDate) {
      const startDate = new Date(newStartDate);
      const endDate = new Date(newEndDate);
  
      if (endDate <= startDate) {
        alert("End date must be after start date.");
        return;
      }
  
      car.startDate = newStartDate;
      car.endDate = newEndDate;
      localStorage.setItem("bookedCars", JSON.stringify(bookedCars));
      renderBookedCars();
      alert("Booking updated successfully!");
    }
  }
  
  function deleteBookedCar(index) {
    if (confirm("Are you sure you want to delete this booking?")) {
      const [deletedCar] = bookedCars.splice(index, 1);
      cars.push(deletedCar);
      localStorage.setItem("bookedCars", JSON.stringify(bookedCars));
      localStorage.setItem("cars", JSON.stringify(cars));
      renderBookedCars();
      alert("Booking deleted successfully!");
    }
  }
  
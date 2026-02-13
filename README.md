# 🛒 Advanced E-Commerce 

A modern multi-page e-commerce frontend built using **React + Vite**, demonstrating product catalog management, shopping cart functionality, order processing, tracking system, and REST API integration using Axios.

This project simulates a real-world e-commerce workflow and focuses on clean component architecture, state management, routing, and dynamic business logic handling.

---

## 🚀 Project Overview

This application includes:

- Dynamic product catalog
- Search functionality using query parameters
- Shopping cart with real-time updates
- Checkout system with delivery options
- Order history page
- Tracking page with dynamic route parameters
- REST API integration (GET, POST, PUT, DELETE)

The goal of this project is to demonstrate practical frontend engineering skills using modern React development practices.

---

## 🛠 Technologies Used

- React 18
- Vite
- React Router DOM
- Axios
- JavaScript (ES6+)
- HTML
- CSS
- REST API Integration

---

## ✨ Features Implemented 

### 🛍 Product Catalog
- API-based product fetching
- Search functionality using `?search=` query parameter
- Dynamic product grid rendering
- Re-fetch products when search query changes

### 🛒 Shopping Cart
- Add items to cart
- Remove items from cart
- Update item quantity
- Select delivery options
- Real-time order summary updates
- Automatic tax calculation

### 📦 Orders Page
- View previous orders
- Display multiple products per order
- Re-add items to cart

### 🚚 Tracking Page
- Dynamic routing using order ID
- Order-specific tracking status
- Navigation from Orders page to Tracking page

### 🔄 API Integration

All REST operations implemented using Axios:

- `GET` – Fetch products
- `POST` – Create orders / add items
- `PUT` – Update cart quantity
- `DELETE` – Remove items from cart

Async/await is used for clean and readable API handling.

---

## 📂 Project Structure

```
ecommerce-project/
│── src/
│   ├── components/
│   │   ├── Header/
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── CheckoutPage.jsx
│   │   ├── OrdersPage.jsx
│   │   ├── TrackingPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── utils/
│   │   └── money.js
│   ├── App.jsx
│   └── main.jsx
│── public/
│── package.json
│── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Manideep-Dasari/Advanced-E-Commerce.git
cd ecommerce-project
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

### 4️⃣ Open in browser

```
http://localhost:5173
```

---

## 🧠 Technical Implementation Details

### State Management
State is handled using React hooks (`useState`, `useEffect`).  
Cart data and product data are dynamically updated based on user interaction.

Derived state such as:
- Subtotal
- Tax
- Delivery cost
- Total amount
is calculated in real-time whenever cart changes.

---

### Routing
React Router DOM is used for:

- Multi-page navigation
- Dynamic route parameters (`/tracking/:orderId`)
- Query parameters for search functionality

---

### API Handling

Example API call implementation:

```javascript
useEffect(() => {
  const getHomeData = async () => {
    try {
      const urlPath = search 
        ? `/api/products?search=${encodeURIComponent(search)}`
        : '/api/products';

      const response = await axios.get(urlPath);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  getHomeData();
}, [search]);
```

This ensures products are re-fetched whenever the search query changes.

---

## 📸 Visual Documentation

Include screenshots of:

- Home Page
 <img width="2240" height="1364" alt="Home Page" src="https://github.com/user-attachments/assets/9ce248c0-80d2-4e88-a891-3fb6ac54afd4" />
- Checkout Page
 <img width="2240" height="1400" alt="Checkout Page" src="https://github.com/user-attachments/assets/1e11ea17-5a91-49aa-8ee2-1f46c9d5823a" />
- Orders Page
  <img width="2240" height="1400" alt="Orders Page" src="https://github.com/user-attachments/assets/a6b81e32-e8d8-4c30-b0d7-80aff901e892" />
- Tracking Page
  <img width="2240" height="1400" alt="Tracking Page" src="https://github.com/user-attachments/assets/b5533de4-ac28-4cec-8a24-945d2b75c34d" />
- NotFound Page
- <img width="2240" height="1364" alt="NotFound Page" src="https://github.com/user-attachments/assets/486f3d93-3285-4467-abf2-d6292a9fafb3" />

---

## 🧪 Testing & Validation

- Manual testing of cart operations
- Quantity update validation
- Route testing for invalid URLs
- API error handling using try/catch
- Order total verification

---

## 📌 Conclusion

This project demonstrates practical frontend engineering skills including:

- Component-based architecture
- REST API integration
- Business logic modeling
- Dynamic UI updates
- Multi-page routing

It provides a solid foundation for scaling into a production-ready e-commerce platform.

---

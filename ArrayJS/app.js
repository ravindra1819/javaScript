const orders = [
  {
    orderId: "ORD1001",
    customer: {
      name: "Ravindra Reddy",
      email: "ravindra.reddy@example.com",
      phone: "+91-9876543210",
      address: {
        street: "12-8-23, Balaji Nagar",
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500038,
      },
    },
    items: [
      { productId: "PRD101", name: "iPhone 15 Pro", category: "Mobiles", quantity: 1, price: 100 },
      { productId: "PRD205", name: "Spigen Case", category: "Accessories", quantity: 1, price: 200 },
    ],
    payment: { mode: "UPI", transactionId: "TXN982341567", status: "Success" },
    orderStatus: "Delivered",
    deliveryDate: "2025-10-05",
    orderDate: "2025-09-30",
  },
  {
    orderId: "ORD1002",
    customer: {
      name: "Nobitha Devi",
      email: "nobitha.devi@example.com",
      phone: "+91-9123456789",
      address: {
        street: "2nd Cross, MG Layout",
        city: "Bangalore",
        state: "Karnataka",
        pincode: 560076,
      },
    },
    items: [
      { productId: "PRD301", name: "HP Pavilion x360", category: "Laptops", quantity: 1, price: 78999 },
      { productId: "PRD302", name: "Logitech Mouse", category: "Accessories", quantity: 1, price: 1499 },
    ],
    payment: { mode: "Credit Card", transactionId: "TXN245678932", status: "Pending" },
    orderStatus: "Processing",
    deliveryDate: null,
    orderDate: "2025-10-07",
  },
  {
    orderId: "ORD1003",
    customer: {
      name: "Deepti Sharma",
      email: "deepti.sharma@example.com",
      phone: "+91-9988776655",
      address: {
        street: "Sector 12, Noida",
        city: "Noida",
        state: "Uttar Pradesh",
        pincode: 201301,
      },
    },
    items: [
      { productId: "PRD501", name: "Nike Air Max 270", category: "Footwear", quantity: 2, price: 12999 },
    ],
    payment: { mode: "Net Banking", transactionId: "TXN999120005", status: "Success" },
    orderStatus: "Shipped",
    deliveryDate: "2025-10-12",
    orderDate: "2025-10-08",
  },
  {
    orderId: "ORD1004",
    customer: {
      name: "Arjun Rao",
      email: "arjun.rao@example.com",
      phone: "+91-9001234567",
      address: {
        street: "Plot No 22, KPHB Colony",
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500072,
      },
    },
    items: [
      { productId: "PRD602", name: "Sony WH-1000XM5", category: "Audio", quantity: 1, price: 29999 },
      { productId: "PRD603", name: "Anker Powerbank", category: "Electronics", quantity: 1, price: 3499 },
    ],
    payment: { mode: "Debit Card", transactionId: "TXN445667890", status: "Failed" },
    orderStatus: "Cancelled",
    deliveryDate: null,
    orderDate: "2025-09-25",
  },
  {
    orderId: "ORD1005",
    customer: {
      name: "Priya Nair",
      email: "priya.nair@example.com",
      phone: "+91-9678453210",
      address: {
        street: "Green Valley Apartments",
        city: "Chennai",
        state: "Tamil Nadu",
        pincode: 600042,
      },
    },
    items: [
      { productId: "PRD710", name: "KitchenAid Mixer", category: "Home Appliances", quantity: 1, price: 45999 },
      { productId: "PRD711", name: "Philips Juicer", category: "Home Appliances", quantity: 1, price: 7999 },
    ],
    payment: { mode: "Cash on Delivery", transactionId: null, status: "Pending" },
    orderStatus: "Out for Delivery",
    deliveryDate: "2025-10-10",
    orderDate: "2025-10-08",
  },
  {
    orderId: "ORD1006",
    customer: {
      name: "Sanjay Verma",
      email: "sanjay.verma@example.com",
      phone: "+91-9867543321",
      address: {
        street: "Banjara Hills Road 5",
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500034,
      },
    },
    items: [
      { productId: "PRD801", name: "Dell Monitor 27inch", category: "Electronics", quantity: 1, price: 17999 },
    ],
    payment: { mode: "UPI", transactionId: "TXN123987111", status: "Success" },
    orderStatus: "Delivered",
    deliveryDate: "2025-10-03",
    orderDate: "2025-09-29",
  },
  {
    orderId: "ORD1007",
    customer: {
      name: "Anjali Gupta",
      email: "anjali.gupta@example.com",
      phone: "+91-8899776655",
      address: {
        street: "Rosewood Villa, Sector 9",
        city: "Pune",
        state: "Maharashtra",
        pincode: 411045,
      },
    },
    items: [
      { productId: "PRD905", name: "Samsung Galaxy Watch 6", category: "Wearables", quantity: 1, price: 32999 },
    ],
    payment: { mode: "Debit Card", transactionId: "TXN778899221", status: "Success" },
    orderStatus: "Delivered",
    deliveryDate: "2025-10-04",
    orderDate: "2025-09-30",
  },
  {
    orderId: "ORD1008",
    customer: {
      name: "Vikram Reddy",
      email: "vikram.reddy@example.com",
      phone: "+91-9856643211",
      address: {
        street: "Hitech City Main Road",
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500081,
      },
    },
    items: [
      { productId: "PRD1201", name: "Apple MacBook Air M3", category: "Laptops", quantity: 1, price: 129999 },
    ],
    payment: { mode: "Credit Card", transactionId: "TXN998877665", status: "Success" },
    orderStatus: "Shipped",
    deliveryDate: "2025-10-12",
    orderDate: "2025-10-09",
  },
  {
    orderId: "ORD1009",
    customer: {
      name: "Manasa Rao",
      email: "manasa.rao@example.com",
      phone: "+91-9988001122",
      address: {
        street: "Ram Nagar Colony",
        city: "Vizag",
        state: "Andhra Pradesh",
        pincode: 530017,
      },
    },
    items: [
      { productId: "PRD1305", name: "Canon EOS M50", category: "Cameras", quantity: 1, price: 58999 },
      { productId: "PRD1306", name: "Camera Tripod", category: "Accessories", quantity: 1, price: 1999 },
    ],
    payment: { mode: "Net Banking", transactionId: "TXN667788995", status: "Pending" },
    orderStatus: "Processing",
    deliveryDate: null,
    orderDate: "2025-10-07",
  },
  {
    orderId: "ORD1010",
    customer: {
      name: "Rahul Mehta",
      email: "rahul.mehta@example.com",
      phone: "+91-9345678901",
      address: {
        street: "Banjara Hills",
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500034,
      },
    },
    items: [
      { productId: "PRD1402", name: "PS5 Controller", category: "Gaming", quantity: 1, price: 6499 },
      { productId: "PRD1403", name: "FIFA 25", category: "Gaming", quantity: 1, price: 4999 },
    ],
    payment: { mode: "UPI", transactionId: "TXN554433221", status: "Success" },
    orderStatus: "Delivered",
    deliveryDate: "2025-10-06",
    orderDate: "2025-10-01",
  },
  {
    orderId: "ORD1011",
    customer: {
      name: "Sneha Patel",
      email: "sneha.patel@example.com",
      phone: "+91-9001122334",
      address: {
        street: "Viman Nagar Road",
        city: "Pune",
        state: "Maharashtra",
        pincode: 411014,
      },
    },
    items: [
      { productId: "PRD1504", name: "Dyson V12 Vacuum", category: "Home Appliances", quantity: 1, price: 55999 },
    ],
    payment: { mode: "Credit Card", transactionId: "TXN123443211", status: "Success" },
    orderStatus: "Delivered",
    deliveryDate: "2025-10-05",
    orderDate: "2025-09-29",
  },
  {
    orderId: "ORD1012",
    customer: {
      name: "Vamsi Krishna",
      email: "vamsi.krishna@example.com",
      phone: "+91-9876001234",
      address: {
        street: "Madhapur Main Road",
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500081,
      },
    },
    items: [
      { productId: "PRD1601", name: "Asus ROG Strix Laptop", category: "Laptops", quantity: 1, price: 159999 },
      { productId: "PRD1602", name: "Gaming Mousepad", category: "Accessories", quantity: 1, price: 1999 },
    ],
    payment: { mode: "EMI", transactionId: "TXN222111555", status: "Success" },
    orderStatus: "Delivered",
    deliveryDate: "2025-10-04",
    orderDate: "2025-09-28",
  },
  {
    orderId: "ORD1013",
    customer: {
      name: "Rajesh Kumar",
      email: "rajesh.kumar@example.com",
      phone: "+91-9012233445",
      address: {
        street: "Station Road",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: 400001,
      },
    },
    items: [
      { productId: "PRD1702", name: "Apple AirPods Pro 2", category: "Audio", quantity: 1, price: 24999 },
    ],
    payment: { mode: "Debit Card", transactionId: "TXN555888999", status: "Pending" },
    orderStatus: "Processing",
    deliveryDate: null,
    orderDate: "2025-10-09",
  },
  {
    orderId: "ORD1014",
    customer: {
      name: "Harika Devi",
      email: "harika.devi@example.com",
      phone: "+91-9003344556",
      address: {
        street: "Nizampet Road",
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500090,
      },
    },
    items: [
      { productId: "PRD1801", name: "Lenovo Tablet M10", category: "Tablets", quantity: 1, price: 19999 },
      { productId: "PRD1802", name: "Bluetooth Keyboard", category: "Accessories", quantity: 1, price: 2499 },
    ],
    payment: { mode: "Net Banking", transactionId: "TXN443221667", status: "Success" },
    orderStatus: "Shipped",
    deliveryDate: "2025-10-11",
    orderDate: "2025-10-08",
  },
  {
    orderId: "ORD1015",
    customer: {
      name: "Kiran Kumar",
      email: "kiran.kumar@example.com",
      phone: "+91-9445566778",
      address: {
        street: "Thiruvanmiyur Beach Road",
        city: "Chennai",
        state: "Tamil Nadu",
        pincode: 600041,
      },
    },
    items: [
      { productId: "PRD1901", name: "OnePlus 12R", category: "Mobiles", quantity: 1, price: 45999 },
      { productId: "PRD1902", name: "OnePlus Buds 3", category: "Audio", quantity: 1, price: 5999 },
    ],
    payment: { mode: "UPI", transactionId: "TXN123098765", status: "Success" },
    orderStatus: "Delivered",
    deliveryDate: "2025-10-09",
    orderDate: "2025-10-03",
  },
];

// Map method


const summaries = orders.map(order => {
  let finalPrice = 0;
  order.items.map(item => {
    finalPrice = finalPrice + item.price;
  })
  return (`${order.customer.name} ordered ${order.items.length} items worth of ${finalPrice}`)
})
console.log(summaries)

// Splice : 

const numList = [10, 20, 60, 70, 80];

numList.splice(2, 2, 30, 40, 50);

console.log(numList);

// foreach : Print each order

orders.forEach(order => console.log(`${order.customer.name} your order status was ${order.orderStatus}`));

// Reduce

const cartPrices = [100, 200, 300, 400, 300, 400, 700, 400, 100, 400, 400, 200, 500, 300];

const totalCartValue = cartPrices.reduce((a , b) => a+b);

console.log(totalCartValue)

// Customer paid with UPI and pincode scenario

orders.map (order => console.log (`${order.customer.name} payment mode was ${order.payment.mode} and his area pincode is ${order.customer.address.pincode}`));
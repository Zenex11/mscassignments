interface user {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}

interface product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const users: user[] = [
  { id: 1, name: "Malak", age: 21, isActive: true },
  { id: 2, name: "Omar", age: 24, isActive: false },
  { id: 3, name: "Lina", age: 20, isActive: true }
];

const products: product[] = [
  { id: 101, name: "Laptop", price: 25000, inStock: true },
  { id: 102, name: "Headphones", price: 1800, inStock: false },
  { id: 103, name: "Mouse", price: 650, inStock: true }
];

function getUserById(id: number): user | undefined {
  return users.find((user: user) => user.id === id);
}

function getActiveUsers(list: user[]): user[] {
  return list.filter((user: user) => user.isActive);
}

function getProductNames(items: product[]): string[] {
  return items.map((item: product) => item.name);
}

function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

function printUser(user: user): string {
  return `${user.name} is ${user.age} years old`;
}

let selectedUser: user | undefined = getUserById(1);
let activeUsers: user[] = getActiveUsers(users);
let productNames: string[] = getProductNames(products);
let total: number = calculateTotal(650, 3);
//q2 
interface Course {
  id: number;
  title: string;
}

interface UserData {
  id: number;
  name: string;
  role: string;
  email: string;
  isActive: boolean;
  courses: Course[];
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: UserData;
}

const response: ApiResponse = {
  success: true,
  message: "User retrieved successfully",
  data: {
    id: 1,
    name: "Malak Ahmed",
    role: "mentor",
    email: "malak@example.com",
    isActive: true,
    courses: [
      { id: 11, title: "JavaScript Basics" },
      { id: 12, title: "TypeScript Intro" }
    ]
  }
};

console.log(response);

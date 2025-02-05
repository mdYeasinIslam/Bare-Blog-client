# "BareBlog"

![My Blogs](https://i.ibb.co.com/gLrbjxMw/bare-Blogs.png)


# Short descroption:
This site is build for collecting Blogs about Technology. User can share their opition or can share their experience about different technology and it will pusblish as a blog.
User can control his/her blog

# Features:
1. Home page shows banner, top blogs and authors details 
2. User can add blogs 
3. can see his/her blogs and can manage if he/she want
4. can add blogs in wishlist
5. This site also has dark mode.
    

# Tecnology:
1. Project setup React+Typescript 
2. Tailwind css + Meterial UI for styling
3. React router for routing
4. firebase authentication
 Some packages:
5. react icons, react-toastify, React-awesome-carousol(Swiper), motion, lottie react,react-loading-skeleton  etc.
6. Axios for api integration
7. Tanstack-table for table and So on


---

### 📦 Project Dependencies

| Dependency | Version | Description |
|------------|---------|-------------|
| **@emotion/react** | `^11.14.0` | Library for writing styles with Emotion |
| **@emotion/styled** | `^11.14.0` | Styled components for Emotion |
| **@mui/icons-material** | `^6.2.1` | Material UI Icons |
| **@mui/material** | `^6.2.1` | Material UI Components |
| **@tanstack/react-table** | `^8.20.6` | Advanced table library for React |
| **axios** | `^1.7.9` | Promise-based HTTP client for API requests |
| **firebase** | `^11.1.0` | Firebase services for authentication, database, and hosting |
| **lottie-react** | `^2.4.0` | Library for rendering Lottie animations |
| **moment** | `^2.30.1` | Date and time manipulation library |
| **motion** | `^11.15.0` | Animation library |
| **react** | `^18.3.1` | React core library |
| **react-data-table-component** | `^7.6.2` | Data table component for React |
| **react-dom** | `^18.3.1` | React DOM rendering library |
| **react-fast-marquee** | `^1.6.5` | Marquee effect for React components |
| **react-hot-toast** | `^2.4.1` | Notification system for React |
| **react-icons** | `^5.4.0` | Popular icon set for React |
| **react-loading-skeleton** | `^3.5.0` | Skeleton loading effect for React |
| **react-router-dom** | `^6.28.1` | Routing library for React |
| **react-simple-typewriter** | `^5.0.1` | Typewriter effect for React |
| **swiper** | `^11.1.15` | Modern touch slider for React |

---

---

## 🚀 Running the Project Locally  

Follow these steps to set up and run the project on your local machine.  

### **Prerequisites**  
Ensure you have the following installed:  
- **Node.js** (Latest LTS version recommended) → [Download Node.js](https://nodejs.org/)  
- **npm** (Comes with Node.js) or **yarn**  
- **Git** (Optional, for cloning the repo)  

### **1️⃣ Clone the Repository both client and server side**  
```sh
git clone <repository-url>
cd <project-folder>
```

### **2️⃣ Install Dependencies**  
Using **npm**:  
```sh
npm install
```


### **3️⃣ Setup Environment Variables**  
Create a `.env` file in the root directory and add your Firebase credentials:  
```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id


VITE_server=https://b10-bare-blog-server.vercel.app
```

Make sure you replace `your_api_key` and other values with your actual Firebase config.  

### **4️⃣ Start the Development Server**  
Using **npm**:  
```sh
npm run dev
```

This will start the development server, usually on **http://localhost:5173/** (default Vite port).  

### **5️⃣ Build the Project (For Production)**  
To create an optimized production build:  
```sh
npm run build
```

The output will be in the `dist` folder.  

### **6️⃣ Firebase Configuration (Optional - If Using Firebase Hosting)**  
If you want to deploy using Firebase, login and initialize Firebase:  
```sh
firebase login
firebase init
```
Then deploy:  
```sh
firebase deploy
```

---

This will ensure **anyone** can easily set up and run your project! 🚀🔥  

# Client side 
# Live link : https://a11-bareblog.web.app

# Server side 
# live link : https://b10-bare-blog-server.vercel.app

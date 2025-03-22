# 📚StackUp Nexus


![Alt Text](https://github.com/kamalan2k4/StackUp-Nexus/blob/main/public/images/Home.png)

**StackUp Nexus** is an advanced **Library Management** System designed to streamline the process of book borrowing, user management, and library administration with a modern, scalable, and highly optimized architecture.

Built using Next.js, TypeScript, PostgreSQL, Upstash, and Tailwind CSS, it provides a seamless user experience with:


Secure authentication with role-based access,
Interactive book discovery with filtering, search, and pagination ,
Automated email notifications for borrowing and due date reminders,
Efficient admin panel with analytics and user role management,
 Optimized performance with caching and real-time updates.

---

## 🚀 Features  

### 🔹 **User Features**  
✅ **Seamless Authentication** – Secure login system with role-based access.  
✅ **Home Page** – Displays featured books with 3D effects.  
✅ **Library Page** – Advanced search, filtering, and pagination for browsing books.  
✅ **Book Details Page** – View book availability, descriptions, and recommendations.  
✅ **Profile Management** – Track borrowed books and download PDF receipts.  

---

## 📊 Admin Panel Features  

✔ **User Approvals** – Admins can approve or deny library access requests.  
✔ **Role Management** – Assign **Admin/User** roles dynamically.  
✔ **Analytics Dashboard** – View **active users, book counts, borrow statistics**.  
✔ **Bulk Book Management** – Easily add or edit book collections.  
✔ **Audit Logs** – Track user activities and borrow history.  

---

### 🔹 **Borrowing & Reminders**  
✅ **Borrow Books** – Users can request and borrow books.  
✅ **Automated Email Reminders** – Alerts before, on, and after the due date.  
✅ **PDF Borrow Receipt** – Automatically generated and downloadable after borrowing a book.  



### 🔹 **Optimizations & Performance**  
✅ **Upstash Redis Caching** – Improves performance by caching data.  
✅ **Image Optimization (ImageKit)** – For fast-loading book covers.  
✅ **Scalable Database (PostgreSQL + NeonDB)** – Supports large-scale library operations.  
✅ **Rate Limiting & DDoS Protection** – Ensures security and smooth performance.  

---

## 🎨 UI/UX & Styling  

- **Tailwind CSS + ShadCN** – Delivers a **modern, interactive** user experience.  
- **Animated Book Covers** – Enhances book browsing aesthetics.  
- **Dark & Light Mode** – Provides a seamless reading experience.  
- **Custom Styling for Borrowed Books** – Easily distinguishes checked-out books.  

---

## 📂 Folder Structure  

```
📦 stackup-library
 ┣ 📂 app
 ┃ ┣ 📂 components  # UI components
 ┃ ┣ 📂 pages       # All app pages
 ┃ ┗ 📂 styles      # Global styles
 ┣ 📂 database
 ┃ ┣ 📜 schema.ts   # Database schema
 ┃ ┣ 📜 seed.ts     # Initial data setup
 ┣ 📂 public
 ┃ ┣ 📂 images      # Static assets
 ┣ 📂 utils         # Helper functions
 ┣ 📜 tailwind.config.ts  # Tailwind styling config
 ┣ 📜 next.config.js  # Next.js settings
 ┣ 📜 package.json  # Dependencies
 ┣ 📜 .env.example  # Environment variables
 ┗ 📜 README.md  # Project documentation
```

---

## 🛠 Backend & Database  

- **PostgreSQL (NeonDB)** – Manages books, users, and borrow records.  
- **Upstash Redis** – Handles caching and optimizations.  
- **Drizzle ORM** – Simplifies database interactions.  
- **ImageKit** – Processes and serves optimized book images.  
- **Resend API** – Sends automated email notifications.  


---

## 📜 Borrowing Process  

📌 **Step 1:** User selects a book and clicks **Borrow**.  
📌 **Step 2:** System checks book availability.  
📌 **Step 3:** If available, the book is assigned to the user.  
📌 **Step 4:** A **PDF receipt** is generated and emailed to the user.  
📌 **Step 5:** Automated **reminders** are sent before and after the due date.  

---

## 🔒 Security & Optimization  

✔ **Rate Limiting & DDoS Protection** – Ensures system security.  
✔ **JWT Authentication** – Secure user sessions.  
✔ **Redis Caching (Upstash)** – Speeds up data retrieval.  
✔ **Optimized Image Loading** – Reduces load times.  

---

##🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/university-library-jsm.git
cd university-library-jsm
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=

NEXT_PUBLIC_API_ENDPOINT=
NEXT_PUBLIC_PROD_API_ENDPOINT=

DATABASE_URL=

UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=

AUTH_SECRET=

# Required for workflow
QSTASH_URL=
QSTASH_TOKEN=

# RESEND_TOKEN=
RESEND_TOKEN=
```

Replace the placeholder values with your actual ImageKit, NeonDB, Upstash, and Resend credentials. You can obtain these credentials by signing up on the [ImageKit](https://bit.ly/), [NeonDB](https://fyi.neon.tech/), [Upstash](https://upstash.com/), and [Resend](https://resend.com/). 

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.


## 🎯 Why this one?  

🚀 **Optimized Performance** – Uses caching and optimized API calls.  
📊 **Scalable Backend** – Supports **thousands** of users & books.  
📩 **Automated Notifications** – Reduces manual effort.  
🛠 **Developer-Friendly** – Uses **modern tools & clean code**.  

---
 

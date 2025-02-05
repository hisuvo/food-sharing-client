## Food Sharing
## Project Overview:
The Food Share Surplus Reduction website is a platform dedicated to reducing food waste by connecting individuals and businesses with surplus food to those in need. It enables users to donate or claim excess food, helping to promote sustainability and support local communities. The website is easy to use, offering a seamless donation process, real-time updates, and a secure environment for both donors and recipients. By facilitating food sharing, it aims to reduce waste while providing access to quality food for those who need it.

## Bestro Boss:
<div>
  <img src="https://i.ibb.co.com/wFnJ0rjk/a4b9f443-b1d6-4d83-882d-2c6a8ba62f9a.png"/>
</div>

##  Technologies
## Frontend:
- HTML, CSS, and JavaScript
- React.js (for building dynamic, responsive user interfaces)
- TailwindCSS (for styling and creating responsive layouts)
  
## Backend:
- Node.js (server-side JavaScript runtime)
- Express.js (web framework for building APIs)
  
## Database:
- MongoDB (NoSQL database for storing user data, orders, and menus)
- Payment Integration: Stripe 

## Authentication & Security:
- JWT (for user authentication and session management)
- Hosting & Deployment: Firebase or Vercel 

## Prerequisites:

Make sure you have the following installed on your system:
- Node.js (with npm)
- MongoDB (if running locally or you can use MongoDB Atlas)
- Git (for cloning the repository)

## Step-by-Step Guide:
1. Clone the Repository:
   - Clone the project repository from GitHub
     
            git clone https://github.com/hisuvo/food-sharing-client.git
            git clone https://github.com/hisuvo/food-sharing-server.git
     
2. Navigate to Project Folder:
   - Move into the project directory
     
            cd food-sharing-client

3. Install Frontend Dependencies:

   - Install the required dependencies:
 
            npm install

4. Install Backend Dependencies:
   - Navigate to the backend folder
     
           cd food-sharing-server

   - Install the required dependencies:
 
          npm install
     
5. Setup Environment Variables:
   - Create a .env file in the backend folder to store sensitive information like your MongoDB URI and Stripe
   - Example .env file:
     
           MONGO_URI=your_mongo_db_connection_string
           JWT_SECRET=your_jwt_secret
           STRIPE_SECRET_KEY=your_stripe_secret_key
     
6. Start MongoDB
    running MongoDB:
 
          mongod
   
## live project links :
 - https://food-share-surplus-reduction.web.app/

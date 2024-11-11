# Riwayat - Celebrating Moments, Honoring Traditions
# Changes

Riwayat is a web-based application designed for an Indian audience, rebuilt using **ASP.NET** with **Angular** for the frontend. This app allows users to book services related to Catering, Venue, Entertainment, and Decorations for events such as weddings, engagements, parties, and birthdays. By blending modern technology with the richness of traditional events, Riwayat provides an intuitive experience for planning and celebrating special moments.

## Features

- **Trending Services Display**: Highlights popular services in each category on the homepage.

- **Category Selection**: Users can explore services across four main categories: Catering, Venue, Entertainment, and Decorations.

- **Sub-Categories**:
  - **Catering**: Options include Restaurant-based or Individual Cook services.
  - **Entertainment**: Includes DJs, Bands, Musicians, Singers, Dancers, Clowns, Puppet Shows, and more.
  - **Decorations**: A list of freelance decorators available for various events.
  - **Venue**: Discover venues based on selected locations.

- **Multi-Service Booking**: Users can book multiple services simultaneously or individually.

- **Service Provider Profiles**: Detailed profiles include reviews, ratings, and portfolios of the service providers.

- **Booking Management**: A dashboard where users can view and manage their bookings.

- **Secure Payments**: Integrated with **Razorpay** for secure, seamless transactions.

- **Admin Dashboard**: Manage service providers, track bookings, and oversee user data.

## Tech Stack

- **Frontend**: Angular
- **Backend**: ASP.NET
- **Database**: MongoDB
- **Authentication**: JWT for secure authentication and OAuth for social logins
- **Payment Gateway**: Razorpay integration for secure payments

## Getting Started

### Prerequisites

- .NET 6 SDK (or higher)
- Node.js and Angular CLI
- MongoDB
- Razorpay account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/riwayat.git
   cd riwayat
   ```

2. Set up Razorpay integration by configuring the API keys in `appsettings.json`:
   ```json
   "Razorpay": {
     "KeyId": "your_key_id",
     "KeySecret": "your_key_secret"
   }
   ```

3. Install Dependencies:
   ```bash
   dotnet restore
   npm install --prefix ClientApp
   ```

### Running The Application

1. Start the ASP.NET Backend Server:
   ```bash
   dotnet run
   ```
2. Start the Angular Frontend:
   ```bash
   cd ClientApp
   npm start
   ```

### Contribution

Contributions are welcome! Please fork the repository, make updates, and create a pull request with your enhancements. 

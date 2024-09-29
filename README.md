# Hall Booking API

A room booking API for handling multiple rooms and customers, preventing double bookings.

---

## Documentation

The API documentation is available in following Postman URL: https://documenter.getpostman.com/view/11314293/2sAXqtbMq5

---

## Render URL

- **Render URL:** `https://hall-booking-fsdday34.onrender.com/`

## Endpoints

### 1. Create Room

**Request URL:** `POST https://hall-booking-fsdday34.onrender.com/create-rooms`

**Request Body:**

``` json
{
    "noOfSeats": 2,
    "amenities": ["AC", "Geyser", "Snacks"],
    "pricePerHour": 500
}

 ```

**Description:**  
This endpoint creates a new room with the specified number of seats, amenities, and price per hour.

**Responses:**

``` json
{
    "roomId": 1,
    "noOfSeats": 2,
    "amenities": ["AC", "Geyser", "WiFi"],
    "pricePerHour": 500
}

 ```

### 2. Book Room

**Request URL:** `POST https://hall-booking-fsdday34.onrender.com/book-room`

**Request Body:**

``` json
{
    "customerName": "Zen Masrer",
    "date": "2024-09-22",
    "startTime": "11:00",
    "endTime": "12:00",
    "roomId": 1
}

 ```

**Description:**  
This endpoint books a room for a customer on a specified date and time.

**Constraints:**

- The room cannot be booked if it is already booked for the specified date and time.
    

**Responses:**

- **201 Created:** Booking was successfully created.
    
    ``` json
                          {
                              "bookingId": 1,
                              "customerName": "Zen Master",
                              "date": "2024-09-22",
                              "startTime": "11:00",
                              "endTime": "12:00",
                              "roomId": 1
                          }
    
     ```
    
- **400 Bad Request:** Room is already booked for the given time.
    
    ``` json
                          {
                              "message": "Room is already booked for the given time"
                          }
    
     ```

### 3. List All Rooms with Booked Data

**Request URL:** `GET https://hall-booking-fsdday34.onrender.com/list-booked-rooms`

**Description:**  
This endpoint retrieves a list of all rooms along with their booking details.

**Responses:**

- **200 OK:** A list of rooms with their booking details.
    
    ``` json
              [
                  {
                      "roomId": 1,
                      "numberOfSeats": 2,
                      "amenities": ["AC", "Geyser", "WiFi"],
                      "pricePerHour": 500,
                      "bookings": [
                          {
                              "bookingId": 1,
                              "customerName": "Zen Master",
                              "date": "2024-09-22",
                              "startTime": "11:00",
                              "endTime": "12:00",
                              "roomId": 1
                          }
                      ]
                  }
              ]
    
     ```

### 4. List All Customers with Booked Data

**Request URL:** `GET https://hall-booking-fsdday34.onrender.com/customers`

**Description:**  
This endpoint retrieves a list of all customers along with their booking details.

**Responses:**

- **200 OK:** A list of customers with their booking details.
    
    ``` json
              [
                  {
                      "customerName": "Zen Master",
                      "roomId": 1,
                      "date": "2024-09-22",
                      "startTime": "11:00",
                      "endTime": "12:00"
                  }
              ]
    
     ```

### 5\. List Bookings by Customer

**Request URL:** `GET https://hall-booking-fsdday34.onrender.com/customers/:customerName`

**Description:**  
This endpoint retrieves all bookings made by a specific customer.

**Path Parameters:**

- `customerName` (string): The name of the customer whose bookings are to be retrieved.
    

**Responses:**

- **200 OK:** A list of bookings made by the specified customer.
    
    ``` json
              [
                  {
                      "bookingId": 1,
                      "customerName": "Zen Master",
                      "date": "2024-09-22",
                      "startTime": "11:00",
                      "endTime": "12:00",
                      "roomId": 1
                  }
              ]
    
     ```

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rajat4rao/hall-booking.git
   ```
2. Navigate to the project directory:
   ```bash
   cd hall-booking
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Server

1. Start the server:
   ```bash
   node index.js
   ```
2. The API will be running at `http://localhost:3000`.

### Testing the API

Use an API testing tool like [Postman](https://www.postman.com/) to test the endpoints.

### Deployment

1. Deploy the application to [Render](https://render.com/).
2. Follow Render’s documentation to connect your GitHub repository and deploy your Node.js application.

---

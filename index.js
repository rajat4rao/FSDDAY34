const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

let rooms = [];
let bookings = [];

app.post('/create-rooms', (req, res) => {
    const { noOfSeats, amenities, pricePerHour } = req.body;
    const roomId = rooms.length + 1;
    const newRoom = { roomId, noOfSeats, amenities, pricePerHour };
    rooms.push(newRoom);
    res.status(201).json(newRoom);
});

app.post('/book-room', (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;

    const isBooked = bookings.some(booking => 
        booking.roomId === roomId && 
        booking.date === date && 
        ((startTime >= booking.startTime && startTime < booking.endTime) || 
        (endTime > booking.startTime && endTime <= booking.endTime))
    );

    if (isBooked) {
        return res.status(400).json({ message: 'Room is already booked for the given time' });
    }

    const bookingId = bookings.length + 1;
    const newBooking = { bookingId, customerName, date, startTime, endTime, roomId };
    bookings.push(newBooking);
    res.status(201).json(newBooking);
});

app.get('/list-booked-rooms', (req, res) => {
    const result = rooms.map(room => {
        const roomBookings = bookings.filter(booking => booking.roomId === room.roomId);
        return { ...room, bookings: roomBookings };
    });
    res.json(result);
});

app.get('/customers', (req, res) => {
    const customers = bookings.map(booking => ({
        customerName: booking.customerName,
        roomId: booking.roomId,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
    }));
    res.json(customers);
});

app.get('/customers/:customerName', (req, res) => {
    const customerName = req.params.customerName;
    const customerBookings = bookings.filter(booking => booking.customerName === customerName);
    res.json(customerBookings);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

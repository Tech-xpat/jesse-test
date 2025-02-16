"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    quantity: "",
    deliveryAddress: "",
    additionalNotes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking request submitted successfully!");
    // Here, you can integrate an API call to handle bookings.
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Book Your Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
        <Input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
        <Input type="email" name="email" placeholder="Email (Optional)" onChange={handleChange} />
        <Input type="text" name="category" placeholder="What are you booking? (e.g. Goat, Chicken, Blocks)" required onChange={handleChange} />
        <Input type="number" name="quantity" placeholder="Quantity" required onChange={handleChange} />
        <Textarea name="deliveryAddress" placeholder="Delivery Address" required onChange={handleChange} />
        <Textarea name="additionalNotes" placeholder="Additional Notes (Optional)" onChange={handleChange} />
        <Button type="submit" className="w-full bg-green-600 text-white">Submit Booking</Button>
      </form>
    </div>
  );
};

export default BookingForm;

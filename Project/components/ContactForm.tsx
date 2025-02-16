"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your inquiry has been sent! We will get back to you shortly.");
    // Here, you can integrate an API call to send messages.
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
        <Input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
        <Input type="email" name="email" placeholder="Email (Optional)" onChange={handleChange} />
        <Textarea name="message" placeholder="Your Message / Inquiry" required onChange={handleChange} />
        <Button type="submit" className="w-full bg-blue-600 text-white">Send Inquiry</Button>
      </form>
    </div>
  );
};

export default ContactForm;

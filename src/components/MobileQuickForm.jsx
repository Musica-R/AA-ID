import React, { useState } from "react";
import "../styles/mobileQuickForm.css";

const MobileQuickForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      // allow only letters and spaces
      const filtered = value.replace(/[^A-Za-z\s]/g, "");
      setFormData((prev) => ({ ...prev, name: filtered }));
      return;
    }

    if (name === "phone") {
      // allow only digits, max 10
      const filtered = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: filtered }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const whatsappNumber = "919626313396"; // country code + number

    const text = `New Enquiry:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    // reset form, errors, and close drawer after redirect
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setOpen(false);
  };

  return (
    <>
      {/* Minimal Pull Tab */}
      <div
        className="mobile-form-tab"
        onClick={() => setOpen(true)}
        aria-label="Open enquiry form"
      >
        ENQUIRY
      </div>

      {/* Overlay */}
      <div
        className={`form-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Sliding Drawer */}
      <aside className={`mobile-form-drawer ${open ? "open" : ""}`}>
        <div className="drawer-header">
          <h3>Quick Enquiry</h3>
          <button className="close-btn" onClick={() => setOpen(false)} id="close-btn">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            inputMode="numeric"
            maxLength={10}
          />
          {errors.phone && <span className="field-error">{errors.phone}</span>}

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit Enquiry</button>
        </form>
      </aside>
    </>
  );
};

export default MobileQuickForm;
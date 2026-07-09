import React, { useState } from "react";
import "../styles/mobileQuickForm.css";

const MobileQuickForm = () => {
  const [open, setOpen] = useState(false);

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
          <button className={`form-overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)} id="close-btn">×</button>
        </div>

        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Mobile Number" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Submit Enquiry</button>
        </form>
      </aside>
    </>
  );
};

export default MobileQuickForm;

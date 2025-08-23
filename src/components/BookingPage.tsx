import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitStatus("sending");

    // Using environment variables for EmailJS credentials
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

    // Validation to make sure env variables are present
    if (!serviceId || !publicKey || !templateId) {
      console.error("Missing EmailJS credentials in environment variables");
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
      return;
    }

    const templateParams = {
      to_email: "tuningtemple@gmail.com",
      name: email,
      from_email: email,
      message: message,
      time: new Date().toLocaleString(),
      subject: "New Booking Request from Tuning Temple Website",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setSubmitStatus("success");
        setEmail("");
        setMessage("");

        // Redirect back to home after showing success message
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error.text);
        setSubmitStatus("error");

        // Clear error status after a few seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
      });
  };

  return (
    <div className="booking-page" onClick={() => navigate("/")}>
      <div className="booking-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-btn"
          onClick={() => navigate("/")}
          title="Close"
        >
          ×
        </button>
        <div className="booking-content">
          <h1>Book Your Session</h1>

          <div className="booking-info">
            <h2>What You're Booking with The Tuning Temple</h2>
            <p className="intro-text">
              When you book with The Tuning Temple, you're not just renting
              equipment — you're unlocking a signature immersive experience
              built around our Quantum Qube and speakerless multi-sensory sound
              system, with the option for fully custom visual content made just
              for your event.
            </p>

            <div className="feature-section">
              <h3>The Quantum Qube</h3>
              <p>
                The Quantum Qube is our crown jewel — a monumental LED infinity
                cube that becomes the visual heartbeat of your event.
              </p>
              <ul>
                <li>
                  One-of-a-kind LED art that shifts between ethereal ambient
                  moods and high-energy bursts.
                </li>
                <li>
                  Fully programmable effects that can be synced with your music,
                  timed to performances, or set to evolve throughout the night.
                </li>
                <li>
                  Immersive depth and motion created by infinity mirror
                  technology — a visual spectacle from every angle.
                </li>
              </ul>
            </div>

            <div className="feature-section">
              <h3>Speakerless Multi-Sensory Sound</h3>
              <p>
                We don't just play music — we translate it into a physical,
                full-body experience.
              </p>
              <p>
                Our speakerless sound system uses precision-engineered
                bass-resonating platforms and tactile transducers to deliver
                sound you feel as much as you hear. This technology bypasses
                traditional speakers, sending vibration directly into the body,
                surrounding guests in an invisible field of rhythm and tone.
              </p>

              <h4>Perfect for:</h4>
              <ul>
                <li>
                  Creating deep, meditative states during lounges or chill-out
                  sets.
                </li>
                <li>
                  Adding an unforgettable layer to live music or DJ
                  performances.
                </li>
                <li>
                  Bringing music to areas where traditional speakers aren't
                  practical.
                </li>
              </ul>
            </div>

            <div className="feature-section">
              <h3>Custom Artwork on Demand</h3>
              <p>
                Your visuals don't have to be stock. Our in-house artists can
                create bespoke visual content that aligns with your brand,
                theme, or performance style.
              </p>
              <ul>
                <li>
                  Designed specifically for the Quantum Qube's unique geometry.
                </li>
                <li>
                  Reactive or ambient loops that fit your event's mood arc.
                </li>
                <li>Fast turnaround for last-minute creative needs.</li>
              </ul>
            </div>

            <div className="feature-section">
              <h3>What's Included in Your Booking</h3>
              <ul>
                <li>
                  <strong>The Quantum Qube:</strong> fully installed,
                  programmed, and tailored to your space.
                </li>
                <li>
                  <strong>Speakerless Sound System:</strong> bass-resonating
                  platforms and tactile transducers installed and tuned for your
                  venue.
                </li>
                <li>
                  <strong>Setup & On-Site Operation:</strong> we handle
                  delivery, assembly, and live programming during your event.
                </li>
                <li>
                  <strong>Custom Content (optional):</strong> original art and
                  animations created specifically for your event.
                </li>
              </ul>
            </div>

            <div className="feature-section">
              <h3>Custom Quotes</h3>
              <p>
                Every event is unique — and so is every Tuning Temple
                installation.
              </p>
              <p>
                Our pricing is based on the scope of your event, the scale of
                the installation, and any custom content requests. Whether
                you're planning an intimate gathering, a corporate event, or a
                large-scale festival, we'll provide a tailored quote that
                reflects your exact needs.
              </p>
              <p className="cta-text">
                ➡️ Contact us today with your event details, and we'll build a
                custom package designed to transform your vision into reality.
              </p>
            </div>
          </div>

          {submitStatus === "success" ? (
            <div className="success-message">
              <h2>Message sent successfully!</h2>
              <p>We'll be in touch soon. Redirecting you back to home...</p>
            </div>
          ) : submitStatus === "error" ? (
            <div className="error-message">
              <h2>Error sending message</h2>
              <p>There was an error sending your message. Please try again.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell us about your project *</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  required
                  placeholder="Describe your project, timeline, and what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={submitStatus === "sending"}
              >
                {submitStatus === "sending"
                  ? "Sending..."
                  : "Send Booking Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

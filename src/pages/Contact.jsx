import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    phone: "",
    idNumber: "",
    comment: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra dữ liệu trống
    if (
      !message.name ||
      !message.email ||
      !message.phone ||
      !message.idNumber ||
      !message.comment ||
      !message.message
    ) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    // Kiểm tra số điện thoại
    if (message.phone.length < 10) {
      alert("Số điện thoại không hợp lệ!");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/message", {
        name: message.name,
        email: message.email,
        phone: message.phone,
        idNumber: message.idNumber,
        comment: message.comment,
        message: message.message,
      });

      alert("Gửi tin nhắn thành công!");
      console.log(response.data);

      // Reset form
      setMessage({
        name: "",
        email: "",
        phone: "",
        idNumber: "",
        comment: "",
        message: "",
      });
    } catch (error) {
      console.error("Lỗi khi gửi tin nhắn:", error);
      alert("Lỗi khi gửi tin nhắn!");
    }
  };

  return (
    <main>
      <div
        className="breadcrumb-section pt-190 pb-150"
        style={{
          backgroundImage: "url(assets/img/backgroud/page-title-bg.jpg)",
        }}
      >
        <div className="container">
          <h2 className="title">Contact</h2>
        </div>
      </div>

      <div className="contact-area pt-150 pb-150">
        <div className="container">
          <div className="contact-wrapper mb-80">
            <div className="section-title text-center mb-35">
              <h2>Send Us Message</h2>
            </div>

            <div className="main-contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xl-4">
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={message.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        value={message.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={message.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6">
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="idNumber"
                        placeholder="ID Number"
                        value={message.idNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6">
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="comment"
                        placeholder="Comment"
                        value={message.comment}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <div className="input-wrap">
                      <textarea
                        name="message"
                        placeholder="Write Your Message"
                        value={message.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-12 text-center">
                    <div className="submit-btn">
                      <button type="submit" className="theme-btn">
                        Submit Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="map-section mb--110">
        <iframe
          src="https://www.google.com/maps/embed?...your-map-link..."
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
};

export default Contact;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left ml-7">
        {/* Exclusive Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">Exclusive</h2>
          <p className="mb-4">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <form className="flex items-center border border-gray-500 rounded overflow-hidden" action="https://formcarry.com/s/VM8tEErotwQ" method="post">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-white p-2 w-full outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black p-2 hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 19l-7-7 7-7"></path>
                <path d="M3 12h18"></path>
              </svg>
            </button>
          </form>
        </div>
        {/* Support Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">Support</h2>
          <p>CSI,Ghaziabad</p>
          <p>raidivy3010@gmail.com</p>
          <p>6306392141</p>
        </div>
        {/* Account Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">Account</h2>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        {/* Quick Links Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">Quick Link</h2>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Download App Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">Download App</h2>
          <p className="mb-4">Save $3 with App New User Only</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <img
              src="https://cdn.qr-code-generator.com/qrcode-preview?background_color=%23ffffff&foreground_color=%23000000&marker_left_inner_color=%23000000&marker_left_outer_color=%23000000&marker_right_inner_color=%23000000&marker_right_outer_color=%23000000&marker_bottom_inner_color=%23000000&marker_bottom_outer_color=%23000000&marker_left_template=version17&marker_right_template=version17&marker_bottom_template=version17&qr_code_pattern=rounded-2&qr_code_text=https%3A%2F%2Fqrco.de%2FbfVzYC&frame_name=solution-dynamic-web-frame-01&frame_color=%23000000&frame_icon_name=&frame_text=SCAN%20ME&frame_text_color=%23FFFFFF&frame_text_font=noto-sans&frame_text_alignment=center&Expires=1729954620&Signature=GcSxqdQqGw57fvR1rjh-rONEpnwp67dYOp9~91ttI4QUxsc5YMMn8AzuEJI8i9Zus6CG37a2WZ~8g-tWV-44NM3oYjkJHnh8RiSGmIi9ZapQ~sceOvmW5sRKf0fw9-FQOK6xEVwUgOls3CPkIXWBt2uwyZElydz1vVQpAWWmZiwwhNI4QoWdZeqMVmYdDaj8rYVWFsAlZxj32s1yTqaco-NreH9baNsIvSsqQqN-9iNzkO1worY1UFxUGICCzltQPlMskPwjIlOt3PzVT9~3Le86LkJAC-NNuqp0PoSvltJmWntbbvmL2wI2~oVhVG~YcRFsTTGKI8yb4xorcqGxAQ__&Key-Pair-Id=KKMPOJU8AYATR"
              alt="QR Code"
              className="h-24"
            />
            <div className="space-y-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-8"
              />
              <img
                src="https://i.ibb.co/5KyMHpd/appstore.png"
                alt="App Store"
                className="h-8"
              />
            </div>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="h-5"
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="h-5"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000"
                alt="Twitter"
                className="h-6"
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="h-5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 text-center border-t border-gray-700 pt-6 text-sm">
        © Copyright Divya 2024. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

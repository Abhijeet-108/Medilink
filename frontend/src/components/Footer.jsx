import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
        {/* Left Section */}
        <div class="md:w-1/3 space-y-4">
          <h2 class="font-semibold text-lg">Medilink</h2>
          <p class="text-sm">MB-64,Mahishbatan<br/>sector V,Kolkata 700102</p>
          <div class="space-y-2">
            <a href="#" class="text-teal-300 hover:underline block">Find a Location</a>
            <a href="#" class="text-teal-300 hover:underline block">Contact Us</a>
          </div>
          <div class="flex space-x-4 mt-4">
            <a href="#" class="hover:text-teal-300">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" class="hover:text-teal-300">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" class="hover:text-teal-300">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" class="hover:text-teal-300">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="#" class="hover:text-teal-300">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>

        {/*  Center Section */}
        <div class="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h3 class="font-semibold">Education & Training</h3>
            <ul class="space-y-2 mt-2 text-sm">
              <li><a href="#" class="hover:underline">Careers</a></li>
              <li><a href="#" class="hover:underline">News & Events</a></li>
              <li><a href="#" class="hover:underline">Way to Give</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold">Centers & Departments</h3>
            <ul class="space-y-2 mt-2 text-sm">
              <li><a href="#" class="hover:underline">Cancer Center</a></li>
              <li><a href="#" class="hover:underline">Dermatology</a></li>
              <li><a href="#" class="hover:underline">Emergency Medicine</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold">News & Events</h3>
            <ul class="space-y-2 mt-2 text-sm">
              <li><a href="#" class="hover:underline">Latest News</a></li>
              <li><a href="#" class="hover:underline">Events</a></li>
              <li><a href="#" class="hover:underline">Media</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div class="mt-10 text-center text-sm border-t border-gray-400 pt-4">
        <p>© 2024 MEDILINK. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-2">
          <a href="#" class="text-teal-300 hover:underline">Privacy Policy</a>
          <a href="#" class="text-teal-300 hover:underline">Terms of Use</a>
          <a href="#" class="text-teal-300 hover:underline">Accessibility</a>
        </div>
      </div>
    </div>
    )
}

export default Footer

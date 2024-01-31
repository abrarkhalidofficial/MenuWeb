import React from "react";
import { NavLink } from "react-router-dom";

export default function Socialmedia() {
  return (
    <div className="socialmedia__popup">
      <div className="socialmedia__popup__content">
        <NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}

import React from "react";
import { navLinks } from "../util/constants";
import { Search, ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  return (
    <div className="w-full flex justify-between items-center px-8 py-4  text-white bg-black">
      <Button variant={"ghost"}>
        <FontAwesomeIcon icon={faApple} className="text-white w-4 h-4" />
      </Button>
      <ul className="flex w-fit items-center">
        {navLinks.map((link, key) => (
          <li key={key} className="inline mx-4">
            <a
              href={link.label}
              className="hover:bg-white/10 py-1 px-4 text-xs rounded-full transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <span className="flex items-center gap-2">
        <Button className="ml-4 p-2 rounded-full hover:bg-white/10 transition">
          <Search size={16} />
        </Button>
        <ShoppingCartIcon size={16} />
      </span>
    </div>
  );
};

import React, { useState } from "react";

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-gray-800 text-white">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl">My Website</h1>
        <div className="relative">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
          {isOpen && (
            <div className="absolute left-0 w-64 bg-gray-700 rounded shadow-lg mt-2">
              <div className="p-4">
                <h2 className="text-lg font-bold">Categories</h2>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <h3 className="font-semibold">Category 1</h3>
                    <ul>
                      <li>
                        <a href="#" className="block hover:underline">
                          Sub Item 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:underline">
                          Sub Item 2
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:underline">
                          Sub Item 3
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Category 2</h3>
                    <ul>
                      <li>
                        <a href="#" className="block hover:underline">
                          Sub Item 4
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:underline">
                          Sub Item 5
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:underline">
                          Sub Item 6
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MegaMenu;

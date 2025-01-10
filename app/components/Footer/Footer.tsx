// components/Footer.js
export const Footer = () => {
  return (
    <footer className="bg-sky-100 text-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row: Logo */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <img
              src="/logo.svg" // Replace with your logo's path
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
            {/* <p className="text-2xl font-semibold text-red-600 mt-2">MIB</p> */}
          </div>
        </div>

        {/* Second Row: Stay in Touch & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Stay in Touch */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-3">Stay In Touch</p>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-sky-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 4.5h1.5a2.25 2.25 0 012.25 2.25v1.18c0 .595-.236 1.169-.657 1.591l-.656.656a16.75 16.75 0 007.788 7.788l.656-.656c.422-.421.996-.657 1.591-.657h1.18a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25h-.375C6.45 21 3 13.65 3 9.375v-.375a2.25 2.25 0 012.25-2.25z"
                  />
                </svg>

                <a
                  href="tel:+919600261109"
                  className="text-gray-600 hover:text-gray-800"
                >
                  +91 9600261109
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-sky-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.981l7.5-4.039a2.25 2.25 0 012.134 0l7.5 4.039a2.25 2.25 0 011.183 1.98V19.5z"
                  />
                </svg>

                <a
                  href="mailto:Email@Email.com"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Email@Email.Com
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-right hidden md:block">
            <p className="text-lg font-semibold mb-3">Company</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Products
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Third Row: Divider Line */}
        <div className="border-t border-sky-200 my-6"></div>

        {/* Fourth Row: Copyright */}
        <div className="text-center">
          <p className="text-gray-500">© 2025 MIB. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

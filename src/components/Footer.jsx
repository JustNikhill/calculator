import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-1 mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}icon.svg`}
                alt="Coreva" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-semibold text-gray-900">Coreva</span>
            </div>
            <p className="text-gray-600 text-sm max-w-md">
              Enterprise AI coordination and execution platform. Deploy autonomous agents that automate workflows across your organization.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/product" className="text-sm text-gray-600 hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-gray-600 hover:text-gray-900">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-gray-600 hover:text-gray-900">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-sm text-gray-600 hover:text-gray-900">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/company" className="text-sm text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Coreva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

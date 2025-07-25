// app/components/footer.js
import { Github, Twitter, Dribbble, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Top section with brand and link columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand and Socials (spans 2 columns on larger screens) */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center space-x-2">
              <Sparkles className="h-7 w-7 text-white" />
              <span className="text-xl font-bold text-white">MyFonts</span>
            </a>
            <p className="mt-4 text-sm max-w-xs">
              A curated collection of beautiful fonts to inspire your next creative project.
            </p>
            <div className="flex space-x-5 mt-6">
              <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Dribbble size={20} /></a>
            </div>
          </div>

          {/* Column 2: Product Links */}
          <div>
            <h3 className="font-semibold text-white tracking-wider">Product</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Fonts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Icons</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h3 className="font-semibold text-white tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar with copyright and legal links */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} MyFonts, Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
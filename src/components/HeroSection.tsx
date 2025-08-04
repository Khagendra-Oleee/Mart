import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import reactIcon from '@/assets/react.png';
import phpIcon from '@/assets/php.webp';
import javaIcon from '@/assets/java.png';
import htmlIcon from '@/assets/html.jpg';
import cssIcon from '@/assets/css.jpg';
import pythonIcon from '@/assets/python.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      
      {/* Animated Avatar with Rotating Tech Stack Icons */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-15 sm:opacity-20">
        <div className="relative w-80 h-80 sm:w-96 sm:h-96">
          {/* Central Avatar Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center avatar-pulse">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
          </div>
          
          {/* Rotating Tech Stack Icons */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
            {/* React */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm orbit-icon tech-icon" style={{ animationDelay: '0s' }}>
              <img 
                src={reactIcon} 
                alt="React" 
                className="w-8 h-8 object-contain" 
              />
            </div>
            
            {/* Node.js */}
            <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm orbit-icon tech-icon" style={{ animationDelay: '0.5s' }}>
              <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.368,1.367 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.604 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,0.136,0.069,0.261,0.184,0.331c0.356,0.216,1.451,0.848,3.721,0.848c2.514,0,4.299-1.086,4.299-2.973"/>
              </svg>
            </div>
            
            {/* PHP */}
            <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 translate-y-1/2 w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm orbit-icon tech-icon" style={{ animationDelay: '1s' }}>
              <img 
                src={phpIcon} 
                alt="PHP" 
                className="w-8 h-8 object-contain" 
              />
            </div>
            
            {/* Tailwind */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm orbit-icon tech-icon" style={{ animationDelay: '1.5s' }}>
              <svg className="w-8 h-8 text-cyan-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
              </svg>
            </div>
            
            {/* Java */}
            <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm orbit-icon tech-icon" style={{ animationDelay: '2s' }}>
              <img 
                src={javaIcon} 
                alt="Java" 
                className="w-8 h-8 object-contain" 
              />
            </div>
            
            {/* TypeScript */}
            <div className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm orbit-icon tech-icon" style={{ animationDelay: '2.5s' }}>
              <svg className="w-8 h-8 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
              </svg>
            </div>
          </div>
          
          {/* Counter-rotating inner ring */}
          <div className="absolute inset-8 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
            {/* HTML */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500/30 rounded-full flex items-center justify-center orbit-icon" style={{ animationDelay: '0.2s' }}>
              <img 
                src={htmlIcon} 
                alt="HTML" 
                className="w-full h-full object-contain" 
              />
            </div>
            
            {/* CSS */}
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center orbit-icon" style={{ animationDelay: '0.7s' }}>
              <img 
                src={cssIcon} 
                alt="CSS" 
                className="w-full h-full object-contain" 
              />
            </div>
            
            {/* Python */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-yellow-500/30 rounded-full flex items-center justify-center orbit-icon" style={{ animationDelay: '1.2s' }}>
              <img 
                src={pythonIcon} 
                alt="Python" 
                className="w-full h-full object-contain" 
        />
      </div>

            {/* Database/SQL */}
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-cyan-500/30 rounded-full flex items-center justify-center orbit-icon" style={{ animationDelay: '1.7s' }}>
              <svg className="w-6 h-6 text-cyan-600" viewBox="0 0 24 24" fill="currentColor">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />

      {/* Enhanced Floating Elements - More Professional */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="hero-float absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500/30 rounded-full opacity-40" />
        <div className="hero-float absolute top-1/3 right-1/4 w-2 h-2 bg-indigo-500/40 rounded-full opacity-50" style={{ animationDelay: '2s' }} />
        <div className="hero-float absolute bottom-1/3 left-1/3 w-4 h-4 bg-slate-400/20 rounded-full opacity-30" style={{ animationDelay: '4s' }} />
        <div className="hero-float absolute top-2/3 right-1/3 w-2 h-2 bg-blue-400/30 rounded-full opacity-35" style={{ animationDelay: '6s' }} />
        <div className="hero-float absolute bottom-1/4 right-1/5 w-3 h-3 bg-indigo-400/25 rounded-full opacity-40" style={{ animationDelay: '8s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Main Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 animate-[fadeInUp_1s_ease-out] leading-tight">
            <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent block mb-2 sm:mb-3 drop-shadow-sm">
              Code That Converts.
            </span>
            <span className="text-slate-700 block drop-shadow-sm">Design That Delivers.</span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 mb-10 sm:mb-12 lg:mb-14 max-w-4xl mx-auto animate-[fadeInUp_1s_ease-out_0.3s_both] leading-relaxed px-2 sm:px-0 font-medium">
            Empowering startups, colleges, and brands with
            <span className="text-blue-700 font-semibold"> high-performing websites</span> built on modern technology stacks.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center animate-[fadeInUp_1s_ease-out_0.6s_both] px-2 sm:px-0">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-base sm:text-lg px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 group w-full sm:w-auto">
              Get a Quote
                <ArrowRight className="ml-3 h-5 sm:h-6 w-5 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            </Link>
            
            <Link to="/portfolio" className="w-full sm:w-auto">
              <Button variant="outline" className="btn-outline-hero text-blue-700 bg-white/80 backdrop-blur-sm hover:bg-blue-100 text-base sm:text-lg px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1"
              >
                <Play className="mr-3 h-5 sm:h-6 w-5 sm:w-6 group-hover:scale-110 transition-transform duration-300" />
              View Our Work
            </Button>
            </Link>
          </div>

          {/* Enhanced Tech Stack Preview */}
          <div className="mt-16 sm:mt-20 animate-[fadeInUp_1s_ease-out_0.9s_both]">
            <p className="text-slate-500 mb-8 sm:mb-10 text-base sm:text-lg lg:text-xl font-medium">
              Built with modern technologies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10 opacity-75 px-2 sm:px-0">
              {/* React */}
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-500/15 rounded-lg flex items-center justify-center p-1">
                  <img 
                    src={reactIcon} 
                    alt="React" 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-700">React</span>
              </div>
              
              {/* Node.js */}
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-green-500/15 rounded-lg flex items-center justify-center">
                  <svg className="w-4 sm:w-6 h-4 sm:h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.368,1.367 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.604 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,0.136,0.069,0.261,0.184,0.331c0.356,0.216,1.451,0.848,3.721,0.848c2.514,0,4.299-1.086,4.299-2.973"/>
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-700">Node.js</span>
              </div>
              
              {/* PHP */}
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-purple-500/15 rounded-lg flex items-center justify-center p-1">
                  <img 
                    src={phpIcon} 
                    alt="PHP" 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-700">PHP</span>
              </div>
              
              {/* Java */}
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-orange-500/15 rounded-lg flex items-center justify-center p-1">
                  <img 
                    src={javaIcon} 
                    alt="Java" 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-700">Java</span>
              </div>
              
              {/* Tailwind CSS */}
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-cyan-500/15 rounded-lg flex items-center justify-center">
                  <svg className="w-4 sm:w-6 h-4 sm:h-6 text-cyan-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-700">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
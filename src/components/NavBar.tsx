import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <nav className="fixed top-0 left-0 right-0 z-[999] bg-[#20222F] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-[#f9f96c]">내일모래</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="#" className="text-[#fafafa] hover:text-white px-3 py-2">회사소개</Link>
              <Link to="#" className="text-[#fafafa] hover:text-white px-3 py-2">서비스</Link>
              <Link to="/contact" className="text-[#fafafa] hover:text-white px-3 py-2">문의하기</Link>
              <Link to="/privacy" className="text-[#fafafa] hover:text-white px-3 py-2">개인정보처리방침</Link>

              <Link to="/withdrawal" className="text-red-600 hover:text-red-700 px-3 py-2">회원탈퇴</Link>
            </div>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#fafafa] hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* 모바일 메뉴 */}
          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-[#20222F] shadow-lg`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="#" className="text-[#fafafa] hover:text-white block px-3 py-2">회사소개</Link>
              <Link to="#" className="text-[#fafafa] hover:text-white block px-3 py-2">서비스</Link>
              <Link to="/contact" className="text-[#fafafa] hover:text-white block px-3 py-2">문의하기</Link>
              <Link to="/privacy" className="text-[#fafafa] hover:text-white block px-3 py-2">개인정보처리방침</Link>
              <Link to="/withdrawal" className="text-red-600 hover:text-red-700 block px-3 py-2">회원탈퇴</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
}
export default NavBar;

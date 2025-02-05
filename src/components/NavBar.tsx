import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">내일모래</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">회사소개</Link>
              <Link to="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">서비스</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2">문의하기</Link>
              <Link to="/privacy" className="text-gray-700 hover:text-gray-900 px-3 py-2">개인정보처리방침</Link>

              <Link to="/withdrawal" className="text-red-600 hover:text-red-700 px-3 py-2">회원탈퇴</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
}
export default NavBar;

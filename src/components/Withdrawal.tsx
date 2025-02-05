import NavBar from "./NavBar";

const Withdrawal = () => {
    return (
        <div className="min-h-screen bg-white">
            <NavBar />
            <div className="max-w-4xl mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">회원탈퇴</h1>
                
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-6">
                        <p className="text-gray-700 text-base mb-4">
                            회원탈퇴를 진행하기 전에 아래 내용을 반드시 확인해주세요:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                            <li>탈퇴 시 모든 개인정보가 삭제되며 복구가 불가능합니다.</li>
                            <li>진행 중인 거래나 문의가 있는 경우 처리 완료 후 탈퇴해주세요.</li>
                            <li>탈퇴 후 재가입은 30일 후에 가능합니다.</li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            비밀번호 확인
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="password" 
                            type="password" 
                            placeholder="비밀번호를 입력하세요"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600"/>
                            <span className="ml-2 text-gray-700">위 내용을 모두 확인하였으며, 회원탈퇴에 동의합니다.</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-center">
                        <button 
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            type="button"
                        >
                            회원탈퇴
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Withdrawal;

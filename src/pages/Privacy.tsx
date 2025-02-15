import NavBar from "../components/NavBar";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#16161F] to-[#2B2D3E]">
            <NavBar />
            <div className="max-w-4xl mx-auto py-8 px-4 pt-20">
                <h1 className="text-3xl font-bold text-white mb-8">개인정보처리방침</h1>
                
                <div className="space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-200 mb-4">1. 개인정보의 처리 목적</h2>
                        <p className="text-gray-300">
                            내일모래는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-200 mb-4">2. 개인정보의 처리 및 보유기간</h2>
                        <p className="text-gray-300">
                            내일모래는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-200 mb-4">3. 개인정보의 제3자 제공</h2>
                        <p className="text-gray-300">
                            내일모래는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-200 mb-4">4. 정보주체의 권리·의무 및 행사방법</h2>
                        <p className="text-gray-300">
                            정보주체는 내일모래에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-200 mb-4">5. 개인정보의 안전성 확보조치</h2>
                        <p className="text-gray-300">
                            내일모래는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
                            - 관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육
                            - 기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화
                            - 물리적 조치: 전산실, 자료보관실 등의 접근통제
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Privacy;
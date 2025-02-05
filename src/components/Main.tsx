import NavBar from './NavBar';
const Main = () => {
    return (
        <div className="min-h-screen bg-white">
            <NavBar />

            {/* 메인 섹션 */}
            <main>
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              따뜻한 마음을 전하는 내일모래
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              내일모래는 진심 어린 마음으로 여러분의 일상에 따스한 온기를 전합니다
            </p>
            <p className="mt-2 text-lg text-gray-500">
              작은 관심과 배려로 시작되는 우리의 여정에 함께해주세요
            </p>
          </div>
        </div>
      </main>
    </div>
    )
}

export default Main;
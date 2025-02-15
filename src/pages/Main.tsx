import NavBar from '../components/NavBar';
const Main = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#16161F] to-[#2B2D3E] relative overflow-hidden">
            <NavBar />
            
            {/* 메인 섹션 */}
            <main className="relative flex items-end h-screen pb-32">
                {/* 별들 섹션 */}
                <div className="absolute top-0 w-full h-[70vh]">
                    <div className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Star className="absolute left-[15%] top-[20%]" />
                        <GlowingStar className="absolute left-[25%] top-[35%]" />
                        <Star className="absolute left-[40%] top-[15%]" />
                        <GlowingStar className="absolute left-[55%] top-[25%]" />
                        <Star className="absolute left-[70%] top-[30%]" />
                        <GlowingStar className="absolute left-[85%] top-[20%]" />
                        <Star className="absolute left-[10%] top-[45%]" />
                        <GlowingStar className="absolute left-[30%] top-[50%]" />
                        <Star className="absolute left-[50%] top-[40%]" />
                        <GlowingStar className="absolute left-[75%] top-[45%]" />
                        <Star className="absolute left-[90%] top-[35%]" />
                    </div>
                </div>

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 mb-20">
                    <div className="text-center">
                        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
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

const Star = ({ className = "" }) => {
    return (
        <img 
            className={className}
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" 
            alt="Star" 
            width="40" 
            height="40" 
        />
    )
}

const GlowingStar = ({ className = "" }) => {
    return (
        <img 
            className={className}
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Glowing%20Star.png" 
            alt="Glowing Star" 
            width="40" 
            height="40" 
        />    
    )
}






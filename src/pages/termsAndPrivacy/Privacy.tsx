import NavBar from "../../components/NavBar";
import { PrivacyConstant } from "../../constants/TermsAndPrivacy";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#16161F] to-[#2B2D3E]">
            <NavBar />
            <div className="max-w-4xl mx-auto py-8 px-4 pt-20">
                <h1 className="text-3xl font-bold text-white mb-8">{PrivacyConstant.title}</h1>
                
                <div className="space-y-6">
                    {PrivacyConstant.sections.map((section) => (
                        section.id && section.title && ( // null check
                            <section key={section.id}>
                                <h2 className="text-xl font-semibold text-gray-200 mb-4">
                                    {section.title}
                                </h2>
                                {section.content && (
                                    <p className="text-gray-300 whitespace-pre-line">
                                        {section.content}
                                    </p>
                                )}
                            </section>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Privacy;
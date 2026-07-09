import React, { useState } from "react";
import "../styles/Faq.css";

const faqData = [
    {
        question: "What does Studio Spatia offer?",
        answer:
            "Studio Spatia provides consultative architecture and interior design services online. We specialize in concept development, spatial planning, and design strategy—without execution / physical construction or procurement."
    },
    {
        question: "How is your service delivered?",
        answer:
            "All services are delivered digitally. Clients receive design proposals, mood boards, layouts, and recommendations via email, video consultations, and downloadable packages."
    },
    {
        question: "Do you take on-site measurements or supervise construction?",
        answer:
            "No. Studio Spatia operates as a remote design partner. We guide clients through design decisions but do not conduct site visits, supervise execution, or coordinate vendors."
    },
    {
        question: "What do I need to get started?",
        answer:
            "You’ll need to share basic project details—site dimensions, photos, goals, and preferences. We’ll guide you through a structured intake process to ensure clarity and alignment."
    },
    {
        question: "Can I customize the design package?",
        answer:
            "Yes. We offer tiered packages based on scope and complexity. You can choose the level of detail and support that suits your needs."
    },
    {
        question: "How long does it take to receive my design?",
        answer:
            "Most concept packages are delivered within 3 to 10 business days after intake is complete. Timelines are confirmed during onboarding."
    },
    {
        question: "What if I need revisions?",
        answer:
            "Each package includes a defined number of revision rounds. Additional changes can be requested at an hourly rate or through an upgrade."
    },
    {
        question: "Is my data and project information secure?",
        answer:
            "Absolutely. We follow strict confidentiality protocols and never share client data or project details without consent."
    },
    {
        question: "How do I contact Studio Spatia?",
        answer:
            "You can reach us at +91 90477 88033 or contactus@studiospatia.com. We typically respond within 1–2 business days."
    },
    {
        question: "How is “per room” calculated?",
        answer:
            "Each room is defined as a space up to 150 square feet. Rs 2500 extra for every additional 50 sqft."
    },
    {
        question: "Are there limits to the built-up area covered in standard packages?",
        answer:
            "Packages are designed for built-up areas up to 2500 sqft. Larger projects receive a customized quote."
    },
    {
        question: "Do you offer special pricing for builders and contractors?",
        answer:
            "Yes. We offer customized pricing for builders, contractors, and developers requiring repeat or bulk design support."
    }
];

// Speech bubble with question dots — top-left
const QuestionIcon = () => (
    <svg width="150" height="110" viewBox="0 0 150 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20 Q18 18 22 17 L110 15 Q118 15 118 25 L118 55 Q118 63 110 63 L55 63 L35 80 L38 63 L22 63 Q14 63 15 53 Z"
            stroke="#9c6b30" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="60" y="45" fontSize="26" fontFamily="serif" fill="#9c6b30">?</text>
        <path d="M100 30 Q104 28 108 30 Q112 32 110 36" stroke="#9c6b30" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="120" cy="20" r="2" fill="#9c6b30" />
        <circle cx="130" cy="30" r="1.5" fill="#9c6b30" />
        <circle cx="128" cy="12" r="1.5" fill="#9c6b30" />
    </svg>
);

// Lightbulb with rays — bottom-left
const BulbIcon = () => (
    <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 20 C40 20 28 34 28 52 C28 66 36 74 42 82 C46 88 46 92 46 96 L74 96 C74 92 74 88 78 82 C84 74 92 66 92 52 C92 34 80 20 60 20 Z"
            stroke="#9c6b30" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M48 104 L72 104 M50 112 L70 112 M54 120 L66 120"
            stroke="#9c6b30" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M60 32 L58 55 M53 40 L67 50" stroke="#9c6b30" strokeWidth="1.5" strokeLinecap="round" />

        {/* rays */}
        <line x1="60" y1="4" x2="60" y2="14" stroke="#9c6b30" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="22" y1="14" x2="30" y2="22" stroke="#9c6b30" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="98" y1="14" x2="90" y2="22" stroke="#9c6b30" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="6" y1="52" x2="16" y2="52" stroke="#9c6b30" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="114" y1="52" x2="104" y2="52" stroke="#9c6b30" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="14" y1="90" x2="24" y2="84" stroke="#9c6b30" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="106" y1="90" x2="96" y2="84" stroke="#9c6b30" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);

// Floor plan with ruler — architecture / interior design side
const FloorPlanIcon = () => (
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* outer wall */}
        <rect x="20" y="20" width="110" height="90" stroke="#9c6b30" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        {/* interior wall dividing rooms */}
        <path d="M75 20 L75 65" stroke="#9c6b30" strokeWidth="2" />
        <path d="M20 65 L130 65" stroke="#9c6b30" strokeWidth="2" />
        {/* door swing (arc) in one room */}
        <path d="M75 65 L75 90" stroke="#9c6b30" strokeWidth="1.5" />
        <path d="M75 90 A25 25 0 0 0 100 65" stroke="#9c6b30" strokeWidth="1" fill="none" strokeDasharray="3 3" />
        {/* window marks on outer wall */}
        <path d="M35 20 L55 20" stroke="#9c6b30" strokeWidth="4" />
        <path d="M95 110 L115 110" stroke="#9c6b30" strokeWidth="4" />
        {/* small table/furniture square in top-right room */}
        <rect x="95" y="30" width="20" height="20" stroke="#9c6b30" strokeWidth="1.5" fill="none" />
        {/* ruler / scale bar below plan */}
        <path d="M20 130 L130 130" stroke="#9c6b30" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 125 L20 135 M42 127 L42 133 M64 127 L64 133 M86 127 L86 133 M108 127 L108 133 M130 125 L130 135"
            stroke="#9c6b30" strokeWidth="1.5" strokeLinecap="round" />
        {/* pencil crossing the ruler */}
        <path d="M100 145 L140 118" stroke="#9c6b30" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M140 118 L146 114 L142 122 Z" fill="#9c6b30" />
    </svg>
);

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">

            <div className="faq-icon faq-icon-top-left">
                <QuestionIcon />
            </div>
            <div className="faq-icon faq-icon-left">
                <BulbIcon />
            </div>
            <div className="faq-icon faq-icon-right">
                <FloorPlanIcon />
            </div>

            <h2 className="faq-title">Frequently Asked Questions</h2>

            <div className="faq-container">
                {faqData.map((item, index) => (
                    <div className="faq-item" key={index}>
                        <button
                            className={`faq-question ${activeIndex === index ? "active" : ""
                                }`}
                            onClick={() => toggleFAQ(index)}
                        >
                            {item.question}
                            <span className="arrow">
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        <div
                            className="faq-answer"
                            style={{
                                maxHeight: activeIndex === index ? "300px" : "0px"
                            }}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
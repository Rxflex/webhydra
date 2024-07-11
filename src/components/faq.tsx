import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

type ItemsType = {
    id: string
    question: string
    answer: string
}[]

export function FAQAccordion ({items}: {items: ItemsType}) {
    const [activeAccordion, setActiveAccordion] = useState('');

    const toggleAccordion = (id: string) => {
        setActiveAccordion(activeAccordion === id ? '' : id);
    };

    return (
        <div>
            {items.map((faq, index) => (
                <div className="w-full mb-8" key={index}>
                    <a className="block border-b border-gray-300 cursor-pointer" onClick={() => toggleAccordion(faq.id)}>
                        <div className="flex flex-wrap justify-between py-7 -m-1.5">
                            <div className="flex-1 p-1.5">
                                <div className="flex flex-wrap -m-1.5">
                                    <div className="w-auto p-1.5">
                                        <FontAwesomeIcon icon={activeAccordion === faq.id ? faChevronUp : faChevronDown} className="text-indigo-600" />
                                    </div>
                                    <div className="flex-1 p-1.5">
                                        <h3 className="font-semibold leading-normal">{faq.question}</h3>
                                        <div style={{ maxHeight: activeAccordion === faq.id ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.2s ease-out' }} className="transition-all duration-500">
                                            <p className="mt-4 mb-5 text-gray-600 font-medium leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}
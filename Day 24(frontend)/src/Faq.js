import React, { useEffect, useState } from 'react';
import './Faq.css';
import { useNavigate } from 'react-router-dom';

export default function Faq() {
    const [expandedFAQs, setExpandedFAQs] = useState([]);
    const nav=useNavigate();
   const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/login")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);

  const faqs = [
    {
      question: 'Can I see the photographer’s profile before I book?',
      answer: ' Of course! You can view each photographer’s profile from their city page! Select your destination here. When you have chosen your favourite photographer check their availability with our concierge team by submitting an inquiry.',
    },
    {
      question: 'What if I am running late??',
      answer: 'Please text or email your photographer if you are delayed. If you arrive late, keep in mind your photographer may have another shoot booked right after, and it’s unlikely your shoot can be extended. We suggest arriving early and even having a drink nearby so you don’t begin your experience in a ‘rushed’ state of mind. Remember: traffic in big cities can be unpredictable.',
    },
    {
        question: 'Who can join a photo tour?',
        answer: 'Anyone, really.  As long as your fairly outgoing, have a keen desire to shoot travel photography, and can pay the bill, you’re more than welcome on one of the photography workshops.',
    },
    {
        question: 'I’m a traveller – is it free for me to use the website ?',
        answer: 'The website is completely free, for travellers and for tour guides.Payment for guiding services should be arranged direct between tour guide and traveller.',
    },
    {
        question: 'How can I leave a Feedback of the tour guide ?',
        answer: 'You can give your feedback after using the website according to your wish.',
    },
    {
        question: 'More Questions?',
        answer: 'If you have further questions, please feel free to get a hold of me via my contact page.',
    },
  ];
  const toggleFAQ = (index) => {
    if (expandedFAQs.includes(index)) {
      setExpandedFAQs(expandedFAQs.filter((item) => item !== index));
    } else {
      setExpandedFAQs([...expandedFAQs, index]);
    }
  };
  return (
    <div className='ran'>
    <div className='rectangle88'>
    <div className='kab'>
    <img src="https://img.freepik.com/premium-vector/frequently-asked-questions-people-standing-near-giant-faq-exclamations-question-marks-clients-ask-questions-search-receive-answers-help-information-instruction-online-support-center_458444-1475.jpg" height="300px" width="800px"/>
    </div>
    
    <div className="faq-container">
   
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`faq-question ${expandedFAQs.includes(index) ? 'expanded' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </div>
            {expandedFAQs.includes(index) && <div className="faq-answer">{faq.answer}</div>}
          </div>
        
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}
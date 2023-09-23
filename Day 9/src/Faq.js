import React from 'react'
import './Faq.css'

export default function Faq() {
  return (
    <div className='faq-container'>
    <div className='faqname'>
    <h3>Frequently asked Questions</h3></div>
    <div className="faq">
  <input id="faq-a" type="checkbox" />
  <label htmlFor="faq-a">
    <p className="faq-heading">~Can I see the photographer’s profile before I book?</p>
    <div className="faq-arrow" />
    <p className="faq-text">
    Of course! You can view each photographer’s profile from their city page! Select your destination here. When you have chosen your favourite photographer check their availability with our concierge team by submitting an inquiry.
    </p>
  </label>
  <input id="faq-b" type="checkbox" />
  <label htmlFor="faq-b">
    <p className="faq-heading">
     ~What if I am running late?
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
    Please text or email your photographer if you are delayed. If you arrive late, keep in mind your photographer may have another shoot booked right after, and it’s unlikely your shoot can be extended. We suggest arriving early and even having a drink nearby so you don’t begin your experience in a ‘rushed’ state of mind. Remember: traffic in big cities can be unpredictable.
    </p>
  </label>
  <input id="faq-c" type="checkbox" />
  <label htmlFor="faq-c">
    <p className="faq-heading">~Can I book a Wanderlenses photographer for my wedding? </p>
    <div className="faq-arrow" />
    <p className="faq-text">
    Wanderlenses is not set up to service weddings, unfortunately. We will make referrals to photographers on special request! We do have the option of a portrait session before or after your ceremony, to capture your newlywed memories.
    </p>
  </label>
  <input id="faq-d" type="checkbox" />
  <label htmlFor="faq-d">
    <p className="faq-heading">
     ~Who can join a photo tour?
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
    Anyone, really.  As long as your fairly outgoing, have a keen desire to shoot travel photography, and can pay the bill, you’re more than welcome on one of the photography workshops.
    </p>
  </label>
  <input id="faq-e" type="checkbox" />
  <label htmlFor="faq-e">
    <p className="faq-heading">~I’m a traveller – is it free for me to use the website ?</p>
    <div className="faq-arrow" />
    <p className="faq-text">
    The website is completely free, for travellers and for tour guides.
    Payment for guiding services should be arranged direct between tour guide and traveller.
    </p>
  </label>
  <input id="settings" type="checkbox" />
  <input id="faq-f" type="checkbox" />
  <label htmlFor="faq-f">
    <p className="faq-heading">
    ~MORE QUESTIONS?
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
    If you have further questions, please feel free to get a hold of me via my contact page.
    </p>
  </label>
</div>

    </div>
  )
}

import React from 'react'
import './Review.css'
function Review() {
  return (
    <div>
    <div className="container">
  <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
    <h1
      className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg">
      Read Customer Reviews
    </h1>
  </div>
  <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
    <li>
      <img
        src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg "
        className="wpx-100 img-round mgb-20"
        title=""
        alt=""
        data-edit="false"
        data-editor="field"
        data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
      />
      <p className="fs-110 font-cond-l" contentEditable="false">
       "I recently had the pleasure of experiencing the stunning landscape photography of Steve, and I must say, I was utterly captivated by their work."
      </p>
      <h5 className="font-12" contentEditable="false"><br></br>
        Martha Stewart
      </h5>
    </li>
    <li>
      <img
        src="https://images.flytographer.com/57629830-51ce-4e19-9aba-ae9df2cb2c06/naples-italy-09-21-2023-couples-trip-15_500.jpeg"
        className="wpx-100 img-round mgb-20"
        title=""
        alt=""
        data-edit="false"
        data-editor="field"
        data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
      />
      <p className="fs-110 font-cond-l" contentEditable="false">
        "Victoria was AMAZING! She knew all the best spots and we love our photos! She was super informative while we were waking around and it was like we had our own private tour guide."
      </p>
      <h5 className="font-12" contentEditable="false">
        Ariana Menage
      </h5>
    </li>
    <li>
      <img
        src="https://images.flytographer.com/3b64379b-e6c6-4040-aa3d-985fa14cb7b6/paris-09-09-2023-proposal-5_500.jpeg"
        className="wpx-100 img-round mgb-20"
        title=""
        alt=""
        data-edit="false"
        data-editor="field"
        data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
      />
      <p className="fs-110 font-cond-l" contentEditable="false">
        "We had such a great experience with the amazing photographer and lovely, Emma! She did a great job to make us feel comfortable and her expertise shown through the final photos which we received very quickly."
      </p>
      <h5 className="font-12" contentEditable="false">
        Sean Carter
      </h5>
    </li>
  </ul>
</div>

    </div>
  )
}

export default Review
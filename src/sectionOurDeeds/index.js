import "./../style/ourDeeds.css";
import { OurSeedsImgArr } from "./../text_constant/constant"
import { SRLWrapper } from "simple-react-lightbox";


const OurDeeds = () => {
  return (
    <SRLWrapper>
      <div className="ourDeeds_section">

        {OurSeedsImgArr.map((img, index) => {
          return (
            <div
              className="img_galer"
              key={index}
            >
              <a
                href={img}
                key={index}
              >
                <img
                  src={img}
                  alt="vårt arbete"
                  key={index}
                />
              </a>
            </div>
          )
        })}

      </div>
    </SRLWrapper>
  )
}

export default OurDeeds;
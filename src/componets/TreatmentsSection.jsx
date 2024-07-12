import React from "react";
import { Container } from "react-bootstrap";
import { card } from "./Helper";

const TreatmentsSection = () => {
  return (
    <>
      <section className="bg_img">
        <Container> 
          <div className="big_box bg_green">
            <div className=" d-flex align-items-center gap_15 justify-content-center">
              <div className="top_small_line"></div>
              <h3 className=" ff_Kaushan  mb-0 fw-normal text-32  lh-46 color_green ">
                Cutting Edge Technology
              </h3>
              <div className="top_small_line"></div>
            </div>
            <h2 className=" ff_Archivo fw-semibold mt_10 text-48 mb-0 lh-62 text-center color_lightblack">
              Devices and Treatments to meet{" "}
              <span className=" d-block"> your needs</span>
            </h2>
<div className=" d-flex   align-items-center gap_40 mt_60 flex-wrap  flex-lg-nowrap justify-content-center">
            {card.map((data, index) => (
              <>
                <div className="divices_card">
                  <img className=" w-100" src={data.img} alt="divieces" />
                  <div className=" text_padding">
                  <h4 className=" ff_Archivo fw-semibold text-25 lh-32 color_lightblack ">
                    {data.heading}
                  </h4>
                  <p className=" ff_Archivo fw-normal text-16 lh-24 color_lightblack opacity-75 mt-3">
                    {data.pheragraph}
                  </p>
                  <button className=" commonbtn text-white ff_Archivo fw-semibold ">{data.buttontext}</button>
                  </div>
                </div>
              </>
            ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TreatmentsSection;

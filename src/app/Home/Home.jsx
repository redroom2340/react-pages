import React, {useState} from "react";
import "./Home.scss";
// import Carousel from "react-bootstrap/Carousel";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import Modal from "react-bootstrap/Modal";  
import Button from "react-bootstrap/Button";
function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="home">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="">
        <div className="">
          <div className="Wall red-2w31">
            <div className="App-header">
              <div>
               
                <div className="red-2q31">
                <Swiper
                  //  
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
                </div>
              </div>
              <div className="story-section-data">
                <div>
                  <div className="red-3453">
                    <br />
                    <h2 className="red-3454">STORY LEST</h2>
                    <hr />
                  </div>
                </div>
                <div className="red-2395w">
                  <div className="red-4395w" onClick={handleShow}></div>
                  <div className="red-4395w" onClick={handleShow}></div>
                  <div className="red-4395w" onClick={handleShow}></div>
                  <div className="red-4395w" onClick={handleShow}></div>
                  <div className="red-4395w" onClick={handleShow}></div>
                  <div className="red-4395w" onClick={handleShow}></div>
                  <div className="red-4395w" onClick={handleShow}></div>
                  <div className="red-4395w"></div>
                  <div className="red-4395w"></div>
                  <div className="red-4395w"></div>
                  <div className="red-4395w"></div>
                  <div className="red-4395w"></div>
                  <div className="red-4395w"></div>
                </div>
              </div>
              <div className="section-data-lest">
                <div>
                  <div className="red-3453">
                    <br />
                    <h2 className="red-3454">MOVE LEST</h2>
                    <hr />
                  </div>
                </div>
                <div className="data-lest">
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                </div>
              </div>
              <div className="section-data-lest">
                <div>
                  <div className="red-3453">
                    <br />
                    <h2 className="red-3454">new</h2>
                    <hr />
                  </div>
                </div>
                <div className="data-lest">
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                </div>
              </div>
              <div className="section-data-lest">
                <div>
                  <div className="red-3453">
                    <br />
                    <h2 className="red-3454">MOVE LEST</h2>
                    <hr />
                  </div>
                </div>
                <div className="data-lest">
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                </div>
              </div>
              <div className="section-data-lest">
                <div>
                  <div className="red-3453">
                    <br />
                    <h2 className="red-3454">MOVE LEST</h2>
                    <hr />
                  </div>
                </div>
                <div className="data-lest">
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                </div>
              </div>
              <div className="section-data-lest">
                <div>
                  <div className="red-3453">
                    <br />
                    <h2 className="red-3454">MOVE LEST</h2>
                    <hr />
                  </div>
                </div>
                <div className="data-lest">
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                  <div className="red-2534w"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Myslides = () => {
const first = React.useRef(null);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className="#">
                <button className="btn_width" onClick={() => first?.current?.slickNext()}>
                    next
                </button>
            </div>
            <div className="#">
                <button className="btn_width" onClick={() => first?.current?.slickPrev()}>
                    prev
                </button>
            </div>
            <Slider ref={first} {...settings}>
                
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, veritatis nulla. Quae doloremque sunt sapiente molestias laboriosam ea eius culpa saepe ut exercitationem! Perferendis nisi sapiente porro unde ipsam et placeat explicabo possimus laborum reiciendis. Culpa aspernatur officia earum laudantium voluptatibus, inventore corrupti error aliquid perspiciatis neque quidem fuga suscipit consequatur perferendis ad eos voluptatum maxime laborum consectetur eius quisquam odio quo in explicabo! Magni tempora possimus aspernatur ad illo voluptatibus dolorum quidem itaque totam fuga atque veritatis nemo blanditiis nulla sapiente deserunt, aperiam optio quisquam impedit quaerat? Rerum eaque omnis mollitia, blanditiis ipsa corporis cupiditate voluptate obcaecati optio perspiciatis!
                    </p>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, veritatis nulla. Quae doloremque sunt sapiente molestias laboriosam ea eius culpa saepe ut exercitationem! Perferendis nisi sapiente porro unde ipsam et placeat explicabo possimus laborum reiciendis. Culpa aspernatur officia earum laudantium voluptatibus, inventore corrupti error aliquid perspiciatis neque quidem fuga suscipit consequatur perferendis ad eos voluptatum maxime laborum consectetur eius quisquam odio quo in explicabo! Magni tempora possimus aspernatur ad illo voluptatibus dolorum quidem itaque totam fuga atque veritatis nemo blanditiis nulla sapiente deserunt, aperiam optio quisquam impedit quaerat? Rerum eaque omnis mollitia, blanditiis ipsa corporis cupiditate voluptate obcaecati optio perspiciatis!
                    </p>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, veritatis nulla. Quae doloremque sunt sapiente molestias laboriosam ea eius culpa saepe ut exercitationem! Perferendis nisi sapiente porro unde ipsam et placeat explicabo possimus laborum reiciendis. Culpa aspernatur officia earum laudantium voluptatibus, inventore corrupti error aliquid perspiciatis neque quidem fuga suscipit consequatur perferendis ad eos voluptatum maxime laborum consectetur eius quisquam odio quo in explicabo! Magni tempora possimus aspernatur ad illo voluptatibus dolorum quidem itaque totam fuga atque veritatis nemo blanditiis nulla sapiente deserunt, aperiam optio quisquam impedit quaerat? Rerum eaque omnis mollitia, blanditiis ipsa corporis cupiditate voluptate obcaecati optio perspiciatis!
                    </p>
                </div>
            </Slider>
        </div>
    )
}

export default Myslides

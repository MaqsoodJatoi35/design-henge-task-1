import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./style.css";
import TestimonialSliderItem from "../TestinomialSliderItem";

const testimonials = [
  {
    header: "Best financial decision ever!",
    author: "Maqsood",
    image: "testinomial-1.jpg",
    text: "Maqsood Ahmed Jatoi, Lorem ipsum dolor sit, adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.",
    location: "Pak, Khi",
  },
  {
    header: "Best financial decision ever!",
    author: "Aarav Lynn",
    image: "testinomial-1.jpg",
    text: "Maqsood Ahmed Jatoi, Lorem ipsum dolor sit, adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.",
    location: "Pak, Khi",
  },
  {
    header: "Best financial decision ever!",
    author: "Aarav Lynn",
    image: "testinomial-1.jpg",
    text: "Maqsood Ahmed Jatoi, Lorem ipsum dolor sit, adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.",
    location: "Pak, Khi",
  },
];

const TestimonialSlider = () => {
  return (
    <>
      <section className="testinomials">
        <Container className="testinomials-container py-3">
          <Row>
            <Col className="text-center">
              <h5 className="heading-testimonials">
                Testimonials Slider Design By Maqsood
              </h5>
            </Col>
          </Row>
          <Row className="justify-content-center mt-md-5 mt-sm-3 mt-1">
            <Col className="d-flex justify-content-center align-items-center">
              <Carousel>
                {testimonials.map((testimonial, index) => (
                  <Carousel.Item key={index}>
                    <TestimonialSliderItem
                      testimonialHeader={testimonial.header}
                      testimonialAuthor={testimonial.author}
                      testimonialImg={testimonial.image}
                      testimonialText={testimonial.text}
                      testimonialLocation={testimonial.location}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TestimonialSlider;

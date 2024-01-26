import "./style.css";
import image from "../../Assets/Images/testinomial-1.jpg";

const TestimonialSliderItem = ({
  testimonialHeader,
  testimonialText,
  testimonialAuthor,
  testimonialImg,
  testimonialLocation,
  ...restProps
}) => {
  const handleImageError = (event) => {
    // Set a fallback image source if the original image fails to load
    event.target.src = image;
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className={`testimonial d-flex flex-column justify-content-center align-items-center h-100`}
      >
        <h5 className="testimonial__header">{testimonialHeader}</h5>
        <blockquote className="testimonial__text">{testimonialText}</blockquote>
        <address className="testimonial__author">
          <img
            src={require(`../../Assets/Images/${testimonialImg}`)}
            alt={testimonialAuthor}
            className="testimonial__photo"
            onError={handleImageError}
          />
          <h6 className="testimonial__name">{testimonialAuthor}</h6>
          <p className="testimonial__location m-0">{testimonialLocation}</p>
        </address>
      </div>
    </div>
  );
};

export default TestimonialSliderItem;

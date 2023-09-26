import "./SubscriptionForm.css";
const SubscriptionForm = () => {
  return (
    <div className="frame-group">
      <div className="how-would-you-like-the-subscri-parent">
        <b className="how-would-you">
          How would you like the subscription to help?
        </b>
        <div className="well-recommend-the">
          We’ll recommend the right plan for you.
        </div>
      </div>
      <div className="frame-container">
        <div className="rectangle-group">
          <div className="frame-child7" />
          <div className="how-would-you">To job search with confidence</div>
        </div>
        <div className="rectangle-group">
        <img className="frame-child8" alt="" src="/groupIcon/Frame (1).png" />
          <div className="how-would-you">To develop my professional skills</div>
        </div>
        <div className="rectangle-group">
          <div className="frame-child7" />
          <div className="how-would-you">
            To grow my network or manage my reputation
          </div>
        </div>
        <div className="rectangle-group">
          <div className="frame-child7" />
          <div className="how-would-you">To find leads more effectively</div>
        </div>
        <div className="rectangle-group">
          <div className="frame-child7" />
          <div className="how-would-you">To find and hire talent faster</div>
        </div>
      </div>
      <div className="frame-parent1">
        <div className="frame-wrapper">
          <div className="skip-wrapper">
            <div className="how-would-you">Skip</div>
          </div>
        </div>
        <div className="next-wrapper">
          <div className="how-would-you">Next</div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;

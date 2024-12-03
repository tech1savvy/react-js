import React, { useState } from "react";

const SurveyForm = () => {
  const [question, setQuestion] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const isEmptyObject = (obj) => {
    return !Object.entries(obj).length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!question.trim()) {
      validationErrors.question = "This question is required.";
    }

    if (comments.length > 200) {
      validationErrors.comments = "Comments cannot exceed 200 characters.";
    }

    if (!isEmptyObject(validationErrors)) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
      setQuestion("");
      setComments("");
    }
  };

  return (
    <div>
      <h2>Survey Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Required Question:
            <input
              type="text"
              value={question}
              onChange={handleQuestionChange}
            />
          </label>
          {errors.question && <p style={{ color: "red" }}>{errors.question}</p>}
        </div>
        <div>
          <label>
            Comments (optional, max 200 characters):
            <textarea value={comments} onChange={handleCommentsChange} />
          </label>
          {errors.comments && <p style={{ color: "red" }}>{errors.comments}</p>}
          <p>{comments.length} / 200</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SurveyForm;

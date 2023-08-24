import React, {useEffect, useState} from 'react'

export default function MultipleChoiceQuestions({ question }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  useEffect(() => {
    setSelectedOption(null);
  }, [question]);

    return (
        <div>
          <h2>{question.question}</h2>
          <ul>
            {question.options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    value={index}
                    checked={selectedOption === index}
                    onChange={() => handleOptionChange(index)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <p>Selected option: {selectedOption !== null ? question.options[selectedOption] : 'None'}</p>
          {/* Add a button to submit the selected option and handle correctness */}
        </div>
      );
}

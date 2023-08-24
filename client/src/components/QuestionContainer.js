import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MultipleChoiceQuestion from './MultipleChoiceQuestions'

export default function QuestionContainer({}) {
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestionData = async () => {
      try {
        const response = await axios.get('/api/questions');
        setQuestionData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching question data');
        setLoading(false);
      }
    };

    fetchQuestionData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {questionData && <MultipleChoiceQuestion question={questionData} />}
    </div>
  );
};


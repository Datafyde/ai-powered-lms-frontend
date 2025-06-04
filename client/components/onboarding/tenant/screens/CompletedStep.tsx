import { CheckCircle } from "lucide-react";
import React from "react";

type Props = { onCompleted: () => void };

const CompletedStep = ({ onCompleted }: Props) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md max-w-xl mx-auto text-center">
      <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        You're all set! 🎉
      </h2>
      <p className="text-gray-600 mb-4">
        Your AI LMS workspace is now ready. You can start creating courses,
        adding learners, and exploring intelligent tools.
      </p>
      <button
        onClick={onCompleted}
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg font-medium transition"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default CompletedStep;

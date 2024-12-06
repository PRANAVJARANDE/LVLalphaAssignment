import React from 'react';

const Education = ({ education, setEducation }) => {
  const handleChange = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4 h-96">
      <div className="space-y-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Degree *</label>
          <input type="text" name="degree" value={education.degree} onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your degree"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Institution *</label>
          <input type="text" name="institution" value={education.institution} onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your institution"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Year of Graduation *</label>
          <input type="number" name="year" value={education.year} onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter year"/>
        </div>
      </div>
    </div>
  );
};

export default Education;

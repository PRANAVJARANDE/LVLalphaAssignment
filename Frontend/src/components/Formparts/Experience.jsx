import React from 'react';

const Experience = ({ experience, setExperience }) => {
  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4 h-96">
      <div className="space-y-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Company</label>
          <input type="text" name="company" value={experience.company} onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter company name"/>
        </div> 
        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <input type="text" name="role" value={experience.role} onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter role"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Years Worked</label>
          <input type="number" min="0" max="60" step="1" name="years"  value={experience.years} onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter years"/>
        </div>
      </div>
    </div>
  );
};

export default Experience;
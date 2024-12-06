import React from 'react';

const PersonalInformation = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4 h-96">
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name *</label>
        <input type="text" name="name" value={formData.name || ''} onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your full name"/>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email Address *</label>
        <input type="email" name="email" value={formData.email || ''} onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email"/>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
        <input type="text" name="phone" value={formData.phone || ''} onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your phone number"/>
      </div>
    </div>
  );
};

export default PersonalInformation;

import React, { useState } from 'react';
import ResumeUpload from './Formparts/ResumeUpload';
import PersonalInformation from './Formparts/PersonalInformation';
import Education from './Formparts/Education';
import Experience from './Formparts/Experience';
import { toast } from 'react-toastify';

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [resume, setResume] = useState(null);
  const [formData, setFormData] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const steps = [
    {
      label: 'Resume Upload',
      component: (
        <ResumeUpload resume={resume} setResume={setResume} setFormData={setFormData} setEducation={setEducation} setExperience={setExperience} experience={experience} education={education} formData={formData} />
      ),
    },
    {
      label: 'Personal Information',
      component: (
        <PersonalInformation
          formData={formData}
          setFormData={setFormData}
        />
      ),
    },
    {
      label: 'Education',
      component: (
        <Education education={education} setEducation={setEducation} />
      ),
    },
    {
      label: 'Experience',
      component: (
        <Experience experience={experience} setExperience={setExperience} />
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ resume, formData, education, experience });
    if(!resume)toast.error("Resume Missing");
    else if(!formData.name)toast.error("Name missing");
    else if(!formData.email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email))toast.error("Email missing");
    else if(!formData.phone)toast.error("Phone missing");
    else if(!education.degree || !education.year || !education.institution)toast.error("Education Missing");
    else toast.success("Application Submitted");
  };

  return (
    <div className="h-full w-screen bg-slate-500 p-6">
      <div className="h-full bg-white shadow-md rounded-lg p-6">
      <div className='flex justify-between items-center pb-2 pr-5 pl-2'>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Internship Application Form</h1>
        <img className='h-20' src='/public/logo.png'></img>
      </div>
        <form>
          <div className="flex flex-wrap justify-between items-center mb-6">
              {steps.map((step, index) => (
                <div key={index} onClick={() => setCurrentStep(index)}
                  className={`flex-1 text-center py-2 px-4 m-4 font-bold text-lg rounded-lg ${
                    index === currentStep
                      ? 'bg-blue-500 text-white font-semibold'
                      : 'bg-gray-200 text-gray-600'
                  } cursor-pointer
                  sm:w-auto sm:m-2 md:flex-1 md:w-full`}>
                  {step.label}
                </div>
              ))}
          </div>

          <div className="bg-slate-400 p-5 rounded-lg mb-6">
            {steps[currentStep].component}
          </div>

          <div className="flex justify-between items-center mt-6">
            {currentStep > 0 && (
              <button type="button" onClick={handlePrevious}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400">
                Previous
              </button>
            )}

            <div className="flex justify-end w-full">
              {currentStep < steps.length - 1 ? (
                <button type="button" onClick={handleNext}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Next
                </button>
              ) : ( 
                <button type="button" onClick={handleSubmit}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

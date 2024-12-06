import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';
import { handleApiExtract } from '../../Service/ExtractorApi';
import Loading from '../Loading';

const ResumeUpload = ({resume,setResume,setFormData,setEducation,setExperience,experience,education,formData}) => {
  const [loading,setloading]=useState(false);
  const onDrop = useCallback(async(acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    if(!selectedFile)
    {
      toast.error("Upload something");
      return;
    }
    if (selectedFile?.type === 'application/pdf') {
      setResume(selectedFile);
      toast.success('Resume uploaded successfully!');
      setloading(true);
      const extractedData = await handleApiExtract(selectedFile);
      setloading(false);
      if(extractedData===null)
      {
        toast.error("Something went wrong while extraction");
        return;
      }
      const {name,email,phone,experienceCompany,experienceRole,experienceYearsWorked,educationDegree,educationInstitution,educationGraduationYear}=extractedData;
      
      setFormData((prevData) => ({
        ...prevData,
        name: name || prevData.name,
        email: email || prevData.email,
        phone: phone || prevData.phone,
      }));

      setExperience((prevExperience) => ({
        company: experienceCompany || prevExperience.company,
        role: experienceRole || prevExperience.role,
        yearsWorked: experienceYearsWorked || prevExperience.yearsWorked,
      }));

      setEducation((prevEducation) => ({
        degree: educationDegree || prevEducation.degree,
        institution: educationInstitution || prevEducation.institution,
        graduationYear: educationGraduationYear || prevEducation.graduationYear,
      }));

    } 
    else
    {
      toast.error("Only pdf allowed");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'application/pdf',
    maxFiles: 1,
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4 h-96 w-full mx-auto"> 
      <div {...getRootProps()} className={`h-full border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}`}>
        <input {...getInputProps()}/>
        {loading ? 
        <>
          <Loading/>
        </>:
        <>
          {isDragActive ? (<p className="text-blue-500 font-medium">Drop the PDF here...</p>) : (
            <>
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M7 16c0 .35.06.69.17 1H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v4.17c-.31-.11-.65-.17-1-.17h-6a2 2 0 00-2 2v6zm7-9h2m-5 0h.01m-.01 4h.01m-3 4l4 4m0 0l4-4m-4 4V12"
                />
              </svg>
              <p className="text-gray-600">Drag & drop your resume here, or{' '}
                <span className="text-blue-500 font-medium cursor-pointer">browse</span>
              </p>
              <p className="text-gray-400 text-sm mt-2">Only PDF files allowed</p>
            </>
          )}
        </>
        }

        
      </div>
    </div>
  );
};

export default ResumeUpload;
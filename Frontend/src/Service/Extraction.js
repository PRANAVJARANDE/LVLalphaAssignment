export const parseText = (text) => {
  // Regular expressions for matching the different data fields
  const nameRegex = /(?<=Name:|name:)\s*([A-Za-z\s]+)/;
  const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
  const phoneRegex = /(\+?\d{1,4}[\s\-]?)?(\(?\d{3}\)?[\s\-]?)?(\d{3})[\s\-]?(\d{4})/;
  const experienceRegex = /Experience:\s*(.*?)\s*Role:\s*([A-Za-z\s,]+)\s*Years Worked:\s*(\d{4}-\d{4}|\d{4})/;
  const educationRegex = /Education:\s*Degree:\s*([A-Za-z\s]+)\s*Institution:\s*([A-Za-z\s]+)\s*Graduation Year:\s*(\d{4})/;

  // Extracting the data using regex
  const name = text.match(nameRegex);
  const email = text.match(emailRegex);
  const phone = text.match(phoneRegex);
  const experience = text.match(experienceRegex);
  const education = text.match(educationRegex);

  // Return the extracted data with separate fields for company, role, etc.
  return {
      name: name ? name[1] : "",
      email: email ? email[0] : "",
      phone: phone ? phone[0] : "",
      
      // Experience fields
      experienceCompany: experience ? experience[1] : "",
      experienceRole: experience ? experience[2] : "",
      experienceYearsWorked: experience ? experience[3] : "",

      // Education fields
      educationDegree: education ? education[1] : "",
      educationInstitution: education ? education[2] : "",
      educationGraduationYear: education ? education[3] : ""
  };
}
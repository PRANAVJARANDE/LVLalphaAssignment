# Job Application Form

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling the components.
- **PDF.co API**: API for extracting text data from PDF resumes.
- **Regex**: Regular expressions used to fetch relevant data from the extracted PDF text.
- **Axios**: Promise-based HTTP client for making API requests.
- **React DnD**: Library for implementing drag-and-drop functionality to upload the resume.
- **React Toast**: Component for displaying success and error messages as toast notifications.

## Features

### 1. Job Application Form Components
- **Fields included**:
  - Personal Information (name, email, phone number)
  - Education History
  - Work Experience
- ![Personal Information](/Frontend/public/ss2.png)

### 2. PDF Upload Feature
- **React DnD**: For implementing the drag-and-drop functionality for PDF upload.  
- ![Upload](/Frontend/public/ss3.png)

### 3. Data Extraction from PDF
- The PDF is parsed using **PDF.co API** to extract the relevant text data.
- The extracted data is processed using **regex** to map it to the corresponding fields in the application form.
- ![PDF Upload ](/Frontend/public/ss4.png)

### 4. Dynamic Form Population
- The extracted data from the PDF automatically populates the form fields.
- Image shows data filled after extraction of pdf.
- ![PDF Upload ](/Frontend/public/ss5.png)

### 5. Validation and Error Handling
- The form includes validation to ensure that required fields are filled out correctly.
- Error messages are displayed for any validation failures or incorrect data entries.
- ![PDF Upload ](/Frontend/public/ss6.png)


### 6. User Interface Design
- The form is designed to be intuitive and visually appealing using **Tailwind CSS** for styling.
- It is responsive and adapts to different screen sizes and devices.
- ![PDF Upload ](/Frontend/public/ss8.png) 

### 7. User Feedback
- **React Toast** is used to show feedback to users during the form filling process:
  - Success messages after submission.
  - Error messages for invalid inputs.
- ![PDF Upload ](/Frontend/public/ss7.png)

### 8. Submission Handling
- Upon form submission:
  - The form data is validated again.
  - A confirmation message is displayed or users are prompted to correct any errors.


## Screenshots
- Console of the Extracton of pdf-
-  ![PDF Upload ](/Frontend/public/ss10.png)
  
- Screenshot of Final Console after Submit-:
-  ![PDF Upload ](/Frontend/public/ss9.png)

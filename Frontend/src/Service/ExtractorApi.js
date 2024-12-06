import axios from "axios";
import { parseText } from "./Extraction";

export const handleApiExtract = async (file) => {
    const formData = new FormData();
    formData.append("file", file);  
    try 
    {
        const response = await axios.post('https://api.pdf.co/v1/file/upload',formData,{
            headers: {
              "x-api-key": "pranavjarande@gmail.com_KjGuXCbBIWTaHweVAgLyoqvYK0DSBvJrUAkthPp7gBw2qTX75cX32E8j3j35fX4n", 
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.data.error){
            return null;
        }
        const url=response.data.url;
        const response1 = await axios.post('https://api.pdf.co/v1/pdf/convert/to/text',
            {
              url: url,
              inline: true,
            },
            {
              headers: {
                'x-api-key': "pranavjarande@gmail.com_KjGuXCbBIWTaHweVAgLyoqvYK0DSBvJrUAkthPp7gBw2qTX75cX32E8j3j35fX4n", 
                'Content-Type': 'application/json',
              },
            }
        );
        if (response1.data.error) {
            return null;
        }
        const text = response1.data.body;   
        const extractedData = parseText(text);
        return extractedData;
      } catch (error) {
        return null;
      }
    
  };
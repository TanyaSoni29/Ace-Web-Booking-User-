import { useState } from "react";
import LocationForm from "./LocationForm";
import VehicleSelection from "./VehicleSelection";
import BookingDetails from "./BookingDetails";
import Confirmation from "./Confirmation";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    location: {},        // Step 1: Location Form Data
    vehicle: {},         // Step 2: Vehicle Selection Data
    bookingDetails: {},  // Step 3: Booking Details Data
  });

  // Handle input change
  const handleChange = (step, data) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        ...data,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      console.log("Submitting Data:", formData);
      // Make API call here
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form.");
    }
  };

  // Render current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <LocationForm
            data={formData.location}
            onChange={(data) => handleChange("location", data)}
            onNext={() => setCurrentStep(2)}
          />
        );
      case 2:
        return (
          <VehicleSelection
            data={formData.vehicle}
            onChange={(data) => handleChange("vehicle", data)}
            onNext={() => setCurrentStep(3)}
            onPrevious={() => setCurrentStep(1)}
          />
        );
      case 3:
        return (
          <BookingDetails
            data={formData.bookingDetails}
            onChange={(data) => handleChange("bookingDetails", data)}
            onNext={() => setCurrentStep(4)}
            onPrevious={() => setCurrentStep(2)}
          />
        );
      case 4:
        return (
          <Confirmation
            data={formData}
            onPrevious={() => setCurrentStep(3)}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default MultiStepForm;

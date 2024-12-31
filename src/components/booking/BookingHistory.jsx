
import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AUTH_TOKEN } from "../../service/authConfig"; // Import the token

function BookingForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    details: "",
    email: "",
    durationText: "22",
    durationMinutes: 22,
    isAllDay: false,
    passengerName: "Abhisehk ",
    passengers: 2,
    paymentStatus: 0,
    scope: 0,
    phoneNumber: "",
    pickupAddress: "ASDA Gill",
    pickupDateTime: "2024-12-31T15:29",
    pickupPostCode: "SP8 4QA",
    destinationAddress: "Tesco Shaftesbury",
    destinationPostCode: "SP7 8PF",
    recurrenceRule: null,
    recurrenceID: null,
    price: 16,
    priceAccount: 0,
    chargeFromBase: true,
    userId: null,
    returnDateTime: null,
    vias: [],
    accountNumber: 9999,
    bookedByName: "Abhishek Singh",
    bookingId: null,
    updatedByName: "",
    isASAP: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Convert specific fields to the correct data type
    const formattedValue = ["price", "durationMinutes", "passengers"].includes(
      name
    )
      ? Number(value)
      : type === "checkbox"
      ? checked
      : value;

    setFormData({ ...formData, [name]: formattedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting form data:", formData);

      // Send POST request to the API with token
      const response = await axios.post(
        "https://dev.ace-api.1soft.co.uk/api/Bookings/Create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${AUTH_TOKEN}`, // Include the token here
          },
        }
      );

      console.log("API Response:", response.data);

      alert("Booking Created Successfully!");

      // Navigate to confirmation page after submission
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <form
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-blue-700 text-center">
          Booking Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Loop through fields dynamically */}
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700">
                {key}
              </label>
              {typeof formData[key] === "boolean" ? (
                <input
                  type="checkbox"
                  name={key}
                  checked={formData[key]}
                  onChange={handleInputChange}
                  className="h-4 w-4 border-gray-300 rounded"
                />
              ) : (
                <input
                  type={
                    typeof formData[key] === "number"
                      ? "number"
                      : key.includes("DateTime")
                      ? "datetime-local"
                      : "text"
                  }
                  name={key}
                  value={formData[key] || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400"
                  placeholder={`Enter ${key}`}
                />
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookingForm;

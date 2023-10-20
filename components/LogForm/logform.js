import { useState } from "react";

const FilmForm = () => {
  // State variables for form fields
  const [location, setLocation] = useState("");
  const [cameraSettings, setCameraSettings] = useState("");
  const [filmStock, setFilmStock] = useState("");
  const [otherMetadata, setOtherMetadata] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form data send to database under username?

    console.log({
      location,
      cameraSettings,
      filmStock,
      otherMetadata,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="cameraSettings"
          className="block text-sm font-medium text-gray-700"
        >
          Camera Settings
        </label>
        <input
          type="text"
          id="cameraSettings"
          name="cameraSettings"
          value={cameraSettings}
          onChange={(e) => setCameraSettings(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="filmStock"
          className="block text-sm font-medium text-gray-700"
        >
          Film Stock
        </label>
        <input
          type="text"
          id="filmStock"
          name="filmStock"
          value={filmStock}
          onChange={(e) => setFilmStock(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="otherMetadata"
          className="block text-sm font-medium text-gray-700"
        >
          Other Metadata
        </label>
        <textarea
          id="otherMetadata"
          name="otherMetadata"
          value={otherMetadata}
          onChange={(e) => setOtherMetadata(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          rows="4"
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mx-5"
        >
          Log Film Metadata
        </button>
      </div>
    </form>
  );
};

export default FilmForm;

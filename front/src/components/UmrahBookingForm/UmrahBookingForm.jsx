import React, { useState } from "react";

const UmrahBookingForm = () => {
  const [formState, setFormState] = useState({
    Season: "",
    PackageType: "",
    Pilgrims: "",
  });
  const [searchResults, setSearchResults] = useState([]);

  const options = {
    Season: [
      { value: "", label: "Select Season" },
      { value: "April & May / Shawwal", label: "April & May / Shawwal" },
      { value: "May / Dhul Qaddah", label: "May / Dhul Qaddah" },
      { value: "May & June / Dhul Qaddah", label: "May & June / Dhul Qaddah" },
      { value: "Muharram Ul Haram", label: "Muharram Ul Haram" },
      { value: "Safar / Rabi Al-Awal", label: "Safar / Rabi Al-Awal" },
    ],
    PackageType: [
      { value: "", label: "Select Package" },
      { value: "Budget", label: "Budget" },
      { value: "Economic", label: "Economic" },
      { value: "Premium", label: "Premium" },
    ],
    Pilgrims: [
      { value: "", label: "Pilgrims" },
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
      { value: "7", label: "7" },
      { value: "8", label: "8" },
    ],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search with the selected options
    // const results = performSearch(formState);
    // setSearchResults(results);
  };

  const performSearch = (searchParams) => {
    // Simulating search by filtering the options based on selected values
    const filteredResults = options.season.filter(
      (option) => option.value === searchParams.season
    );

    return filteredResults;
  };

  return (
    <section id="hero_umrah" className="d-flex align-items-center">
      <div
        className="container text-center position-relative"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        <h1>Book Your Umrah Packages in April, May / Shawal.</h1>
        <div className="row hero_umrah_inputs">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <form className="form" onSubmit={handleSubmit}>
              <div className="row mb-2">
                {Object.keys(formState).map((fieldName) => (
                  <div
                    className="col-sm-12 col-md-6 mb-1 mb-lg-0 col-lg-4 col-12"
                    key={fieldName}
                  >
                    <label htmlFor={fieldName} className="fw-bold">
                      {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                    </label>
                    <br />
                    <select
                      id={fieldName}
                      name={fieldName}
                      className="form-control"
                      value={formState[fieldName]}
                      onChange={handleInputChange}
                    >
                      {options[fieldName].map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              <div className="my-3">
                <input type="submit" className="btn btn-success btn-block btn-umrah-input" value="Search" />
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UmrahBookingForm;

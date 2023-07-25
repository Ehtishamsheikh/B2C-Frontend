import React from 'react'

function Activitiestab() {
    const handleSearch = () => {
        window.location.href = "hotelListing.html";
      };
    
      return (
        <div >
          <h5 className="mb-4">Explore things to do near you</h5>
          <form>
            <div className="tab-1_form_input3">
              <input
                type="text"
                name="text"
                placeholder="Search by Destination, Activities or Attractions"
              />
              <button
                type="button"
                className="btn-tabSearch"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      );
}

export default Activitiestab
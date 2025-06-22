import { useState } from 'react';
import SearchCards from './SearchCards';

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    rental: false,
    sale: false,
    city: '',
    propertyType: '',
    minBudget: '',
    maxBudget: ''
  });

  const handleCheckboxChange = (field) => {
    setSearchData(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    console.log('Search data:', searchData);
    // Implement search functionality
  };

  return (
    <main className="main_section position-relative pt-5 mt-5" style={{
      background: "url('/src/assets/images/wave-haikei.svg')",
      backgroundPosition: 'inherit',
      backgroundRepeat: 'repeat-x'
    }}>
      <div className="container pt-3 pb-5 mb-4 position-relative">
        {/* Background decorative elements */}
        <div className="position-absolute d-none d-md-block" style={{right: '5%', top: '0%'}}>
          <img src="/src/assets/images/blobs/shape-building.png" width="150px" alt="" />
        </div>
        <div className="position-absolute d-none d-md-block" style={{left: '5%', top: '0%'}}>
          <img src="/src/assets/images/blobs/shape-building.png" width="150px" alt="" />
        </div>
        <div className="bg-blob position-absolute d-none d-md-block" style={{right: '0%', top: '10%', zIndex: 9999}}>
          <img src="/src/assets/images/blobs/blob5.svg" width="260px" height="260px" className="blob-graph" alt="" />
        </div>
        <div className="bg-blob position-absolute d-none d-md-block" style={{right: '65%', top: '0%', zIndex: 9999}}>
          <img src="/src/assets/images/blobs/blob5.svg" width="260px" height="260px" className="blob-graph" alt="" />
        </div>
        <div className="bg-blob position-absolute d-none d-md-block" style={{right: '50%', bottom: '-12%'}}>
          <img src="/src/assets/images/blobs/blob5.svg" width="260px" height="260px" className="blob-graph" alt="" />
        </div>

        {/* Main title */}
        <div className="row">
          <div className="col-12 text-center mt-5 mb-4 py-3 map-title">
            <div className="d-inline-block text-white text-shadow w-50" style={{fontSize: '35px', fontWeight: 700}}>
              مع نفوذي ... عقارك أقرب مما تتخيل!
            </div>
          </div>
        </div>

        {/* Search section */}
        <div className="row mb-5">
          <section className="main_search">
            <div className="container">
              <div className="row justify-content-center">
                <div className="container mb-4 mt-5">
                  <div className="card p-3 border-0 shadow rounded-main">
                    <div className="row p-2 mb-2">
                      <div className="col pt-3 pb-2 rounded-main" style={{
                        background: 'linear-gradient(90deg, rgba(82, 82, 82, 1) 0%, rgba(48, 48, 48, 1) 100%)'
                      }}>
                        <h6 className="text-white fw-bolder text-center">
                          إبحث عن العقار المناسب
                          <i className="fa-solid fa-crown text-warning fs-7"></i>
                        </h6>
                      </div>
                    </div>
                    
                    <div className="row g-3 align-items-center">
                      {/* Rental/Sale checkboxes */}
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="btn-group w-100" role="group" aria-label="Checkbox button group">
                          <input 
                            type="checkbox" 
                            className="btn-check" 
                            id="option1" 
                            checked={searchData.rental}
                            onChange={() => handleCheckboxChange('rental')}
                            autoComplete="off"
                          />
                          <label className="w-50 text-center btn-lg btn-toggle rounded-main p-1 p-sm-2 me-2" htmlFor="option1">
                            ايجار {searchData.rental && '✅'}
                          </label>

                          <input 
                            type="checkbox" 
                            className="btn-check" 
                            id="option2" 
                            checked={searchData.sale}
                            onChange={() => handleCheckboxChange('sale')}
                            autoComplete="off"
                          />
                          <label className="w-50 text-center btn-lg btn-toggle rounded-main p-1 p-sm-2" htmlFor="option2">
                            بيع {searchData.sale && '✅'}
                          </label>
                        </div>
                      </div>

                      {/* City selector */}
                      <div className="col-12 col-sm-6 col-md-4">
                        <select 
                          className="form-select rounded-main" 
                          value={searchData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                        >
                          <option value="">المدينة</option>
                          <option value="1">الرياض</option>
                          <option value="2">جدة</option>
                        </select>
                      </div>

                      {/* Property type selector */}
                      <div className="col-12 col-md-4">
                        <select 
                          className="form-select rounded-main" 
                          value={searchData.propertyType}
                          onChange={(e) => handleInputChange('propertyType', e.target.value)}
                        >
                          <option value="">نوع العقار</option>
                          <option value="1">شقة</option>
                          <option value="2">فيلا</option>
                          <option value="3">شقة</option>
                          <option value="4">فيلا</option>
                        </select>
                      </div>

                      {/* Budget range */}
                      <div className="col-12 col-sm-8">
                        <div className="input-group mb-3">
                          <input 
                            type="number" 
                            className="form-control rounded-start form-control-lg" 
                            placeholder="الميزانية" 
                            value={searchData.minBudget}
                            onChange={(e) => handleInputChange('minBudget', e.target.value)}
                            aria-label="الميزانية"
                          />
                          <span className="input-group-text">إلى</span>
                          <input 
                            type="number" 
                            className="form-control rounded-end form-control-lg" 
                            placeholder="الميزانية" 
                            value={searchData.maxBudget}
                            onChange={(e) => handleInputChange('maxBudget', e.target.value)}
                            aria-label="الميزانية"
                          />
                        </div>
                      </div>

                      {/* Search button */}
                      <div className="col-12 col-sm-4 mt-0">
                        <button 
                          className="btn btn-main-dark w-100 rounded-main btn-lg py-2"
                          onClick={handleSearch}
                        >
                          <i className="fa-solid fa-magnifying-glass fs-8 me-2"></i>
                          بحث
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Search Cards */}
        <SearchCards />
      </div>
    </main>
  );
};

export default HeroSection;


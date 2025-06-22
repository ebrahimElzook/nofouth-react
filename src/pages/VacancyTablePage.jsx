import { useState } from 'react';

const VacancyTablePage = () => {
  const [filters, setFilters] = useState({
    city: '',
    propertyType: '',
    priceRange: '',
    rooms: '',
    searchTerm: ''
  });

  const [properties] = useState([
    { id: 1, title: 'شقة فاخرة في الملقا', city: 'الرياض', district: 'الملقا', price: 2500, type: 'شقة', area: 120, rooms: 3, bathrooms: 2, status: 'متاح', image: '/src/assets/images/building1.jpg' },
    { id: 2, title: 'فيلا مودرن في العليا', city: 'الرياض', district: 'العليا', price: 3200, type: 'فيلا', area: 300, rooms: 5, bathrooms: 4, status: 'متاح', image: '/src/assets/images/building2.jpg' },
    { id: 3, title: 'شقة عائلية في الملز', city: 'الرياض', district: 'الملز', price: 1800, type: 'شقة', area: 100, rooms: 2, bathrooms: 2, status: 'محجوز', image: '/src/assets/images/building3.jpg' },
    { id: 4, title: 'فيلا راقية في النرجس', city: 'الرياض', district: 'النرجس', price: 4500, type: 'فيلا', area: 400, rooms: 6, bathrooms: 5, status: 'متاح', image: '/src/assets/images/building4.jpg' },
    { id: 5, title: 'شقة مميزة في الروضة', city: 'الرياض', district: 'الروضة', price: 2100, type: 'شقة', area: 110, rooms: 3, bathrooms: 2, status: 'متاح', image: '/src/assets/images/building5.jpg' },
    { id: 6, title: 'مكتب تجاري في البغدادية', city: 'جدة', district: 'البغدادية', price: 3500, type: 'مكتب', area: 80, rooms: 4, bathrooms: 2, status: 'متاح', image: '/src/assets/images/building1.jpg' },
    { id: 7, title: 'محل تجاري في المحمدية', city: 'الدمام', district: 'المحمدية', price: 2800, type: 'محل', area: 60, rooms: 1, bathrooms: 1, status: 'متاح', image: '/src/assets/images/building2.jpg' },
    { id: 8, title: 'شقة في حي الصفا', city: 'جدة', district: 'الصفا', price: 2200, type: 'شقة', area: 95, rooms: 2, bathrooms: 2, status: 'محجوز', image: '/src/assets/images/building3.jpg' }
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredProperties = properties.filter(property => {
    return (
      (filters.city === '' || property.city === filters.city) &&
      (filters.propertyType === '' || property.type === filters.propertyType) &&
      (filters.rooms === '' || property.rooms.toString() === filters.rooms) &&
      (filters.searchTerm === '' || 
        property.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        property.district.toLowerCase().includes(filters.searchTerm.toLowerCase())
      ) &&
      (filters.priceRange === '' || 
        (filters.priceRange === '1000-2000' && property.price >= 1000 && property.price <= 2000) ||
        (filters.priceRange === '2000-3000' && property.price >= 2000 && property.price <= 3000) ||
        (filters.priceRange === '3000-5000' && property.price >= 3000 && property.price <= 5000) ||
        (filters.priceRange === '5000+' && property.price > 5000)
      )
    );
  });

  return (
    <div className="vacancy-table-page">
      {/* Hero Section */}
      <section className="hero-table py-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '300px'}}>
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bold mb-4">جدول الشواغر</h1>
            <p className="lead">تصفح جميع العقارات المتاحة في جدول مفصل</p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="search-filters py-4 bg-light">
        <div className="container">
          <div className="card border-0 shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="ابحث عن عقار أو حي..."
                      name="searchTerm"
                      value={filters.searchTerm}
                      onChange={handleFilterChange}
                    />
                    <button className="btn btn-primary">
                      <i className="fa-solid fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 mb-3">
                  <select 
                    className="form-select" 
                    name="city"
                    value={filters.city}
                    onChange={handleFilterChange}
                  >
                    <option value="">جميع المدن</option>
                    <option value="الرياض">الرياض</option>
                    <option value="جدة">جدة</option>
                    <option value="الدمام">الدمام</option>
                  </select>
                </div>
                <div className="col-md-2 mb-3">
                  <select 
                    className="form-select"
                    name="propertyType"
                    value={filters.propertyType}
                    onChange={handleFilterChange}
                  >
                    <option value="">نوع العقار</option>
                    <option value="شقة">شقة</option>
                    <option value="فيلا">فيلا</option>
                    <option value="مكتب">مكتب</option>
                    <option value="محل">محل تجاري</option>
                  </select>
                </div>
                <div className="col-md-2 mb-3">
                  <select 
                    className="form-select"
                    name="priceRange"
                    value={filters.priceRange}
                    onChange={handleFilterChange}
                  >
                    <option value="">نطاق السعر</option>
                    <option value="1000-2000">1,000 - 2,000</option>
                    <option value="2000-3000">2,000 - 3,000</option>
                    <option value="3000-5000">3,000 - 5,000</option>
                    <option value="5000+">أكثر من 5,000</option>
                  </select>
                </div>
                <div className="col-md-2 mb-3">
                  <select 
                    className="form-select"
                    name="rooms"
                    value={filters.rooms}
                    onChange={handleFilterChange}
                  >
                    <option value="">عدد الغرف</option>
                    <option value="1">غرفة واحدة</option>
                    <option value="2">غرفتان</option>
                    <option value="3">3 غرف</option>
                    <option value="4">4 غرف</option>
                    <option value="5">5 غرف</option>
                    <option value="6">6 غرف أو أكثر</option>
                  </select>
                </div>
                <div className="col-md-2 mb-3">
                  <button 
                    className="btn btn-outline-secondary w-100"
                    onClick={() => setFilters({city: '', propertyType: '', priceRange: '', rooms: '', searchTerm: ''})}
                  >
                    مسح الفلاتر
                  </button>
                </div>
                <div className="col-md-2 mb-3">
                  <button className="btn btn-success w-100">
                    <i className="fa-solid fa-map me-2"></i>
                    عرض على الخريطة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="results-summary py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">تم العثور على {filteredProperties.length} عقار</h5>
            <div className="d-flex gap-2">
              <select className="form-select form-select-sm" style={{width: 'auto'}}>
                <option>ترتيب حسب السعر</option>
                <option>الأحدث أولاً</option>
                <option>الأقدم أولاً</option>
                <option>المساحة</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Table */}
      <section className="properties-table py-4">
        <div className="container">
          <div className="card border-0 shadow">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th>العقار</th>
                      <th>الموقع</th>
                      <th>النوع</th>
                      <th>المساحة</th>
                      <th>الغرف</th>
                      <th>الحمامات</th>
                      <th>السعر</th>
                      <th>الحالة</th>
                      <th>الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProperties.map(property => (
                      <tr key={property.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img 
                              src={property.image} 
                              alt={property.title}
                              className="rounded me-3"
                              style={{width: '60px', height: '60px', objectFit: 'cover'}}
                            />
                            <div>
                              <h6 className="mb-0 fw-bold">{property.title}</h6>
                              <small className="text-muted">كود العقار: {property.id}</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <div className="fw-bold">{property.city}</div>
                            <small className="text-muted">{property.district}</small>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-primary">{property.type}</span>
                        </td>
                        <td>{property.area} م²</td>
                        <td>{property.rooms}</td>
                        <td>{property.bathrooms}</td>
                        <td>
                          <div className="fw-bold text-success">{property.price.toLocaleString()} ريال</div>
                          <small className="text-muted">/شهر</small>
                        </td>
                        <td>
                          <span className={`badge ${property.status === 'متاح' ? 'bg-success' : 'bg-warning'}`}>
                            {property.status}
                          </span>
                        </td>
                        <td>
                          <div className="btn-group btn-group-sm">
                            <button className="btn btn-outline-primary" title="عرض التفاصيل">
                              <i className="fa-solid fa-eye"></i>
                            </button>
                            <button className="btn btn-outline-success" title="تواصل معنا">
                              <i className="fa-brands fa-whatsapp"></i>
                            </button>
                            <button className="btn btn-outline-info" title="حفظ في المفضلة">
                              <i className="fa-solid fa-heart"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="pagination-section py-4">
        <div className="container">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">السابق</a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">التالي</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default VacancyTablePage;


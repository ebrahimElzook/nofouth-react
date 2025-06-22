import { useEffect, useRef } from 'react';

const VacancyMapPage = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize map when component mounts
    if (typeof window !== 'undefined' && window.L && mapRef.current) {
      // Initialize Leaflet map
      const map = window.L.map(mapRef.current).setView([24.7136, 46.6753], 10); // Riyadh coordinates

      // Add tile layer
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Sample property markers
      const properties = [
        { lat: 24.7136, lng: 46.6753, title: 'عقار في الرياض - الملقا', price: '2,500 ريال/شهر', type: 'شقة' },
        { lat: 24.7236, lng: 46.6853, title: 'عقار في الرياض - العليا', price: '3,200 ريال/شهر', type: 'فيلا' },
        { lat: 24.7036, lng: 46.6653, title: 'عقار في الرياض - الملز', price: '1,800 ريال/شهر', type: 'شقة' },
        { lat: 24.7336, lng: 46.6953, title: 'عقار في الرياض - النرجس', price: '4,500 ريال/شهر', type: 'فيلا' },
        { lat: 24.6936, lng: 46.6553, title: 'عقار في الرياض - الروضة', price: '2,100 ريال/شهر', type: 'شقة' }
      ];

      // Add markers for each property
      properties.forEach(property => {
        const marker = window.L.marker([property.lat, property.lng]).addTo(map);
        marker.bindPopup(`
          <div class="text-center">
            <h6 class="fw-bold">${property.title}</h6>
            <p class="mb-1"><strong>النوع:</strong> ${property.type}</p>
            <p class="mb-2"><strong>السعر:</strong> ${property.price}</p>
            <button class="btn btn-primary btn-sm">عرض التفاصيل</button>
          </div>
        `);
      });

      // Cleanup function
      return () => {
        map.remove();
      };
    }
  }, []);

  return (
    <div className="vacancy-map-page">
      {/* Hero Section */}
      <section className="hero-map py-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '300px'}}>
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bold mb-4">خريطة الشواغر</h1>
            <p className="lead">اكتشف العقارات المتاحة على الخريطة</p>
          </div>
        </div>
      </section>

      {/* Search Filters */}
      <section className="search-filters py-4 bg-light">
        <div className="container">
          <div className="card border-0 shadow">
            <div className="card-body">
              <div className="row align-items-end">
                <div className="col-md-3 mb-3">
                  <label className="form-label fw-bold">المدينة</label>
                  <select className="form-select">
                    <option value="">جميع المدن</option>
                    <option value="riyadh">الرياض</option>
                    <option value="jeddah">جدة</option>
                    <option value="dammam">الدمام</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label className="form-label fw-bold">نوع العقار</label>
                  <select className="form-select">
                    <option value="">جميع الأنواع</option>
                    <option value="apartment">شقة</option>
                    <option value="villa">فيلا</option>
                    <option value="office">مكتب</option>
                    <option value="shop">محل تجاري</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label className="form-label fw-bold">نطاق السعر</label>
                  <select className="form-select">
                    <option value="">جميع الأسعار</option>
                    <option value="1000-2000">1,000 - 2,000 ريال</option>
                    <option value="2000-3000">2,000 - 3,000 ريال</option>
                    <option value="3000-5000">3,000 - 5,000 ريال</option>
                    <option value="5000+">أكثر من 5,000 ريال</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <button className="btn btn-primary w-100">
                    <i className="fa-solid fa-search me-2"></i>
                    بحث
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section py-4">
        <div className="container">
          <div className="card border-0 shadow">
            <div className="card-body p-0">
              <div 
                ref={mapRef} 
                style={{ height: '600px', width: '100%' }}
                className="rounded"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties List */}
      <section className="properties-list py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h3 className="fw-bold">العقارات المتاحة</h3>
              <p className="text-muted">تم العثور على 5 عقارات متاحة</p>
            </div>
          </div>
          
          <div className="row gy-4">
            {[
              { id: 1, title: 'شقة فاخرة في الملقا', price: '2,500', type: 'شقة', area: '120', rooms: '3', bathrooms: '2', image: '/src/assets/images/building1.jpg' },
              { id: 2, title: 'فيلا مودرن في العليا', price: '3,200', type: 'فيلا', area: '300', rooms: '5', bathrooms: '4', image: '/src/assets/images/building2.jpg' },
              { id: 3, title: 'شقة عائلية في الملز', price: '1,800', type: 'شقة', area: '100', rooms: '2', bathrooms: '2', image: '/src/assets/images/building3.jpg' },
              { id: 4, title: 'فيلا راقية في النرجس', price: '4,500', type: 'فيلا', area: '400', rooms: '6', bathrooms: '5', image: '/src/assets/images/building4.jpg' },
              { id: 5, title: 'شقة مميزة في الروضة', price: '2,100', type: 'شقة', area: '110', rooms: '3', bathrooms: '2', image: '/src/assets/images/building5.jpg' }
            ].map(property => (
              <div key={property.id} className="col-lg-6">
                <div className="card border-0 shadow h-100">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={property.image} className="img-fluid rounded-start h-100" style={{objectFit: 'cover'}} alt={property.title} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{property.title}</h5>
                        <div className="row text-muted mb-3">
                          <div className="col-6">
                            <small><i className="fa-solid fa-home me-1"></i> {property.type}</small>
                          </div>
                          <div className="col-6">
                            <small><i className="fa-solid fa-expand-arrows-alt me-1"></i> {property.area} م²</small>
                          </div>
                          <div className="col-6">
                            <small><i className="fa-solid fa-bed me-1"></i> {property.rooms} غرف</small>
                          </div>
                          <div className="col-6">
                            <small><i className="fa-solid fa-bath me-1"></i> {property.bathrooms} حمامات</small>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="h5 text-primary fw-bold">{property.price} ريال</span>
                            <small className="text-muted">/شهر</small>
                          </div>
                          <button className="btn btn-outline-primary btn-sm">
                            عرض التفاصيل
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load Leaflet CSS and JS */}
      <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    </div>
  );
};

export default VacancyMapPage;


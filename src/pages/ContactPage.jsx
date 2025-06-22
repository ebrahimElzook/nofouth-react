import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requestType: '',
    details: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-contact py-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '400px'}}>
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bold mb-4">تواصل معنا</h1>
            <p className="lead">نحن هنا لخدمتك في جميع احتياجاتك العقارية</p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-info py-5">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow text-center">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="fa-brands fa-whatsapp text-success fs-1"></i>
                  </div>
                  <h5 className="card-title fw-bold">واتساب</h5>
                  <p className="card-text text-muted">تواصل معنا عبر الواتساب</p>
                  <a href="https://wa.me/966562444411" target="_blank" className="btn btn-success">
                    +966562444411
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow text-center">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="fa-solid fa-phone text-primary fs-1"></i>
                  </div>
                  <h5 className="card-title fw-bold">اتصال مباشر</h5>
                  <p className="card-text text-muted">اتصل بنا مباشرة</p>
                  <a href="tel:+966562444411" className="btn btn-primary">
                    +966562444411
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow text-center">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="fa-solid fa-envelope text-info fs-1"></i>
                  </div>
                  <h5 className="card-title fw-bold">البريد الإلكتروني</h5>
                  <p className="card-text text-muted">راسلنا عبر البريد الإلكتروني</p>
                  <a href="mailto:info@nufouth.com" className="btn btn-info">
                    info@nufouth.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow">
                <div className="card-body p-5">
                  <div className="text-center mb-4">
                    <h3 className="fw-bold text-gray-2">أرسل لنا رسالة</h3>
                    <p className="text-muted">سنقوم بالرد عليك في أقرب وقت ممكن</p>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-floating">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name"
                            placeholder="الاسم الكامل" 
                            style={{borderRadius: '15px'}} 
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="name" className="text-gray-2">الاسم الكامل</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form-floating">
                          <input 
                            type="tel" 
                            className="form-control" 
                            id="phone" 
                            name="phone"
                            placeholder="رقم الهاتف" 
                            style={{borderRadius: '15px'}} 
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="phone" className="text-gray-2">رقم الهاتف</label>
                        </div>
                      </div>
                      <div className="col-12 mb-3">
                        <div className="form-floating">
                          <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email"
                            placeholder="البريد الإلكتروني" 
                            style={{borderRadius: '15px'}} 
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="email" className="text-gray-2">البريد الإلكتروني</label>
                        </div>
                      </div>
                      <div className="col-12 mb-3">
                        <div className="form-floating">
                          <select 
                            className="form-select" 
                            id="requestType" 
                            name="requestType"
                            style={{borderRadius: '15px'}}
                            value={formData.requestType}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">اختر نوع الطلب</option>
                            <option value="property_inquiry">استفسار عقاري</option>
                            <option value="property_management">إدارة أملاك</option>
                            <option value="property_valuation">تقييم عقاري</option>
                            <option value="property_marketing">تسويق عقاري</option>
                            <option value="consultation">استشارة عقارية</option>
                            <option value="complaint">شكوى</option>
                            <option value="other">أخرى</option>
                          </select>
                          <label htmlFor="requestType" className="text-gray-2">نوع الطلب</label>
                        </div>
                      </div>
                      <div className="col-12 mb-4">
                        <div className="form-floating">
                          <textarea 
                            className="form-control" 
                            placeholder="تفاصيل الرسالة" 
                            id="details" 
                            name="details"
                            style={{height: '120px', borderRadius: '15px'}}
                            value={formData.details}
                            onChange={handleInputChange}
                            required
                          ></textarea>
                          <label htmlFor="details" className="text-gray-2">تفاصيل الرسالة</label>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-main-dark rounded-main px-5 py-3">
                          <i className="fa-solid fa-paper-plane me-2"></i>
                          إرسال الرسالة
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="office-locations py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-bold text-gray-2">مواقع مكاتبنا</h3>
            <p className="text-muted">نخدمك في عدة مدن بالمملكة العربية السعودية</p>
          </div>
          
          <div className="row gy-4">
            <div className="col-md-4">
              <div className="card border-0 shadow text-center">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="fa-solid fa-building text-primary fs-1"></i>
                  </div>
                  <h5 className="card-title fw-bold">الرياض</h5>
                  <p className="card-text text-muted">حي الملقا</p>
                  <div className="mb-3">
                    <p className="text-muted mb-1">
                      <i className="fa-solid fa-clock me-2"></i>
                      السبت - الخميس
                    </p>
                    <p className="text-muted">9:00 ص - 10:00 م</p>
                  </div>
                  <a href="https://www.google.com/maps/search/?api=1&query=26.706131,50.103655" target="_blank" className="btn btn-outline-primary">
                    <i className="fa-solid fa-map-marker-alt me-2"></i>
                    عرض على الخريطة
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow text-center">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="fa-solid fa-building text-success fs-1"></i>
                  </div>
                  <h5 className="card-title fw-bold">جدة</h5>
                  <p className="card-text text-muted">حي البغدادية</p>
                  <div className="mb-3">
                    <p className="text-muted mb-1">
                      <i className="fa-solid fa-clock me-2"></i>
                      السبت - الخميس
                    </p>
                    <p className="text-muted">9:00 ص - 10:00 م</p>
                  </div>
                  <a href="https://www.google.com/maps/search/?api=1&query=26.706131,50.103655" target="_blank" className="btn btn-outline-success">
                    <i className="fa-solid fa-map-marker-alt me-2"></i>
                    عرض على الخريطة
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow text-center">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="fa-solid fa-building text-info fs-1"></i>
                  </div>
                  <h5 className="card-title fw-bold">الدمام</h5>
                  <p className="card-text text-muted">حي المحمدية</p>
                  <div className="mb-3">
                    <p className="text-muted mb-1">
                      <i className="fa-solid fa-clock me-2"></i>
                      السبت - الخميس
                    </p>
                    <p className="text-muted">9:00 ص - 10:00 م</p>
                  </div>
                  <a href="https://www.google.com/maps/search/?api=1&query=26.706131,50.103655" target="_blank" className="btn btn-outline-info">
                    <i className="fa-solid fa-map-marker-alt me-2"></i>
                    عرض على الخريطة
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;


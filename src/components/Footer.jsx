import { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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
    console.log('Form submitted:', formData);
  };

  return (
    <>
      {/* Call to Action Section */}
      <section className="call_to_action overflow-hidden py-5 my-5">
        <div className="container position-relative px-5">
          <div className="__skeleton position-absolute d-none d-md-block" data-aos="fade-right" style={{left: '-9%', top: '-10%'}}>
            <img src="/src/assets/images/call to action/sphere_3d_shape.png" loading="lazy" style={{opacity: 1}} width="300px" height="300px" alt="" />
          </div>
          <div className="__skeleton position-absolute d-none d-md-block" data-aos="fade-left" style={{right: '-9%', top: '-40%'}}>
            <img src="/src/assets/images/call to action/donut_3d_shape.png" loading="lazy" style={{opacity: 1}} width="300px" height="300px" alt="" />
          </div>
          <div className="card" data-aos="fade-up" style={{borderRadius: '20px'}}>
            <div className="row">
              <div className="col-12 col-md-5 p-5">
                <h5 style={{color: '#c73600'}}>عقارك في أيدي أمينة...</h5>
                <h3 className="text-white fw-bolder">تواصل معنا واحجز مكانك في إدارة أملاكك</h3>
                <button className="call_to_action_button mt-3 text-white fw-bold" role="button">احجز مكانك</button>
              </div>
              <div className="__skeleton col-12 col-md-7 d-flex px-5 justify-content-center justify-content-md-end align-items-center">
                <img src="/src/assets/images/call to action/Success-Photoroom.png" loading="lazy" style={{width: '200px', height: '200px'}} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="call_to_action overflow-hidden py-5 my-5">
        <div className="container position-relative px-5">
          <div className="card" data-aos="fade-up" style={{borderRadius: '20px'}}>
            <div className="row">
              <div className="__skeleton col-12">
                <img src="/src/assets/images/test-banner.jpg" loading="lazy" style={{height: '250px !important', borderRadius: '20px'}} width="100%" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact pb-5 my-5">
        <div className="container position-relative px-5">
          <div className="__skeleton bg-blob position-absolute d-none d-md-block" style={{right: '75%', top: '0%'}}>
            <img src="/src/assets/images/blobs/blob5.svg" loading="lazy" width="260px" height="260px" className="blob-graph" alt="" />
          </div>
          <div className="__skeleton bg-blob position-absolute d-none d-md-block" style={{right: '0%', top: '10%'}}>
            <img src="/src/assets/images/blobs/blob5.svg" loading="lazy" width="260px" height="260px" className="blob-graph" alt="" />
          </div>
          <div className="text-center mb-5">
            <h5 className="text-gray-2 fw-bolder text-shadow underline-center">تواصل معنا</h5>
          </div>
          <div className="row">
            <div className="col-12 col-md-8" data-aos="fade-left">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 col-sm-6 mb-3">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"
                        placeholder="الإسم" 
                        style={{borderRadius: '15px'}} 
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="name" className="text-gray-2 fs-7">الإسم</label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 mb-3">
                    <div className="form-floating">
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        name="phone"
                        placeholder="الهاتف" 
                        style={{borderRadius: '15px'}} 
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="phone" className="text-gray-2 fs-7">الهاتف</label>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="form-floating">
                      <select 
                        className="form-select" 
                        id="requestType" 
                        name="requestType"
                        aria-label="نوع الطلب" 
                        style={{borderRadius: '15px'}}
                        value={formData.requestType}
                        onChange={handleInputChange}
                      >
                        <option value=""></option>
                        <option value="1">طلب شاغر</option>
                        <option value="2">طلب خدمة</option>
                        <option value="3">استفسار</option>
                        <option value="4">شكوى</option>
                        <option value="5">أخرى..</option>
                      </select>
                      <label htmlFor="requestType" className="text-gray-2 fs-7">نوع الطلب</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <textarea 
                        className="form-control" 
                        placeholder="التفاصيل" 
                        id="details" 
                        name="details"
                        style={{height: '100px', borderRadius: '15px'}}
                        value={formData.details}
                        onChange={handleInputChange}
                      ></textarea>
                      <label htmlFor="details" className="text-gray-2 fs-7">التفاصيل</label>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn w-50 btn-main-dark rounded-main py-2">
                      <i className="fa-solid fa-paper-plane fs-5 me-2 fs-6"></i>
                      إرسال
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-start mt-5 mt-md-0">
              <div className="row">
                <div className="col-6">
                  <div className="border-0">
                    <div className="card-body text-center">
                      <a href="https://wa.me/966562444411" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <i className="fab fa-whatsapp fs-1 text-success mb-3"></i>
                        <h6 className="card-title text-gray-2 fw-bold">واتساب</h6>
                        <p className="card-text text-gray-1 fs-7">+966562444411</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="border-0">
                    <div className="card-body text-center">
                      <a href="tel:+966562444411" className="text-decoration-none">
                        <i className="fas fa-phone fs-1 text-primary mb-3"></i>
                        <h6 className="card-title text-gray-2 fw-bold">الهاتف</h6>
                        <p className="card-text text-gray-1 fs-7">+966562444411</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="border-0">
                    <div className="card-body text-center">
                      <i className="fas fa-clock fs-1 text-warning mb-3"></i>
                      <h6 className="card-title text-gray-2 fw-bold">ساعات العمل</h6>
                      <p className="card-text text-gray-1 fs-7">الأحد - الخميس<br />9:00 ص - 6:00 م</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="border-0">
                    <div className="card-body text-center">
                      <i className="fas fa-map-marker-alt fs-1 text-danger mb-3"></i>
                      <h6 className="card-title text-gray-2 fw-bold">المواقع</h6>
                      <p className="card-text text-gray-1 fs-7">الرياض - جدة - الدمام</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white py-5">
        <div className="container px-5">
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <img src="/src/assets/images/logo-white.png" alt="نفوذ التطوير" className="mb-3" style={{maxWidth: '200px'}} />
              <p className="text-light fs-7">
                شركة نفوذ التطوير للعقارات وإدارة الأملاك - مرخصة من وزارة الإسكان
              </p>
              <p className="text-light fs-8">
                رقم الترخيص: 1200003231
              </p>
            </div>
            <div className="col-12 col-md-2 mb-4">
              <h6 className="text-white fw-bold mb-3">روابط مهمة</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none fs-7">سياسة الخصوصية</a></li>
                <li><a href="#" className="text-light text-decoration-none fs-7">الشروط والأحكام</a></li>
                <li><a href="#" className="text-light text-decoration-none fs-7">عن الشركة</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-3 mb-4">
              <h6 className="text-white fw-bold mb-3">خدماتنا</h6>
              <ul className="list-unstyled">
                <li><span className="text-light fs-7">إدارة الأملاك</span></li>
                <li><span className="text-light fs-7">التأجير</span></li>
                <li><span className="text-light fs-7">التسويق العقاري</span></li>
              </ul>
            </div>
            <div className="col-12 col-md-3 mb-4">
              <h6 className="text-white fw-bold mb-3">تابعنا</h6>
              <div className="d-flex gap-3">
                <a href="#" className="text-light fs-4"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-light fs-4"><i className="fab fa-youtube"></i></a>
                <a href="#" className="text-light fs-4"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <hr className="border-light" />
          <div className="row">
            <div className="col-12 text-center">
              <p className="text-light fs-8 mb-0">
                © 2025 نفوذ التطوير للعقارات وإدارة الأملاك. جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;


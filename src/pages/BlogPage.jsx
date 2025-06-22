import { useState } from 'react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const [blogPosts] = useState([
    {
      id: 1,
      title: 'التسويق البصري في العقارات',
      excerpt: 'كيفية استخدام التسويق البصري لجذب العملاء وزيادة المبيعات في قطاع العقارات',
      content: 'محتوى المقال الكامل هنا...',
      category: 'تسويق',
      author: 'فريق نفوذ التطوير',
      date: '10 يناير 2025',
      image: '/src/assets/images/blog1.jpg',
      readTime: '5 دقائق',
      tags: ['تسويق', 'عقارات', 'بصري']
    },
    {
      id: 2,
      title: 'إدارة متكاملة... بخبرة عالمية',
      excerpt: 'نقدم خدمات إدارة الأملاك بمعايير عالمية وخبرة محلية متميزة',
      content: 'محتوى المقال الكامل هنا...',
      category: 'إدارة أملاك',
      author: 'فريق نفوذ التطوير',
      date: '8 يناير 2025',
      image: '/src/assets/images/blog2.jpg',
      readTime: '7 دقائق',
      tags: ['إدارة', 'أملاك', 'خبرة']
    },
    {
      id: 3,
      title: 'نصائح للاستثمار العقاري الناجح',
      excerpt: 'دليل شامل للمستثمرين الجدد في السوق العقاري السعودي',
      content: 'محتوى المقال الكامل هنا...',
      category: 'استثمار',
      author: 'خبراء نفوذ التطوير',
      date: '5 يناير 2025',
      image: '/src/assets/images/blog3.jpg',
      readTime: '10 دقائق',
      tags: ['استثمار', 'نصائح', 'عقارات']
    },
    {
      id: 4,
      title: 'تطوير القطاع العقاري في المملكة',
      excerpt: 'نظرة على التطورات الحديثة في القطاع العقاري ورؤية 2030',
      content: 'محتوى المقال الكامل هنا...',
      category: 'أخبار',
      author: 'فريق التحرير',
      date: '3 يناير 2025',
      image: '/src/assets/images/blog4.jpg',
      readTime: '8 دقائق',
      tags: ['تطوير', 'رؤية 2030', 'أخبار']
    },
    {
      id: 5,
      title: 'كيفية تقييم العقارات بدقة',
      excerpt: 'الطرق العلمية والعملية لتقييم العقارات وتحديد القيمة السوقية',
      content: 'محتوى المقال الكامل هنا...',
      category: 'تقييم',
      author: 'خبراء التقييم',
      date: '1 يناير 2025',
      image: '/src/assets/images/blog5.jpg',
      readTime: '12 دقائق',
      tags: ['تقييم', 'عقارات', 'خبرة']
    },
    {
      id: 6,
      title: 'التكنولوجيا في إدارة العقارات',
      excerpt: 'كيف تساهم التكنولوجيا الحديثة في تطوير خدمات إدارة العقارات',
      content: 'محتوى المقال الكامل هنا...',
      category: 'تكنولوجيا',
      author: 'فريق التطوير',
      date: '28 ديسمبر 2024',
      image: '/src/assets/images/blog6.jpg',
      readTime: '6 دقائق',
      tags: ['تكنولوجيا', 'إدارة', 'تطوير']
    }
  ]);

  const categories = ['all', 'تسويق', 'إدارة أملاك', 'استثمار', 'أخبار', 'تقييم', 'تكنولوجيا'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="hero-blog py-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '400px'}}>
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bold mb-4">مدونة نفوذ التطوير</h1>
            <p className="lead">أحدث الأخبار والمقالات في عالم العقارات</p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-article py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h3 className="fw-bold">المقال المميز</h3>
            </div>
          </div>
          <div className="card border-0 shadow-lg">
            <div className="row g-0">
              <div className="col-md-6">
                <img src={blogPosts[0].image} className="img-fluid rounded-start h-100" style={{objectFit: 'cover'}} alt={blogPosts[0].title} />
              </div>
              <div className="col-md-6">
                <div className="card-body p-5">
                  <div className="mb-3">
                    <span className="badge bg-primary me-2">{blogPosts[0].category}</span>
                    <small className="text-muted">{blogPosts[0].date} • {blogPosts[0].readTime}</small>
                  </div>
                  <h2 className="card-title fw-bold mb-3">{blogPosts[0].title}</h2>
                  <p className="card-text text-muted mb-4">{blogPosts[0].excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                        <i className="fa-solid fa-user text-white"></i>
                      </div>
                      <div>
                        <small className="fw-bold">{blogPosts[0].author}</small>
                      </div>
                    </div>
                    <button className="btn btn-primary">
                      قراءة المزيد
                      <i className="fa-solid fa-arrow-left ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="categories-filter py-4 bg-light">
        <div className="container">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {categories.map(category => (
              <button
                key={category}
                className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'جميع المقالات' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bold">
                  {selectedCategory === 'all' ? 'جميع المقالات' : `مقالات ${selectedCategory}`}
                </h3>
                <span className="text-muted">{filteredPosts.length} مقال</span>
              </div>
            </div>
          </div>
          
          <div className="row gy-4">
            {filteredPosts.slice(1).map(post => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <div className="card border-0 shadow h-100">
                  <img src={post.image} className="card-img-top" style={{height: '200px', objectFit: 'cover'}} alt={post.title} />
                  <div className="card-body d-flex flex-column">
                    <div className="mb-3">
                      <span className="badge bg-primary me-2">{post.category}</span>
                      <small className="text-muted">{post.date}</small>
                    </div>
                    <h5 className="card-title fw-bold mb-3">{post.title}</h5>
                    <p className="card-text text-muted flex-grow-1">{post.excerpt}</p>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <small className="text-muted">
                          <i className="fa-solid fa-clock me-1"></i>
                          {post.readTime}
                        </small>
                        <small className="text-muted">{post.author}</small>
                      </div>
                      <div className="mb-3">
                        {post.tags.map(tag => (
                          <span key={tag} className="badge bg-light text-dark me-1">#{tag}</span>
                        ))}
                      </div>
                      <button className="btn btn-outline-primary w-100">
                        قراءة المزيد
                        <i className="fa-solid fa-arrow-left ms-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="newsletter py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h3 className="fw-bold mb-3">اشترك في النشرة الإخبارية</h3>
              <p className="mb-4">احصل على أحدث المقالات والأخبار العقارية مباشرة في بريدك الإلكتروني</p>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="أدخل بريدك الإلكتروني" />
                <button className="btn btn-light text-primary fw-bold">اشتراك</button>
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

export default BlogPage;


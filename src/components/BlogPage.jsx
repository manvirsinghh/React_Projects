

import '../BlogPage.css';
import image6  from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'How UX works in web',
      date: 'Nov 9, 2023',
      tags: ['UI','UX'],
      image:image6,
    },
    {
      title: 'Case study - Analysis Application',
      date: 'Aug 18, 2023',
      tags: ['DESIGN', 'PRINT'],
      image:image7,
    },
    {
      title: '3 ways to develop your skill',
      date: 'Feb 16, 2023',
      tags: ['FIGMA', 'WEB'],
      image:image8,
    },
  ];

  return (
    <div className="blog-page-wrapper">
      <header className="header">
        <h1>✹ Blog</h1>
        <a href="/all-posts" style={{textDecoration:'underline'}}>
          View all
         
        </a>
      </header>

      {blogPosts.map((post, index) => (
        <div className="post-wrapper" key={index}>
          <div className="post-header">
          <div className="post-image">
    <img src={post.image}alt="Blog visual"  className='img' style={{height:'214px',width:'200px',marginRight:'15px'}}/>
  </div>

         <div style={{display:'block'}}>
         <p>{post.date}</p>
         <h2>{post.title}</h2>
        
         </div>
          <div className='button'>
          <button className='btn'>Read </button>
         
          </div>
          </div>
          <div className="tags-wrapper">
            {post.tags.map((tag, tagIndex) => (
              <span key={tagIndex}>{tag}</span>
            ))}
          </div>
        
        </div>
      ))}

     
    </div>
  );
};

export default BlogPage;

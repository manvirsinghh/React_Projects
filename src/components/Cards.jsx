import '../Cards.css';
function Cards({img,title,description,tags,button1,button2,caseStudyText}){
    return(
        
<div className="card" >
 
    <div className="card-img">
   <img src={img} alt={title} />
    </div>
    <div className="card-content">
<h3>{title}</h3>
<p>{description}</p>
<div className="card-tags">
{tags.map((tag, index) => (
            <button key={index} className="tag-btn">{tag}</button>
          ))}
</div>
<button className="case-study-btn">{caseStudyText}</button>
    </div>
</div>


    )
}
export default Cards;
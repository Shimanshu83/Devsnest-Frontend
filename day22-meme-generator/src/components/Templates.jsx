const Templates = ({templates , setMeme}) => {
 
    return (
        <div className="template-cont">
        {templates.map((template) => (
          <div key={template.id} className="template"
          onClick={()=>{
              setMeme(template) ;
              console.log(template);  
          }}>
            <div
              className="temp-image"
              style={{ backgroundImage: `url(${template.url})` }}
            ></div>
          </div>
        ))}
      </div>
    ) ; 
};

export default Templates ; 
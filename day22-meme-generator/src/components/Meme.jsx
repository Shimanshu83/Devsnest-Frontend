
const Meme = ({memeData , setMeme}) => {
    
    return (
        <div className="meme-container">
            <img src={memeData.url} />
            <div className="input-cont">           {
                
                   [ ...Array(memeData.box_count)].map(
                        (_, index) => (
                            <input key={index} type="text" placeholder="type text"></input>
                        )
                        )
                
            }
            </div>
 
            <div className="buttons">
                <button >Create Meme</button>   
                <button onClick={setMeme(null)} > Choose Template</button> 
            </div>    
            
        </div>
    ); 
};

export default Meme ; 
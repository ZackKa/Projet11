function Tags (props){
    return(
        <div className='tags'>
            {props.tags.map((tag, index) => (
                <span className="tags__tag" key={`${index}`}>{tag}</span>
            ))}
        </div>
    )
}
export default Tags
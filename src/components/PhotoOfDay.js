const PhotoOfDay = (props) => {
    const { photoOfDay } =props;

    return (
        <div>
            {photoOfDay && (
                <>
            <h2>{photoOfDay.title}</h2>
            <img src={photoOfDay.url   } />
            <p>{photoOfDay.explanation}</p>
            </>
            )}  
        </div>
    );
};  

export default PhotoOfDay;
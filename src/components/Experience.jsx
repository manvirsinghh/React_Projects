import '../Experience.css';
function Experience({heading,name,date}) {
    return (
        <div>
            <div className='complete'>
                <div>
                    <h3 className="heading">{ heading}</h3>
                </div>
                <div className='right-content'>
                    <div>
                        <div className="name">
                            {name }
                        </div>
                    </div>
                    <div>
                        <div className="date">
                            { date}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Experience;
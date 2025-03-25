import './Container.css'

function MainContainer() {
    return (
        <div className="maincontainer">
            <img className="photo" src='/me.jpeg' width="250px" alt=""/>
            <h2 className="tech">Технологии</h2>
            <div className="techsvg">
                <img src="/icons/nodejs.svg" width="150" alt="" />
                <img src="/icons/java.svg" width="150" alt="" />
                <img src="/icons/python.svg" width="150" alt="" />
                <img src="/icons/mongodb.svg" width="150" alt="" />
                <img src="/icons/postgresql.svg" width="140" alt="" />
                <img src="/icons/docker.svg" width="150" alt="" />
            </div>
        </div>
    )
}

export default MainContainer;
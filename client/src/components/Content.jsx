

const Content = props => {
    const {allTabs, currentTab} = props;

    return (
        <div className="content-box">
            <h1>{allTabs[currentTab].content}</h1>
        </div>
    )
}

export default Content;
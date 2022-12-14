
const Tabs = (props) => {
    const {allTabs, currentTab, setCurrentTab} = props;

    const changeTab = (index) => {
        setCurrentTab(index);
    }

    return (
        <div>
            {allTabs.map((tab, i) => {
                return currentTab === i ? <span className={`tab selected ${i == 0 ? "first-tab" : ""}`}>{tab.label}</span> : <span onClick={(e) => changeTab(i)} className={`tab unselected ${i == 0 ? "first-tab" : ""}`}>{tab.label}</span>
            })}
        </div>
    )
}

export default Tabs;
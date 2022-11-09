import PlanItem from "./PlanItem";

const PlanList = ({planList, setPlanList}) => {    
    return(
        <ul>
            {planList && planList.map((planItem) => {
                if(planItem.deleted) return null;
                else return(
                    <PlanItem 
                    key={planItem.id} 
                    planItem={planItem} 
                    planList={planList} 
                    setPlanList={setPlanList}/> 
                );
            })}
        </ul>
    );
}

export default PlanList;
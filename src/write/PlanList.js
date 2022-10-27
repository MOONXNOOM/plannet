import PlanItem from "./PlanItem";

const PlanList = ({planList, setPlanList}) => {    
    return(
        <ul>
            {planList &&
                planList.map((planItem) => 
                <PlanItem 
                key={planItem.id} 
                planItem={planItem} 
                planList={planList} 
                setPlanList={setPlanList}
            />  
            )}
            
        </ul>
    );
}
export default PlanList;
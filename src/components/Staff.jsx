
import S from "../constants/index";
const Staff = () => {
  return (
    <section className="mt-[5em] h-[100vh] grid grid-cols-3 w-3/5 mx-auto gap-12 ">
        
        {
            S.STAFF.map((staff,index) => {
                console.log(`${index}: ${staff.title}`);
                return(<div key={index} className="h-[100%] w-[100%] flex flex-col gap y-2 border">
                    <div>
                        {staff.pic}
                    </div>
                    <h3 className="text-center">{staff.title}</h3>
                    <h3 className="text-center">{staff.name}</h3>
                </div>)
            })
        }
    </section>
  );
}

export default Staff;
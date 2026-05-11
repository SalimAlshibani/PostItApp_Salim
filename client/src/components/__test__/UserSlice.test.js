import reducer from '../../features/UserSlice';

const test_state={
    user:{},
    message:"",
    isLoading:false,
    isSuccess:false,
    isError:false
 }

describe("testing slice",()=>{
    it("testing intail state",()=>{
        expect(reducer(undefined,{type:undefined})).toEqual(test_state);
    })
})
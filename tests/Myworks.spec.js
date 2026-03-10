const testdata=require("../Utils/testdata");
const {Mywork,test}=require("../fixtures/baseTest")

test("verify the Comment Button functionality @sanity",async ({Mywork,loggedInPage})=>
{
       await Mywork.commentBtn();
})
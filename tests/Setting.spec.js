const {expect,test} = require("../fixtures/baseTest")
const testdata =require("../Utils/testdata")


test("verify the setting button functionality @sanity",async({Settingpg,loggedInPage})=>
{
    await Settingpg.settingBtn();
})
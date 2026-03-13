import { test, expect } from '../fixtures/baseTest';
import testdata from "../Utils/testdata";


test("verify the setting button functionality @sanity",async({Settingpg,loggedInPage})=>
{
    await Settingpg.settingBtn();
    expect(Settingpg.page).toHaveURL("https://x-med.in/settings/ESignaturePIN")
})
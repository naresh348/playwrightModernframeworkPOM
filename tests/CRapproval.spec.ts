import { test, expect } from '../fixtures/baseTest'
import testdata from "../Utils/testdata";


test.beforeEach(async ({ crapproval, loggedInPage }) => {
    await crapproval.ClickOnCrApproval();

})


test("Verify the Crapproval button functionality", async ({ crapproval }) => {
    await expect(crapproval.crapprovalbtn).toBeVisible();
})


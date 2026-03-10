class Myworkspage
{
    constructor(page)
    {
        this.page=page;
        this.commentbtn=page.getByRole('tab',{name:'Comments'})
    }

    async commentBtn()
    {
        await this.commentbtn.click();
    }
}
module.exports= Myworkspage;
import {getYj} from "../../utils/permission/yj";
import {delay} from "../../utils/delay/delays";

describe('yj', () => {
    beforeEach( async ()=>{
        await delay();
    })

    it('Should able to get yopmail yj', async () => {
        const yj = await getYj();

        expect(yj).not.toBeUndefined();
    })
})

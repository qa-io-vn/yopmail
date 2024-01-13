import {getVersion} from "../../utils/permission/version";
import {delay} from "../../utils/delay/delays";

describe('version', () => {
    beforeEach( async ()=>{
        await delay(5000);
    })

    it('Should able to get yopmail version', async () => {
        const version = await getVersion();

        expect(version).not.toBeUndefined();
    })
})

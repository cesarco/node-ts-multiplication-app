import { log } from 'node:console';
import { CreateTable } from './create-table.use-case';


describe('CreateTableUseCase', () => {

    test('should create a table with default values', () => {

        const createTable = new CreateTable();
        const table = createTable.execute({ base: 100});

        const rows = table.split('\n').length;
        console.log('table', table);

        expect( createTable ).toBeInstanceOf( CreateTable );
        expect( table ).toContain('100 x 2 = 200');
        expect( table ).toContain('100 x 10 = 1000');
        expect( rows ).toBe(10);
    })

    test('should create a table with custom values', () => {

        const options = {
            base: 3,
            limit: 20
        }
        const table = new CreateTable().execute(options);
        const rows = table.split('\n').length;

        //console.log('table', table);
        expect( table ).toContain('3 x 2 = 6');
        expect( table ).toContain('3 x 20 = 60');
        expect( rows ).toBe(20);
        expect( table ).toContain('3 x 10 = 30');
        expect( table ).toContain('3 x 15 = 45');
        expect( table ).toContain('3 x 5 = 15');
    })
})